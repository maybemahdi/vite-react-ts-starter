# Create a vite project with react and typescript:

```
npm create vite@latest project-name --template react-ts
cd project-name
npm install react@latest react-dom@latest
npm install vite@latest @vitejs/plugin-react@latest
npm install @types/react@latest @types/react-dom@latest
npm install
```

# Install TailwindCSS Latest Version (v4)

```
npm install tailwindcss @tailwindcss/vite

* vite.config.ts:

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

* index.css

@import "tailwindcss";
```