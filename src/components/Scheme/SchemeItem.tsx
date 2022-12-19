import { OrgSchemeItemType } from "@orgStructure";
import { useContext, useMemo } from "react";
import { LineDirectionEnum, SchemeItemEnum } from "../../enums";
import {
  useBoundingClientRect,
  useChildrenCount,
  useSubordinatesLimit,
} from "../../hooks";
import {
  getLineDirectionFromLeftOffsetAndWidths,
  ParentInfoContext,
  SideContext,
} from "../../utils";
import { SchemeRoundLineSvg } from "../Svg/Svg";
import {
  StyledSchemeItem,
  StyledSchemeItemInner,
  StyledSchemeLineStrokeSvg,
  StyledSchemeVerticalLine,
  StyledSchemeVerticalLongLine,
} from "./Scheme.styled";
import SchemeCard from "./SchemeCard";
import SchemeSiblings from "./SchemeSiblings";

export type SchemeItemProps = OrgSchemeItemType & {
  index: number;
  showSiblings: boolean;
  handleShowSiblings: React.Dispatch<React.SetStateAction<number>>;
  isFirst: boolean;
  isLast: boolean;
  containerWidth: number;
  type?: SchemeItemEnum;
};

const SchemeItem = ({
  id,
  index,
  isFirst,
  isLast,
  containerWidth,
  name,
  jobTitle,
  department,
  avatarUrl,
  items,
  showSiblings,
  handleShowSiblings,
  type = SchemeItemEnum.Subordinate,
}: SchemeItemProps) => {
  const { ref, offsetLeft, elementWidth } = useBoundingClientRect();
  const childrenCount = useChildrenCount(items);
  const { limit, showAllSubordinates, resetLimit } = useSubordinatesLimit(
    items,
    4
  );

  const side = useContext(SideContext);
  const { parentType, parentDepartment } = useContext(ParentInfoContext);

  const lineDirection = useMemo(
    () =>
      getLineDirectionFromLeftOffsetAndWidths(
        containerWidth,
        elementWidth,
        offsetLeft,
        parentType,
        side
      ),
    [containerWidth, elementWidth, offsetLeft, parentType, side]
  );

  const renderLineFromDirection = (lineDirection: LineDirectionEnum) => {
    if (lineDirection === LineDirectionEnum.Left) {
      return (
        <>
          <StyledSchemeLineStrokeSvg lineDirection={lineDirection}>
            <SchemeRoundLineSvg />
          </StyledSchemeLineStrokeSvg>
        </>
      );
    }
    if (lineDirection === LineDirectionEnum.Right) {
      return (
        <>
          <StyledSchemeLineStrokeSvg lineDirection={lineDirection}>
            <SchemeRoundLineSvg style={{ transform: "rotateZ(90deg)" }} />
          </StyledSchemeLineStrokeSvg>
        </>
      );
    }
    if (lineDirection === LineDirectionEnum.LongVertical) {
      return <StyledSchemeVerticalLongLine />;
    }

    return <StyledSchemeVerticalLine />;
  };

  return (
    <StyledSchemeItem ref={ref} type={type} isFirst={isFirst} isLast={isLast}>
      {!(isFirst && isLast) && renderLineFromDirection(lineDirection)}
      <StyledSchemeItemInner>
        {(type === SchemeItemEnum.Subordinate ||
          type === SchemeItemEnum.SubordinateSupervisor) && (
          <StyledSchemeVerticalLine style={{ height: "auto", flexGrow: 1 }} />
        )}
        <SchemeCard
          id={id}
          name={name}
          jobTitle={jobTitle}
          department={department || parentDepartment}
          avatarUrl={avatarUrl}
          items={items}
          type={type}
          active={showSiblings}
          handleActive={() => {
            if (type === SchemeItemEnum.Subordinate) {
              return false;
            }
            handleShowSiblings(showSiblings ? -1 : index);
            resetLimit();
          }}
        />
      </StyledSchemeItemInner>
      {showSiblings && childrenCount > 0 && (
        <ParentInfoContext.Provider
          value={{
            parentId: id,
            parentType: type,
            parentDepartment: department || parentDepartment,
          }}
        >
          <SchemeSiblings
            items={items}
            limit={limit}
            onExpand={showAllSubordinates}
          />
        </ParentInfoContext.Provider>
      )}
    </StyledSchemeItem>
  );
};

export default SchemeItem;
