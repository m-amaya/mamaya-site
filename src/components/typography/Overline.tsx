import { styled } from "~/styles";

const Overline = styled("div", {
  backgroundColor: "$teal",
  borderRadius: 2,
  color: "$gray900",
  display: "inline-block",
  fontFamily: "$overline",
  fontWeight: 500,
  lineHeight: "1.25em",
  letterSpacing: "0.25em",
  paddingLeft: 4,
  paddingRight: 4,
  textTransform: "uppercase",
});

export default Overline;
