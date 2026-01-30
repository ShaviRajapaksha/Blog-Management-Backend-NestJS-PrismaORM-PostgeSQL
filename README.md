
# Blog Management Backend

A NestJS-based backend application for managing blog posts using Prisma ORM and PostgreSQL.

## Features

- RESTful API for blog post management
- User authentication and authorization
- Database ORM with Prisma
- PostgreSQL database integration
- Type-safe development with TypeScript

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file in the root directory:
```
DATABASE_URL="postgresql://user:password@localhost:5432/blog_db"
```

2. Run database migrations:
```bash
npx prisma migrate dev
```

## Running the Application

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Endpoints

- `GET /posts` - Retrieve all posts
- `GET /posts/:id` - Get a specific post
- `POST /posts` - Create a new post
- `PATCH /posts/:id` - Update a post
- `DELETE /posts/:id` - Delete a post


