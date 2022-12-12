import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledDivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffff0;
  border: 1px lightGrey solid;
  width: 50rem;
  height: 50rem;
  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const StyledDiv = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: darkGrey;
`;

const StyledTextWrapper = styled.text`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  .link {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: darkGrey;
    margin-right: 2rem;
  }
  a:hover {
    color: lightGrey;
  }
`;

export { StyledDivWrapper, StyledDiv, MainWrapper, StyledTextWrapper };
