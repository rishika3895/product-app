# Dockerized Product Management App
<p align="center">
  <img src ="">
</p>

## 🚀 Project Overview

The **Dockerized Product Management App** is a full-stack application built using **Node.js**, **GraphQL**, **MongoDB**, and **React**. It allows users to perform CRUD operations on products, including **pagination** and seamless backend/frontend integration. The project is containerized with **Docker** and supports CI/CD pipelines with **Jenkins** for a scalable and production-ready setup.

---

## 🌟 Features

### Backend:
- **GraphQL API** for CRUD operations.
- MongoDB as the database.
- Pagination support for product listing.
- Dockerized backend for consistent environment.

### Frontend:
- Built using **React**.
- User-friendly UI for:
  - Adding new products.
  - Updating existing products.
  - Deleting products.
  - Viewing products with pagination.
- Responsive and enhanced UI design.

### DevOps:
- Docker Compose to manage backend, frontend, and MongoDB services.
- Jenkins pipeline for CI/CD.

---

## 🛠️ Technologies Used

### Backend:
- **Node.js**
- **Express.js**
- **GraphQL**
- **MongoDB**

### Frontend:
- **React**
- **Apollo Client**

### DevOps:
- **Docker**
- **Jenkins**

---

## 📂 Project Structure

```plaintext
dockerized-product-app/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│       ├── resolvers/
│       ├── models/
│       └── schema/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│       ├── components/
│       └── pages/
├── docker-compose.yml
└── README.md
