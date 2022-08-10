import { FC } from "react";
import { About } from "~/components/home";
import PageTitle from "~/components/PageTitle";

const Home: FC = () => {
  return (
    <>
      <PageTitle overline='Frontend Engineer'>mamaya</PageTitle>
      <About />
    </>
  );
};

export default Home;
