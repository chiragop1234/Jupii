const { execSync } = require('child_process');

// Update and install required packages
execSync('apt-get update');
execSync('apt-get install -y python3 python3-pip');

// Set the working directory
execSync('mkdir /app');
process.chdir('/app');

// Install JupyterLab
execSync('pip3 install jupyterlab');

// Expose port 8080
const port = 8080;

// Start JupyterLab on port 8080 without authentication
execSync(`jupyter lab --ip=0.0.0.0 --port=${port} --no-browser --allow-root --NotebookApp.token=''`);
