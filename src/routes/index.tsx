import styled from "styled-components";

import dataJSON from "../data.json";

import Card from "../components/Card";
import { getHollyWeekForCurrentYear } from "../utils/datesFinder";

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: var(--space-xl) 0;
`;

export default function Index() {
  const hollyWeek = getHollyWeekForCurrentYear();

  return (
    <CardWrapper>
      {hollyWeek.map((date, index) => {
        const content = dataJSON.find((data) => data.order === index + 1);
        return <Card date={date} key={date} content={content} />;
      })}
    </CardWrapper>
  );
}
