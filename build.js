#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');

const buildProcess = spawn('node', [vitePath, 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

buildProcess.on('close', (code) => {
  process.exit(code);
});
