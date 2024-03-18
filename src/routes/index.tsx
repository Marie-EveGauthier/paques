import styled from "styled-components";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Card from "../components/Card";
import { getHollyWeekForCurrentYear } from "../components/utils/datesFinder";

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export default function Index() {
  const hollyWeek = getHollyWeekForCurrentYear();
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        {hollyWeek.map((date) => (
          <Card date={date} key={date} />
        ))}
      </CardWrapper>
    </MaxWidthWrapper>
  );
}
