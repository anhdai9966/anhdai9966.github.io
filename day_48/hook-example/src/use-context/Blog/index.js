import { createContext, useState } from 'react';
import Section from './Section';

// props : theme: light, dark
// blog => section => paragraph

// Context: createContext()
// Provider: cung cấp value cho context
// Consumer: lấy giá trị từ context

export const ThemeContext = createContext();

export default function Blog() {
  const [theme, setTheme] = useState('dark');
  const [fontsize, setFontsize] = useState(16);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const toggleFontsize = () => {
    setFontsize(fontsize === 16 ? 48 : 16);
  };

  const value = {
    theme,
    fontsize,
  };
  return (
    <ThemeContext.Provider value={value}>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={toggleFontsize}>toggle 2</button>
      <Section />
    </ThemeContext.Provider>
  );
}
