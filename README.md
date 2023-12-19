# Yoga Classes Admission Form

## Project Overview

The goal of this project is to develop a robust admission form for monthly Yoga Classes. The implementation incorporates advanced technologies such as React for the frontend, Node.js with Express for the backend (hosted on Railway), MongoDB for data storage, and Zod for type-checking.

## System Requirements

### 1. Age Validation

Participants are required to fall within the age range of 18 to 65 to be eligible for enrollment. This criterion will be rigorously enforced through Zod for robust type-checking on the backend.

### 2. Monthly Fee Structure

A sophisticated payment system has been implemented where participants are obligated to pay a monthly fee of 500/- Rs INR. The payment process is facilitated through a mock function named `CompletePayment()`, abstracting the complexities of actual payment processing.

### 3. Enrollment and Payment Flexibility

To enhance user experience, participants have the flexibility to enroll on any day of the month. Additionally, the payment process is not bound by a specific date, allowing participants to pay their fees at any time during the month.

### 4. Batch Selection Mechanism

The admission form accommodates four batches a day - 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants have the liberty to choose any batch during a month. Furthermore, they can seamlessly transition to a different batch in the subsequent month, fostering adaptability.

## Technology Stack

### Frontend

- **Framework:** React

### Backend

- **Runtime:** Node.js
- **Framework:** Express

### Database

- **Storage:** MongoDB

### Type-Checking

- **Library:** Zod

## Deployment

The entire application is hosted on Railway, ensuring a scalable and efficient deployment process. The frontend, backend, and database are seamlessly integrated to provide a cohesive user experience.

## Data Storage

The MongoDB database stores user information, adhering to a well-defined schema. Below is a high-level overview of the database structure:

```json
{
  "_id": ObjectId,
  "name": String,
  "age": Number,
  "selectedBatch": String,
  "paymentStatus": Boolean,
  // Additional fields as needed
}
```

## Conclusion

This admission form leverages cutting-edge technologies to provide a secure, flexible, and user-friendly experience for participants enrolling in monthly Yoga Classes. The integration of Zod ensures type safety, Railway facilitates efficient hosting, and MongoDB serves as a reliable data store for seamless data management.

