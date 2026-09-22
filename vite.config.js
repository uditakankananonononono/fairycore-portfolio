import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// Stable, named boundaries keep the first atlas shell small while advanced data and
// 3D/runtime dependencies load as independent cacheable chunks.
export default defineConfig({
  plugins:[react()],
  build:{
    sourcemap:false,
    chunkSizeWarningLimit:700,
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes('/node_modules/three/')||id.includes('/node_modules/@react-three/'))return 'three-runtime';
          if(id.includes('/node_modules/react/')||id.includes('/node_modules/react-dom/'))return 'react-runtime';
          if(id.includes('/node_modules/lucide-react/'))return 'icon-runtime';
          if(id.includes('/src/content/documents.json')||id.includes('/src/content/activities.json'))return 'canonical-corpus';
          if(id.includes('/src/content/evidence-graph.json')||id.includes('/src/content/drive.json'))return 'provenance-data';
          if(id.includes('/src/content/relationship-weave.json')||id.includes('/src/content/questions.json'))return 'relationship-question-data';
          if(id.includes('/src/content/skills.json')||id.includes('/src/content/values.json')||id.includes('/src/content/projects.json'))return 'observatory-data';
        }
      }
    }
  }
});
