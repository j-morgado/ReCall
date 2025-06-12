import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/deck': 'http://localhost:3000',
      '/deckList': 'http://localhost:3000',
      '/newDeck': 'http://localhost:3000',
    },
  },
});
