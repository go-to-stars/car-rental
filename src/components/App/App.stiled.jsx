import styled from "@emotion/styled";

export const Container = styled.div`  
  width: 1184px;  
  margin: 0 auto;  
  border-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);

  max-width: 56vw;
  margin: 20px auto;
  padding: 15px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.6);
`;

export const TopTitle = styled.h1`
  margin: 0 auto 20px;
`;

export const Title = styled.h2`
  margin: 15px auto;
`;
