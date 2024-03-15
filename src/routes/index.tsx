import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Card from "../components/Card";
import { getPaques } from "../components/utils/datesFinder";

// const cocos = [
//   {

//     {
//       date:
//     }
//   }
// ]
const paques = getPaques();
export default function Index() {
  return (
    <MaxWidthWrapper>
      {/* {dates.map((date) => ( */}
      <Card dateElements={paques} />
      {/* ))} */}
    </MaxWidthWrapper>
  );
}
