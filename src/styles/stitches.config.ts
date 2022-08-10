import { createStitches } from "@stitches/react";
import { tokens } from "~/tokens";
import rgba from "~/utils/rgba";

function replace<T>(vars: T, template: string) {
  type KeyType = keyof T;
  const tokens = {} as Record<KeyType, string>;

  for (const key in vars) {
    tokens[key] = template.replace("%", `${vars[key]}`);
  }

  return tokens;
}

const {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  palette,
  zIndex,
} = tokens;

const lightTheme = {
  pageBg: palette.white,
  text: palette.gray900,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: { ...palette, ...lightTheme },
    fonts,
    fontSizes: replace(fontSizes, "%px"),
    fontWeights,
    lineHeights: replace(lineHeights, "%px"),
    zIndices: zIndex,
  },
  media: replace(breakpoints, "(min-width: %px)"),
  utils: {
    // states
    focusRing: (color: keyof typeof palette) => ({
      outlineColor: rgba(color, 0.35),
      outlineStyle: "solid",
      outlineWidth: 3,
    }),
    // box model
    noSpace: () => ({
      margin: 0,
      padding: 0,
    }),
    // animation
    smoothTransition: (properties: string[]) => ({
      transitionDuration: "200ms",
      transitionProperty: properties.join(", "),
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    pageBg: palette.gray900,
    text: palette.gray400,
  },
});
