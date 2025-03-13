const Url = require('../models/url.model');
const { v4: uuidv4} = require('uuid');

const createShortCode = async (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ 
            status: 'error',
            message: 'Please provide a long URL'
        });
    }

    try {
        let url = await Url.findOne({ longUrl });
        if (url) {
            return res.json({
                status: 'success',
                message: 'Short URL already exists',
                shortUrl: `${process.env.BASE_URL}/${url.shortCode}`
            });
        }

        const shortCode = uuidv4();

        const newUrl = { 
            longUrl, 
            shortCode
        };
        url = new Url(newUrl);
        await url.save();
        return res.status(201).json({
            status: 'success',
            message: 'Short URL created successfully',
            shortUrl: `${process.env.BASE_URL}/${url.shortCode}`
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            status: 'error',
            message: 'Internal server error'
        });
    }
};

const redirectUrl = async (req, res) => {
    const { shortCode } = req.params;
    if (!shortCode) {
        return res.status(400).json({
            status: 'error',
            message: 'Please provide a short code'
        });
    }
    try {
        const url = await Url.findOne({ shortCode });
        if (!url) {
            return res.status(404).json({
                status: 'error',
                message: 'Long URL not found'
            });
        }

        url.clicks++;
        await url.save();
        return res.status(302).redirect(`${url.longUrl}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

module.exports = {
    createShortCode,
    redirectUrl
};