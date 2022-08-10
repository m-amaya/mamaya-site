import { styled } from "~/styles";

const Section = styled("section", {
  display: "flex",
  justifyContent: "center",
});

export const Content = styled("div", {
  padding: 16,
  maxWidth: 800,
  width: "100%",
  "@tablet": {
    padding: 40,
  },
});

export default Section;
