import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.tsx';
import Header from './components/layout/Header.tsx';
import { useSmoothScroll } from "./components/ui/hook.tsx";

// Wrapper component to use the global smooth scroll hook
function Root() {
  useSmoothScroll(); // Hook applied globally

  return (
    <>
      <Header />
      <div className="pt-16">
        <App />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
