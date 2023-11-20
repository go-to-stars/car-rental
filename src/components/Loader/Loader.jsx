import { BoxSpinner } from "./Loader.styled";
import { RotatingLines } from "react-loader-spinner";
export const Loader = () => (
  <BoxSpinner>
    <RotatingLines
      strokeColor="#3470FF"
      strokeWidth="5"
      animationDuration="0.8"
      width="96"
      visible={true}
    />
  </BoxSpinner>
); 