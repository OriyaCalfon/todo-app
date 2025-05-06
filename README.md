## Todo App (Full Stack Dockerized)

A full-stack task management application featuring a clean and responsive UI, built with a React client, Node.js + Express server, and PostgreSQL database.
All services are containerized using Docker for seamless local development and deployment.

## Technologies

- **Frontend**: React + Vite  
- **Backend**: Node.js + Express + TypeORM  
- **Database**: PostgreSQL  
- **Containerization**: Docker + Docker Compose

## Setup Instructions

1. **Environment Configuration**  
   - Create a `.env` file inside the `todo_server` directory.  
   - Use the provided `.env.example` as a template.  
   - Replace `DB_PASSWORD` value with your own.

2. **Start the Application**  
   Run the following command from the project root to build and start all services:
   ```bash
   docker-compose up --build
