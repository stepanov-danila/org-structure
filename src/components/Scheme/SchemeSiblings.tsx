import { OrgSchemeItemType } from "@orgStructure";
import { useSiblings } from "../../hooks";
import SchemeExpand from "./SchemeExpand";
import SchemeItem from "./SchemeItem";
import SchemeSiblingsLine from "./SchemeSiblingsLine";
import {
  StyledSchemeSiblings,
  StyledSchemeSiblingsItems,
} from "./Scheme.styled";
import { SchemeItemEnum } from "../../enums";
import { ParentInfoContext, SideContext } from "../../utils";
import { useContext } from "react";

export type SchemeSiblingsProps = {
  items: OrgSchemeItemType[];
  limit: number;
  onExpand: () => void;
};

const SchemeSiblings = ({ items, limit, onExpand }: SchemeSiblingsProps) => {
  const {
    activeItemIndex,
    setActiveItemIndex,
    ref,
    containerWidth,
    itemsCount,
  } = useSiblings(items);

  const side = useContext(SideContext);
  const { parentId, parentType } = useContext(ParentInfoContext);

  const getType = (item: OrgSchemeItemType): SchemeItemEnum => {
    if (item.items.length > 0) {
      if (item.id === parentId) {
        return SchemeItemEnum.Group;
      } else {
        return SchemeItemEnum.SubordinateSupervisor;
      }
    } else {
      return SchemeItemEnum.Subordinate;
    }
  };

  return (
    <StyledSchemeSiblings parentType={parentType} side={side}>
      <SchemeSiblingsLine itemsCount={itemsCount} />
      <StyledSchemeSiblingsItems ref={ref}>
        {items.slice(0, limit).map((item, index) => (
          <SchemeItem
            key={index}
            index={index}
            type={getType(item)}
            showSiblings={index === activeItemIndex}
            handleShowSiblings={setActiveItemIndex}
            isFirst={index === 0}
            isLast={index === itemsCount - 1}
            containerWidth={containerWidth}
            {...item}
          />
        ))}
        {itemsCount > limit && (
          <SchemeExpand onClick={onExpand}>
            {`+${itemsCount - limit}`}
          </SchemeExpand>
        )}
      </StyledSchemeSiblingsItems>
    </StyledSchemeSiblings>
  );
};

export default SchemeSiblings;
