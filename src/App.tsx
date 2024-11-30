import './App.css'

import { cn } from "@/lib/utils";
import "@/lib/i18n";

import { useTranslation } from "react-i18next";

import GridPattern from "@/components/ui/grid-pattern";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { LanguageToggle } from './components/ui/lang-toggle';

import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import { useEffect } from 'react';

export function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <>
      <GridPattern
        width={20}
        height={20}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        ) + ' fixed'}
      />
      <div className='absolute top-10 right-10 flex items-center space-x-2'>
        <LanguageToggle />
        <ModeToggle />
      </div>
      <Hero />
      <About />
    </>
  )
}

export default App;
