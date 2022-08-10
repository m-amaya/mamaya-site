import { FC, PropsWithChildren } from "react";

import { Header } from "~/components/header";
import { styled } from "~/styles";

const Main = styled("main", {
  "@tablet": {
    flex: 1,
  },
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
