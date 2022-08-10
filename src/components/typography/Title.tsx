import { styled } from "~/styles";

const Title = styled("h1", {
  color: "$pink",
  fontFamily: "$heading",
  fontSize: 56,
  letterSpacing: "0.15em",
  lineHeight: "1.25em",
  margin: 0,
  padding: 0,
  "@tablet": {
    fontSize: 88,
  },
  "@desktop": {
    fontSize: 96,
  },
});

export default Title;
