// themes.ts

export interface Theme {
    backgroundColor: string;
    textColor: string;
    accentGreen: string;
    accentPink: string;
    accentOrange: string;
    // otros estilos y colores
  }
  
  export const lightTheme: Theme = {
    backgroundColor: '#FCF7F8',
    textColor: '#504746',
    accentGreen: '#4ED0A2',
    accentPink: '#DC7F9B',
    accentOrange: '#FFA62B'
    // otros estilos y colores
  };
  
  export const darkTheme: Theme = {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    accentGreen: '#4ED0A2',
    accentPink: '#DC7F9B',
    accentOrange: '#FFA62B',
    // otros estilos y colores
  };
  