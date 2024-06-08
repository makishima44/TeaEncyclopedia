import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../state/ReduxStore";
import { PuerPropsType } from "../state/puerTea-reducer";

export const Puer = () => {
  const puerArr = useSelector<RootStateType, Array<PuerPropsType>>(
    (state) => state.puer
  );

  const generalDescription = puerArr[0];

  return (
    <div className="teaBlock">
      <h2 className="teaTitle">Пуэр</h2>
      <p>{generalDescription.about}</p>
      <h2 className="teaTitle">Виды пуэра:</h2>
      <div className="teaVarietyBlock">
        {puerArr.slice(1).map((p) => (
          <div>
            <Link to={`/Puer/${p.id}`} key={p.id}>
              <span>{p.variety}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
