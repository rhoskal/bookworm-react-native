import React from "react";

import AppContainer from "./app_navigator";
import { Splash } from "../routes";

export function BootstrapLoader() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    _initialize();
  }, []);

  function _initialize(): void {
    setTimeout(() => setIsReady(true), 1000);
  }

  return isReady ? <AppContainer /> : <Splash />;
}
