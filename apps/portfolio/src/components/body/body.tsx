import {
  StyledDivWrapper,
  StyledDiv,
  MainWrapper,
  StyledTextWrapper,
} from "./body.styles";
import Link from "next/link";

function Body() {
  return (
    <MainWrapper>
      <StyledDivWrapper>
        <StyledDiv />
      </StyledDivWrapper>
      <StyledTextWrapper>
        <span>
          <strong>Ishaq Amin</strong> (b. 1989)
        </span>{" "}
        <span>
          <strong>
            A perfectly centered Div inside a perfectly centered Div
          </strong>
          , 2022
        </span>
        <span>
          <strong>React, NextJS, TS, Styled-Components, Jest</strong>,
          Technology
        </span>
        <span className="link">
          {" "}
          <Link href="">
            <strong>CV</strong>
          </Link>
          <Link href="">
            <strong>Portfolio</strong>
          </Link>
        </span>
      </StyledTextWrapper>
    </MainWrapper>
  );
}

export { Body };
