import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import Routes from "./src/Routes";
import DefaultScreen from "./src/components/DefaultScreen";

export default function App() {
  return (
    <DefaultScreen>
      <Routes />
    </DefaultScreen>
  );
}
