import React, { createContext, useState } from 'react';

export const Themecontext = createContext(null); 
// Initial value can be null or a default theme object

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light'); // Initial theme state

      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
        <Themecontext.Provider value={{ theme, toggleTheme }}>
          {children}
        </Themecontext.Provider>
      );
    };