import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import and run vite build
const vite = require('vite');

vite.build().catch((err) => {
  console.error(err);
  process.exit(1);
});
