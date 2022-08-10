import { FC } from "react";
import {
  FiAward,
  FiBriefcase,
  FiCoffee,
  FiExternalLink,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useThemeStore } from "~/store";
import { styled } from "~/styles";
import { StitchesCSS } from "~/types";
import Tab from "./Tab";

const HeaderStyled = styled("header", {
  padding: 16,
  "@tablet": {
    padding: "16px 24px",
    minWidth: 200,
    width: "20%",
  },
  "@desktop": {
    padding: "32px 80px",
  },
});

const LinkList = styled("ul", {
  alignItems: "center",
  display: "grid",
  gridAutoRows: 48,
  width: "100%",
});

const iconCss: StitchesCSS = {
  marginBottom: 2,
};

const AwardIcon = styled(FiAward, iconCss);
const BriefcaseIcon = styled(FiBriefcase, iconCss);
const CoffeeIcon = styled(FiCoffee, iconCss);
const ExternalLinkIcon = styled(FiExternalLink, {
  ...iconCss,
  color: "#757575",
  fontSize: 14,
} as StitchesCSS);
const GitHubIcon = styled(FiGithub, iconCss);
const HomeIcon = styled(FiHome, iconCss);
const LinkedInIcon = styled(FiLinkedin, iconCss);

const Header: FC = () => {
  const { isDarkTheme, toggleTheme } = useThemeStore();
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <nav>
        <LinkList>
          <Tab isWidow onClick={() => toggleTheme()}>
            {isDarkTheme ? <FiSun /> : <FiMoon />}
          </Tab>
          <Tab to='/' isStart isActive={pathname === "/"}>
            <HomeIcon /> Home
          </Tab>
          <Tab to='/portfolio' isActive={pathname === "/portfolio"}>
            <BriefcaseIcon /> Portfolio
          </Tab>
          <Tab to='/blog' isActive={pathname === "/blog"}>
            <CoffeeIcon /> Blog
          </Tab>
          <Tab to='/resume' isEnd isActive={pathname === "/resume"}>
            <AwardIcon /> Resume
          </Tab>
          <Tab href='https://github.com/m-amaya' isWidow>
            <GitHubIcon /> <ExternalLinkIcon />
          </Tab>
          <Tab href='https://www.linkedin.com/in/mamayadev' isWidow>
            <LinkedInIcon /> <ExternalLinkIcon />
          </Tab>
        </LinkList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
