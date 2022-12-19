import { TogglerTypeEnum } from "../../enums";
import { ArrowDownSvg, ArrowUpSvg, MinusSvg, PlusSvg } from "../Svg/Svg";
import { StyledToggler } from "./Table.styled";

export type TogglerProps = {
  type: TogglerTypeEnum;
  active: boolean;
  handleClick: () => void;
  style?: React.CSSProperties;
};

const Toggler = ({ type, active, handleClick, style }: TogglerProps) => {
  const activeIcon =
    type === TogglerTypeEnum.Collapse ? <ArrowUpSvg /> : <MinusSvg />;
  const noactiveIcon =
    type === TogglerTypeEnum.Collapse ? <ArrowDownSvg /> : <PlusSvg />;

  return (
    <StyledToggler onClick={handleClick} style={style}>
      {active ? activeIcon : noactiveIcon}
    </StyledToggler>
  );
};

export default Toggler;
