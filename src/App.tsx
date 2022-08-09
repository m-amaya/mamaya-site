import { FC, useEffect } from "react";

import ApplyTheme from "~/components/ApplyTheme";
import { StoreProvider } from "~/store";
import { globalStyles } from "~/styles";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <StoreProvider>
      <ApplyTheme>{/* Pages */}</ApplyTheme>
    </StoreProvider>
  );
};

export default App;
