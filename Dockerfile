FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the Vite app
RUN npm run build

# Expose port (Vite uses 5173 by default, but check your vite.config.ts)
EXPOSE 5173

# Start the Vite preview server (for production)
CMD ["npm", "run", "preview"]

# Alternative: For development mode (not recommended for production)
# CMD ["npm", "run", "dev"]