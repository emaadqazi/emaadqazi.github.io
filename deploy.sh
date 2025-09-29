#!/bin/bash

# Build the React app
npm run build

# Copy build files to root for GitHub Pages
cp -r build/* .

# Add and commit changes
git add .
git commit -m "Deploy React app to GitHub Pages"
git push origin main

echo "Deployment complete! Your site should be live at https://emaadqazi.github.io/emaadqazi.github.io/"
