import { useContext } from 'react';
import LeftSection from './components/LeftSection.jsx';
import RightSection from './components/RightSection.jsx';
import { ThemeContext } from './context/ThemeProvider.jsx';

export default function GeminiMind() {
  const [theme]= useContext(ThemeContext); 
  return (
    <div className={`flex flex-col lg:flex-row lg:w-screen lg:h-screen ${theme === 'light' ? 'bg-slate-800' : 'bg-zinc-100'}`}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
