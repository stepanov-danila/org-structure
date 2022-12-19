import { useContext } from "react";
import { SchemeItemEnum, SchemeItemSideEnum } from "../../enums";
import { ParentInfoContext, SideContext } from "../../utils";
import { SchemeRoundLineSvg } from "../Svg/Svg";
import {
  StyledSchemeSiblingsLine,
  StyledSchemeVerticalLine,
} from "./Scheme.styled";

export type SchemeSiblingsLineProps = {
  itemsCount: number;
};

const SchemeSiblingsLine = ({ itemsCount }: SchemeSiblingsLineProps) => {
  const side = useContext(SideContext);
  const { parentType } = useContext(ParentInfoContext);

  const renderLines = (count: number): React.ReactNode => {
    let left: JSX.Element | null = <StyledSchemeVerticalLine />;

    let right: JSX.Element | null = null;

    if (count > 1) {
      if (parentType === SchemeItemEnum.Supervisor) {
        if (side === SchemeItemSideEnum.Left) {
          left = (
            <StyledSchemeVerticalLine
              style={{
                position: "relative",
                zIndex: "2",
              }}
            />
          );
          right = (
            <SchemeRoundLineSvg
              style={{
                position: "absolute",
                top: "-1px",
                right: "50%",
                transform: "rotateZ(-90deg) translateY(calc(100% - 1px))",
              }}
            />
          );
        }
        if (side === SchemeItemSideEnum.Right) {
          left = (
            <SchemeRoundLineSvg
              style={{
                position: "absolute",
                top: "-1px",
                right: "50%",
                transform: "rotateZ(180deg) translateX(-1px)",
              }}
            />
          );
          right = <StyledSchemeVerticalLine />;
        }
      } else {
        left = (
          <SchemeRoundLineSvg
            style={{ transform: "rotateZ(180deg) translateX(-1px)" }}
          />
        );
        right = (
          <SchemeRoundLineSvg
            style={{
              transform: `rotateZ(-90deg) translateY(-1px)`,
            }}
          />
        );
      }
    }

    return (
      <>
        {left}
        {right}
      </>
    );
  };
  return (
    <StyledSchemeSiblingsLine parentType={parentType} itemsCount={itemsCount}>
      {renderLines(itemsCount)}
    </StyledSchemeSiblingsLine>
  );
};

export default SchemeSiblingsLine;
