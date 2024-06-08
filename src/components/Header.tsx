// @flow
import * as React from "react";
import { Button } from "./Button";
import { Clock } from "./Clock";
type Props = {};
export const Header = (props: Props) => {
  return (
    <div className="header">
      <Button name={"1"} size={"big"} color={"main"} />
      <Clock/>
    </div>
  );
};
