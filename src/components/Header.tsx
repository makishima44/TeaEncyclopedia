// @flow
import * as React from "react";

import { Clock } from "./Clock";
import { Input } from "./Input";
type Props = {};
export const Header = (props: Props) => {
  return (
    <div className="header">
      <Clock />
      <div></div>
    </div>
  );
};
