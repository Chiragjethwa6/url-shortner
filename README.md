# URL Shortener

## Overview
This project is a URL Shortener service that allows users to shorten long URLs into compact, unique short URLs. The service supports redirection from short URLs to the original long URLs while tracking analytics such as click counts.

---

## Development Considerations
- **Analysys:**
  - Analyzing the requirements with CEO
  - Discussing the trade-offs between different approaches and scope of the system
  - Designning the system architecture
  - Implementing the wokring model with core functionalities

- **Planning & Design:**
  - MongoDB Database - Optimized for high read performance and availability
  - UUID - Used for generating unique short codes, ensuring every short code is unique

- **Tech Stack:**
  - Backend: Node.js, Express.js
  - Database: MongoDB (using Mongoose ORM)
  - Testing: Jest & Supertest

---

## Implementation Details

### Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Chiragjethwa6/url-shortner
   cd url-shortner
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=
   BASE_URL=
   MONGO_URI=
   ```
4. Start the server:
   ```sh
   npm start
   ```

### API Endpoints

#### 1. Shorten a URL
- **Endpoint:** `POST /api/shorten`
- **Request:**
  ```json
  {
    "longUrl": {longUrl}
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Short URL created successfully",
    "shortUrl": {shortUrl}
  }
  ```

#### 2. Redirect to Original URL
- **Endpoint:** `GET /:shortCode`
- **Example:** Visiting `shortUrl` redirects to `longUrl`.

---

## Post-Deployment Considerations

### Monitoring & Maintenance
- **Logging & Error Handling:** Implement structured logging.
- **Analytics Tracking:** Log click counts and analyze traffic sources.
- **Database Cleanup:** Expire old short links using background jobs.

### Automation & Testing
- Unit and integration tests using Jest & Supertest.
- CI/CD pipeline to automate testing before deployment.

### Future Enhancements
- **Validations:** To validate the URL and parameters
- **Custom Short Links:** Allow users to specify custom short codes.
- **Rate Limiting:** To prevent abuse using rate-limiting middleware.
- **User Authentication:** Implement user accounts to track shortened URLs.
- **Caching for High Availability:** Implement caching for high performance.
- **Load Balancer:** Distribute traffic across multiple servers

---

## Conclusion
This project provides a scalable and efficient URL shortening service with room for future enhancements. The core focus was designing a system that is easy to use while maintaining scalability and security.

