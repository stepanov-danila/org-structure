import { TableGroupItemType } from "@orgStructure";
import { TogglerTypeEnum } from "../../enums";
import { useExpandTableItem } from "../../hooks";
import {
  StyledDepartment,
  StyledName,
  StyledPosition,
  StyledRole,
  StyledTable,
  StyledTableBody,
  StyledItemCell,
  StyledTableRow,
  StyledUser,
} from "./Table.styled";
import TableColgroup from "./TableColgroup";
import TableItems from "./TableItems";
import TableSpanFull from "./TableSpanFull";
import Toggler from "./Toggler";

type TableItemRowProps = TableGroupItemType & {
  depth: number;
};

const TableItemRow = ({
  id,
  name,
  avatarUrl,
  department,
  positionRole,
  items,
  depth,
  expanded = false,
}: TableItemRowProps) => {
  const { itemsExist, handleExpand } = useExpandTableItem(items);

  const togglerFitValue: number = 28;
  const leftIndentValue: number = 32;

  return (
    <TableSpanFull>
      <StyledTable>
        <TableColgroup />
        <StyledTableBody>
          <StyledTableRow>
            <StyledItemCell
              itemsExist={itemsExist}
              style={{
                padding: `12px 0 12px ${depth * leftIndentValue}px`,
              }}
            >
              <StyledUser>
                {itemsExist && (
                  <Toggler
                    type={TogglerTypeEnum.Collapse}
                    active={expanded}
                    handleClick={() => handleExpand(id)}
                    style={{
                      marginRight: "8px",
                    }}
                  />
                )}
                <img
                  src={avatarUrl}
                  alt={name}
                  style={
                    !itemsExist ? { marginLeft: `${togglerFitValue}px` } : {}
                  }
                />
                <StyledName>{name}</StyledName>
              </StyledUser>
            </StyledItemCell>
            <StyledItemCell itemsExist={itemsExist} isCentered>
              <StyledDepartment>{department}</StyledDepartment>
            </StyledItemCell>
            <StyledItemCell itemsExist={itemsExist}>
              <StyledPosition>{positionRole.position}</StyledPosition>
              {positionRole.role && (
                <StyledRole>{positionRole.role}</StyledRole>
              )}
            </StyledItemCell>
          </StyledTableRow>
          {expanded && itemsExist && (
            <TableItems rows={items} depth={depth + 1} />
          )}
        </StyledTableBody>
      </StyledTable>
    </TableSpanFull>
  );
};

export default TableItemRow;
