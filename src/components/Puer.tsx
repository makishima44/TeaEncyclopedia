import { Link } from "react-router-dom";
import shu from "./../assets/puer/shu.jpg";
import shen from "./../assets/puer/shen.jpg";
import laoChaTo from "./../assets/puer/laoChaTo.jpg";

export type PuerPropsType = {
  id: number;
  variety: string;
  about: string;
  image: string;
};

export const puerArr: PuerPropsType[] = [
  {
    id: 1,
    variety: "Шу Пуэр",
    about:
      "Шу пуэр - это китайский постферментированный чай, который производится в провинции Юньнань. Его изготовление включает ускоренный процесс ферментации, который называется Во Дуй. Bo время этого процесса чайные листья подвергаются воздействию влаги и тепла в контролируемой среде, что приводит к быстрому разложению и превращению в темный чай. Шу пуэр обладает глубоким, насыщенным вкусом c землистыми и древесными нотами. Этот чай ценится за свои пищеварительные и очищающие свойства, a также за способность улучшать метаболизм и снижать уровень холестерина.",
    image: shu,
  },
  {
    id: 2,
    variety: "Шен Пуэр",
    about:
      "Шен пуэр (или Сырой Пуэр) – это традиционный китайский постферментированный чай, который также производится в провинции Юньнань. В отличие от Шу пуэра, Шен пуэр проходит естественный процесс старения, который может длиться десятилетиями. В ходе этого процесса чай приобретает сложный вкусовой профиль с фруктовыми, цветочными и иногда дымчатыми нотами. Шен пуэр известен своими тонизирующими и омолаживающими свойствами, а также способностью улучшать пищеварение и обладать антиоксидантным эффектом.",
    image: shen,
  },
  {
    id: 3,
    variety: "Старые чайные головы",
    about:
      "Старые чайные головы, известные также как Лао Ча Тоу, представляют собой уникальный вид шу пуэра, который образуется в процессе традиционного производства этого чая. Во время ферментации, некоторые листья чая спрессовываются в комки, которые затем выделяются в отдельную категорию. Эти головы отличаются более насыщенным и глубоким вкусом по сравнению с обычным шу пуэром, а также более высокой концентрацией полезных веществ. Они ценятся за свои антиоксидантные свойства, способность укреплять сердце и сосуды и потенциальное противовоспалительное действие. Считается, что старые чайные головы способствуют долголетию и обладают уникальными целебными свойствами, которые усиливаются с возрастом чая.",
    image: laoChaTo,
  },
];

export const Puer = () => {
  return (
    <div>
      <h2 className="teaTitle">Пуэр</h2>
      <p>
        <b>Пуэр</b> - постферментированный чай. Отличается специфической
        технологией производства: собранные листья, обработанные до уровня
        зелёного чая, подвергаются процедуре микробной ферментации —
        естественному либо искусственному (ускоренному) старению. Ферментация
        происходит под действием Aspergillus acidus, плесневых грибов рода
        Аспергилл. Главной отличительной чертой пуэров является стадия
        ферментации, которая может занимать различное время. Участвующие в ней
        микроорганизмы заметно меняют химический состав и вкусовые качества чая.
      </p>
      <h2 className="teaTitle">Виды пуэра:</h2>
      <div className="teaVarietyBlock">
        {puerArr.map((p) => (
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