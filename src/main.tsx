import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'unfonts.css';
import App from './App.tsx'

import { ThemeProvider } from "@/components/theme-provider"
import AnimatedCursor from 'react-animated-cursor';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <AnimatedCursor color='245, 245, 245'
        innerStyle={{
          backgroundColor: 'var(--inner-cursor-color)'
        }}
        outerStyle={{
          backgroundColor: 'var(--outer-cursor-color)',
        }}
      />
    </ThemeProvider>
  </StrictMode>,
)
