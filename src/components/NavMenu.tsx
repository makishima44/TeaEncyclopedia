import { NavLink } from "react-router-dom";

type Props = {};
export const NavMenu = (props: Props) => {
  return (
    <div className="navMenu">
      <div>
        <NavLink to={"/Puer"}>Пуэр</NavLink>
      </div>
      <div>
        <NavLink to={"/Oolong"}>Улун</NavLink>
      </div>
      <div>
        <NavLink to={"/RedTea"}>Красный чай</NavLink>
      </div>
      <div>
        <NavLink to={"/LSTraining"}>Training_Local_Storage</NavLink>
      </div>
      <div>
        <NavLink to={"/TRBlock"}>Training_Redux_Block</NavLink>
      </div>
    </div>
  );
};
