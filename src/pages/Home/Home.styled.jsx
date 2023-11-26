import styled from "@emotion/styled";
import { ReactComponent as StartGreetingsPicture } from "../../img/start.svg";
import { ReactComponent as GreetingsPicture } from "../../img/greetingsPicture.svg";

export const StartImg = styled(StartGreetingsPicture)`
  width: 100px;
  height: 50px;

  fill: currentColor;
`;

export const Img = styled(GreetingsPicture)`
  width: 200px;
  height: 100px;

  fill: currentColor;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  margin: 0 auto;
  padding: 150px 25px 0px 25px;

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
