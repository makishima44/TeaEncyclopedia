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
    </div>
  );
};
