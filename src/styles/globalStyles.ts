import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@import": [
    "url('https://unpkg.com/modern-css-reset/dist/reset.min.css')",
    "url('https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=MuseoModerno:wght@700&family=Offside&family=Overpass+Mono:wght@400;700&display=swap')",
  ],
  "#root > div": {
    backgroundColor: "$pageBg",
    color: "$text",
    fontFamily: "$text",
    fontSize: 16,
    fontWeight: "$regular",
    height: "100vh",
    lineHeight: "1em",
    overflowY: "auto",
    "@tablet": {
      display: "flex",
      flexDirection: "row-reverse",
      fontSize: 18,
    },
  },
  a: {
    color: "$text",
  },
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;
