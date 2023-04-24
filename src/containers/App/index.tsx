import React, { Component, ErrorInfo, Suspense } from "react";

import { lazyLoad } from "config/utils";
import type { ErrorProps } from "./components/ErrorComponent";

const ErrorPage = lazyLoad(() => import("./components/ErrorComponent"));
const Providers = lazyLoad(() => import("../Providers"));
const Layout = lazyLoad(() => import("../Layout"));

interface State {
  error?: ErrorProps;
}

class App extends Component {
  state: State = {};

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);

    this.setState({
      error: {
        title: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause,
      },
    });
  }

  render() {
    const { error } = this.state;

    return (
      <Suspense fallback={null}>
        {!!error ? (
          <ErrorPage {...error} />
        ) : (
          <Providers>
            <Layout />
          </Providers>
        )}
      </Suspense>
    );
  }
}

export default App;
