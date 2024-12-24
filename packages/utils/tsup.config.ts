import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // CommonJS and ES Module
  dts: true, // Generate type declaration files
  clean: true, // Clean the output directory
});
