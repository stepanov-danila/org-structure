export type ThemeColor =
  | "#00AEFF"
  | "#FF8B00"
  | "#985EC7"
  | "#5EC7C0"
  | "#81A8B9"
  | "#1F1F1F"
  | "#000000"
  | "#a6a6a6"
  | "#ffffff"
  | "#e3e2e2"
  | "#f8f7f7";

export type ThemeFont = "'Fira Sans', Arial, sans-serif";

export type Theme = {
  colors: {
    [key: string]: ThemeColor;
  };
  font: {
    primary: ThemeFont;
  };
};

export const theme: Theme = {
  colors: {
    blue: "#00AEFF",
    orange: "#FF8B00",
    purple: "#985EC7",
    lightgreen: "#5EC7C0",
    cadetblue: "#81A8B9",
    black: "#1F1F1F",
    black2: "#000000",
    grey: "#a6a6a6",
    white: "#ffffff",
    cardBg: "#f8f7f7",
    lineStroke: "#e3e2e2",
  },
  font: {
    primary: "'Fira Sans', Arial, sans-serif",
  },
};
