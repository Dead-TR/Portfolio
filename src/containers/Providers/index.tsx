import { FC } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { PathProvider } from "hooks";

interface Props {
  children?: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <HashRouter>
        <PathProvider>
          <>{children}</>
        </PathProvider>
      </HashRouter>
    </>
  );
};

export default Providers;
