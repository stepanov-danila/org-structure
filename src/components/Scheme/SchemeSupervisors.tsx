import { OrgSchemeItemType } from "@orgStructure";
import { SchemeItemEnum, SchemeItemSideEnum } from "../../enums";
import { useSiblings } from "../../hooks";
import {
  ColorContext,
  getSideFromIndexArray,
  SideContext,
  supervisorColors,
} from "../../utils";
import { StyledSchemeSiblingsItems } from "./Scheme.styled";
import SchemeItem from "./SchemeItem";

type SchemeSupervisorsProps = {
  supervisors: OrgSchemeItemType[];
};

const SchemeSupervisors = ({ supervisors }: SchemeSupervisorsProps) => {
  const {
    activeItemIndex,
    setActiveItemIndex,
    ref,
    containerWidth,
    itemsCount,
  } = useSiblings(supervisors);

  return (
    <StyledSchemeSiblingsItems ref={ref}>
      {supervisors.map((supervisor, index) => (
        <ColorContext.Provider value={supervisorColors[index]}>
          <SideContext.Provider
            value={getSideFromIndexArray(supervisors, index)}
          >
            <SchemeItem
              key={index}
              index={index}
              showSiblings={index === activeItemIndex}
              handleShowSiblings={setActiveItemIndex}
              isFirst={index === 0}
              isLast={index === itemsCount - 1}
              containerWidth={containerWidth}
              type={SchemeItemEnum.Supervisor}
              {...supervisor}
            />
          </SideContext.Provider>
        </ColorContext.Provider>
      ))}
    </StyledSchemeSiblingsItems>
  );
};

export default SchemeSupervisors;
