import { useParams } from "react-router-dom";
import { PuerPropsType } from "./Puer";
import { useSelector } from "react-redux";
import { RootStateType } from "../state/ReduxStore";
type Props = {};

export const Variety = (props: Props) => {
  const puerArr = useSelector<RootStateType, Array<PuerPropsType>>(
    (state) => state.puer
  );
  const params = useParams();
  const currentVariety = puerArr.find((el) => el.id === Number(params.id));
  return (
    <div className="varietyBlock">
      {currentVariety ? (
        <>
          <h2>{currentVariety.variety}</h2>
          <p>{currentVariety.about}</p>
          <img className="teaImg" src={currentVariety.image} alt="" />
        </>
      ) : (
        <h2>Иди нахуй пей чефир</h2>
      )}
    </div>
  );
};
