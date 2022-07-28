import React from "react";
import { StateProviders } from "../Context/StateContext";
import TabContainer from "./TabContainer";

export default function Tabs() {

  return (
    <StateProviders>
      <TabContainer />
    </StateProviders>
  );
}
