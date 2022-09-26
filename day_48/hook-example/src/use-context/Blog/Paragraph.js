import { useContext } from 'react';
import { ThemeContext } from '.';
export default function Paragraph() {
  const { theme, fontsize } = useContext(ThemeContext);
  console.log('🚀 ~ Paragraph ~ theme', ThemeContext);

  return (
    <>
      <p className={theme} style={{ fontSize: fontsize }}>
        lnfdsijaifbadbioadg dsfasdfdas
      </p>
    </>
  );
}
