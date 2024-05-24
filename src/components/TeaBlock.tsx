import { Route, Routes } from "react-router-dom";
import { Oolong } from "./Oolong";
import { Puer } from "./Puer";
import { RedTea } from "./RedTea";
import { Variety } from "./Variety";
import { Button } from "./Button";

type Props = {};
export const TeaBlock = (props: Props) => {
  return (
    <div className="teaBlock">
      <Routes>
        <Route path="/Oolong" element={<Oolong />} />
        <Route path="/Puer" element={<Puer />} />
        <Route path="/RedTea" element={<RedTea />} />
        <Route path="/Puer/:id" element={<Variety />} />
      </Routes>
    </div>
  );
};
