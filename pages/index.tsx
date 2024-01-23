import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@mui/material';

import SideBar from 'components/global/SideBar';
import Project from 'components/Project';
import { lightTheme } from '@util/theme';
import Header from 'components/Project/Header';

export default function App() {
  const setViewHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setViewHeight();
    window.addEventListener('resize', setViewHeight);

    return () => {
      window.removeEventListener('resize', setViewHeight);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Toaster />
      <SideBar />
      <Project />
    </ThemeProvider>
  );
}
