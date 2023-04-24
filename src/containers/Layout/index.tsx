import { useEffect, useRef } from "react";
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

  return <Routes />;
};

export default Layout;
