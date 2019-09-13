import React from "react";

import { Splash } from "../routes";
import AppContainer from "./app_navigator";

export function BootstrapLoader() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(function() {
    _initialize();
  }, []);

  function _initialize(): void {
    setTimeout(() => setIsReady(true), 1000);
  }

  return isReady ? <AppContainer /> : <Splash />;
}
