import { OrgSchemeItemType } from "@orgStructure";
import { useContext } from "react";
import { SchemeItemEnum } from "../../enums";
import { useChildrenCount } from "../../hooks";
import { theme } from "../../theme";
import { ColorContext } from "../../utils";
import { SchemeCardBorderSvg } from "../Svg/Svg";
import {
  StyledSchemeCard,
  StyledSchemeCardBorderSvg,
  StyledSchemeTrigger,
} from "./Scheme.styled";

export type SchemeCardProps = OrgSchemeItemType & {
  type?: SchemeItemEnum;
  active: boolean;
  handleActive: () => void;
};

const SchemeCard = ({
  type = SchemeItemEnum.Subordinate,
  name,
  jobTitle,
  department,
  avatarUrl,
  items,
  active,
  handleActive,
}: SchemeCardProps) => {
  const childrenCount = useChildrenCount(items);
  const color = useContext(ColorContext) || theme.colors.cadetblue;

  return (
    <StyledSchemeCard type={type} onClick={handleActive} active={active}>
      {type === SchemeItemEnum.Supervisor && (
        <StyledSchemeCardBorderSvg active={active}>
          <SchemeCardBorderSvg color={color} />
        </StyledSchemeCardBorderSvg>
      )}
      {department && type !== SchemeItemEnum.Subordinate && (
        <h2 title={department}>{department}</h2>
      )}
      {type !== SchemeItemEnum.Group && (
        <>
          {avatarUrl && <img src={avatarUrl} alt={name} />}
          <h3 title={name}>{name}</h3>
          {jobTitle && <h5 title={jobTitle}>{jobTitle}</h5>}
        </>
      )}
      {childrenCount > 0 && (
        <StyledSchemeTrigger color={color} type={type}>
          {!active ? (
            <strong>
              {!!childrenCount ? childrenCount : "нет"} сотрудников
            </strong>
          ) : (
            <span />
          )}
        </StyledSchemeTrigger>
      )}
    </StyledSchemeCard>
  );
};

export default SchemeCard;
