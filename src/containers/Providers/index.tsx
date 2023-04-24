import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PathProvider } from "hooks";

interface Props {
  children?: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <PathProvider>
          <>{children}</>
        </PathProvider>
      </BrowserRouter>
    </>
  );
};

export default Providers;
