import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme.store";

export { ThemeProvider, useThemeStore } from "./theme.store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
