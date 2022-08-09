import { FC, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApplyTheme from "~/components/ApplyTheme";
import BlogPage from "~/pages/Blog";
import HomePage from "~/pages/Home";
import PortfolioPage from "~/pages/Portfolio";
import ResumePage from "~/pages/Resume";
import { StoreProvider } from "~/store";
import { globalStyles } from "~/styles";
import Layout from "./Layout";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <BrowserRouter>
      <StoreProvider>
        <ApplyTheme>
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='blog' element={<BlogPage />} />
              <Route path='portfolio' element={<PortfolioPage />} />
              <Route path='resume' element={<ResumePage />} />
              <Route path='*' element={<HomePage />} />
            </Routes>
          </Layout>
        </ApplyTheme>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
