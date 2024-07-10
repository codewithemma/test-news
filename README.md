# News App with Next.js and MongoDB

=====================================

## Overview

This is a news app built with Next.js and MongoDB, allowing users to create, read, update, and delete news items.

## Features

### Create news items with a title, content, and image

### Update existing news items

### Delete news items

## Technical Details

### Built with Next.js for server-side rendering and static site generation

### Uses MongoDB as the database for storing news items

### Implements CRUD (Create, Read, Update, Delete) operations for news items

## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`

### Environment Variables

- `MONGO_URI`: the connection string for your MongoDB instance

## API Endpoints

### Create News Item

- `POST /api/news`: creates a new news item with the provided title, content, and author

### Read News Items

- `GET /api/news`: retrieves a list of news items with pagination
- `GET /api/news/:slug`: retrieves a single news item by ID

### Update News Item

- `PATCH /api/news/:slug`: updates an existing news item with the provided changes

### Delete News Item

- `DELETE /api/news/:slug`: deletes a news item by ID

## License

This project is licensed under the MIT License. See `LICENSE` for details.
