import { ButtonBase } from "@material-ui/core";
import { useContext } from "react";
import {
  LineDirectionEnum,
  SchemeItemEnum,
  SchemeItemSideEnum,
} from "../../enums";
import { theme } from "../../theme";
import { ColorContext, ParentInfoContext, SideContext } from "../../utils";
import { SchemeRoundLineSvg } from "../Svg/Svg";
import {
  StyledSchemeExpand,
  StyledSchemeExpandBtn,
  StyledSchemeExpandBtnVerticalLine,
  StyledSchemeExpandInner,
  StyledSchemeLineStrokeSvg,
  StyledSchemeVerticalLongLine,
} from "./Scheme.styled";

type SchemeExpandProps = {
  children: string | React.ReactNode;
  onClick: () => void;
};

const SchemeExpand = ({ children, onClick }: SchemeExpandProps) => {
  const color = useContext(ColorContext) || theme.colors.cadetblue;
  const side = useContext(SideContext);
  const { parentType } = useContext(ParentInfoContext);

  return (
    <StyledSchemeExpand>
      {side === SchemeItemSideEnum.Right &&
      parentType === SchemeItemEnum.Supervisor ? (
        <StyledSchemeVerticalLongLine />
      ) : (
        <StyledSchemeLineStrokeSvg lineDirection={LineDirectionEnum.Right}>
          <SchemeRoundLineSvg style={{ transform: "rotateZ(90deg)" }} />
        </StyledSchemeLineStrokeSvg>
      )}
      <StyledSchemeExpandInner>
        <StyledSchemeExpandBtnVerticalLine />
        <StyledSchemeExpandBtn>
          <ButtonBase style={{ background: color }} onClick={onClick}>
            {children}
          </ButtonBase>
        </StyledSchemeExpandBtn>
      </StyledSchemeExpandInner>
    </StyledSchemeExpand>
  );
};

export default SchemeExpand;
