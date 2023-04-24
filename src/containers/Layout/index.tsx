import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { usePath } from "hooks";
import { Routes } from "./routeComponents";

const Layout = () => {
  const { page } = usePath();
  const layout = useRef<HTMLDivElement>(null);

  useEffect(() => {
    layout.current?.scrollTo({
      top: 0,
    });
  }, [page.path]);

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <Routes />
    </>
  );
};

export default Layout;
