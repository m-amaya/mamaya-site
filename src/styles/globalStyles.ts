import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": ["url('https://unpkg.com/modern-css-reset/dist/reset.min.css')"],
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;
