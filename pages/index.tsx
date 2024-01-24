import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@mui/material';

import SideBar from 'components/global/SideBar';
import Project from 'components/project';
import { lightTheme } from '@util/theme';
import Header from 'components/project/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

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
