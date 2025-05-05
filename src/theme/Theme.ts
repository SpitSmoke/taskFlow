
import { DefaultTheme } from 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryHover: string;
      background: string;
      text: string;
	  surface: string;
      textSecondary: string;
      border: string;
      error: string;
      errorHover: string;
    };
    sizes: {
      maxWidth: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontSizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      fontWeights: {
        normal: number;
        bold: number;
      };
    };
    borderRadius: string;
    transition: string;
  }
}

// Tema light (padrão)
export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#3B82F6',
    primaryHover: '#2563EB', 
    background: '#FFFFFF',
    text: '#000000',
	surface: '#F3F4F6',
    textSecondary: '#6B7280', 
    border: '#D1D5DB', 
    error: '#EF4444', 
    errorHover: '#B91C1C', 
  },
  sizes: {
    maxWidth: '36rem', 
  },
  spacing: {
    xs: '0.5rem', 
    sm: '1rem',   
    md: '1.5rem', 
    lg: '2rem',   
    xl: '2.5rem', 
  },
  typography: {
    fontSizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.875rem', 
    },
    fontWeights: {
      normal: 400,
      bold: 700, 
    },
  },
  borderRadius: '0.25rem', 
  transition: '0.3s ease',
};

// Tema dark
export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#60A5FA', 
    primaryHover: '#3B82F6', 
    background: '#1F2937', 
    text: '#F9FAFB', 
	surface: '#374151',
    textSecondary: '#9CA3AF', 
    border: '#4B5563', 
    error: '#F87171', 
    errorHover: '#EF4444', 
  },
  sizes: { ...lightTheme.sizes },
  spacing: { ...lightTheme.spacing },
  typography: { ...lightTheme.typography },
  borderRadius: lightTheme.borderRadius,
  transition: lightTheme.transition,
};