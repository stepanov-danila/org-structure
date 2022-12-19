import { createGlobalStyle } from "styled-components";

import FiraSansRegularWoff from "./assets/fonts/FiraSans/firasans-regular.woff";
import FiraSansRegularWoff2 from "./assets/fonts/FiraSans/firasans-regular.woff2";
import FiraSansRegularTtf from "./assets/fonts/FiraSans/firasans-regular.ttf";
import FiraSansMediumWoff from "./assets/fonts/FiraSans/firasans-medium.woff";
import FiraSansMediumWoff2 from "./assets/fonts/FiraSans/firasans-medium.woff2";
import FiraSansMediumTtf from "./assets/fonts/FiraSans/firasans-medium.ttf";
import FiraSansSemiboldWoff from "./assets/fonts/FiraSans/firasans-semibold.woff";
import FiraSansSemiboldWoff2 from "./assets/fonts/FiraSans/firasans-semibold.woff2";
import FiraSansSemiboldTtf from "./assets/fonts/FiraSans/firasans-semibold.ttf";
import FiraSansBoldWoff from "./assets/fonts/FiraSans/firasans-bold.woff";
import FiraSansBoldWoff2 from "./assets/fonts/FiraSans/firasans-bold.woff2";
import FiraSansBoldTtf from "./assets/fonts/FiraSans/firasans-bold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Fira Sans';
  font-weight: 400;
  src: url(${FiraSansRegularWoff2}) format('woff2'),
       url(${FiraSansRegularWoff}) format('woff'),
       url(${FiraSansRegularTtf}) format('ttf');
}
@font-face {
  font-family: 'Fira Sans';
  font-weight: 500;
  src: url(${FiraSansMediumWoff2}) format('woff2'),
       url(${FiraSansMediumWoff}) format('woff'),
       url(${FiraSansMediumTtf}) format('ttf');
}
@font-face {
  font-family: 'Fira Sans';
  font-weight: 600;
  src: url(${FiraSansSemiboldWoff2}) format('woff2'),
       url(${FiraSansSemiboldWoff}) format('woff'),
       url(${FiraSansSemiboldTtf}) format('ttf');
}
@font-face {
  font-family: 'Fira Sans';
  font-weight: 700;
  src: url(${FiraSansBoldWoff2}) format('woff2'),
       url(${FiraSansBoldWoff}) format('woff'),
       url(${FiraSansBoldTtf}) format('ttf');
}
`;

export default FontStyles;
