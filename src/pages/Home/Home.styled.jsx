import styled from "@emotion/styled";
// import { ReactComponent as GreetingsPicture } from "../../img/greetings.svg";

// export const Img = styled(GreetingsPicture)`
//   width: 200px;
//   height: 200px;

//   fill: currentColor;

//   @media (max-width: 1023.98px) {
//     width: 160px;
//     height: 160px;
//   }

//   @media (max-width: 767.98px) {
//     width: 100px;
//     height: 100px;
//   }
// `;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70vw;
  margin: 10vh auto;
  padding: 25px;

  text-align: center;
  background-color: inherit;
`;

export const TitleHome = styled.h1`
  margin-bottom: 15px;

  font-size: 28px;
  color: inherit;
`;

export const TextHome = styled.p`
  margin: 0;

  font-size: 24px;
  color: inherit;
`;

export const ErrorTextHome = styled.p`
  margin: 0;

  font-size: 14px;
  color: red;
`;
