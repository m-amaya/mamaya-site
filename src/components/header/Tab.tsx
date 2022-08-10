import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, LinkProps } from "react-router-dom";
import { styled } from "~/styles";
import { useMediaQuery } from "~/utils";

const TabStyled = styled("li", {
  borderRight: "1px solid $text",
  display: "flex",
  justifyContent: "flex-end",
  height: 48,
  paddingRight: 20,
  position: "relative",
  width: "100%",
  "&::after": {
    backgroundColor: "$text",
    content: "' '",
    display: "block",
    height: 1,
    position: "absolute",
    right: 0,
    top: "50%",
    width: 10,
  },
  variants: {
    isStart: {
      true: {
        "&::before": {
          backgroundColor: "$pageBg",
          content: "' '",
          display: "block",
          height: "50%",
          position: "absolute",
          right: -1,
          top: 0,
          width: 1,
        },
      },
    },
    isEnd: {
      true: {
        "&::before": {
          backgroundColor: "$pageBg",
          bottom: -1,
          content: "' '",
          display: "block",
          height: "50%",
          position: "absolute",
          right: -1,
          width: 1,
        },
      },
    },
    isWidow: {
      true: {
        borderRight: "none",
      },
    },
  },
});

const Content = styled("div", {
  alignItems: "center",
  color: "$text",
  display: "inline-grid",
  fontFamily: "$overline",
  gap: 6,
  gridAutoFlow: "column",
  position: "absolute",
  top: "53%",
  right: 16,
  textTransform: "uppercase",
  transform: "translateY(-50%)",
  zIndex: 1,
  smoothTransition: ["color"],
  variants: {
    isActive: {
      true: {
        color: "$gray900",
        fontWeight: "$bold",
      },
    },
  },
});

const HighlightBar = styled("span", {
  backgroundColor: "$teal",
  borderRadius: 4,
  display: "block",
  height: 20,
  position: "absolute",
  right: 4,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 0,
  smoothTransition: ["width"],
});

const Button = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

interface TabProps extends PropsWithChildren {
  href?: string;
  to?: LinkProps["to"];
  isActive?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  isWidow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Tab: FC<TabProps> = ({
  href,
  to,
  isActive,
  isStart,
  isEnd,
  isWidow,
  children,
  onClick,
}) => {
  const { isGteTablet } = useMediaQuery();
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      if (!isHover && !isActive) {
        setTextWidth(0);
      } else {
        const { width } = textRef.current.getBoundingClientRect();
        const extraPadding = isGteTablet ? 22 : 18;
        setTextWidth(width + extraPadding);
      }
    }
  }, [textRef, isGteTablet, isHover, isActive]);

  const tab = (
    <TabStyled isStart={isStart} isEnd={isEnd} isWidow={isWidow}>
      <Content ref={textRef} isActive={isActive || isHover}>
        {children}
      </Content>
      <HighlightBar css={{ width: textWidth }} />
    </TabStyled>
  );

  if (to) {
    return (
      <Link
        to={to}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {tab}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {tab}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tab}
    </Button>
  );
};

export default Tab;
