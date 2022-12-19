import { TableGroupType } from "@orgStructure";
import { cloneDeep } from "lodash";
import { useTableSort } from "../../hooks";
import { StyledTableBody } from "./Table.styled";
import TableGroup from "./TableGroup";

type TableBodyProps = {
  tableGroups: TableGroupType[];
};

const TableBody = ({ tableGroups }: TableBodyProps) => {
  const sortFunc = useTableSort({ isGroups: true });
  const clonedTableGroups: TableGroupType[] = cloneDeep(tableGroups);

  return (
    <StyledTableBody>
      {clonedTableGroups.sort(sortFunc).map((group, index) => (
        <TableGroup key={index} {...group} />
      ))}
    </StyledTableBody>
  );
};

export default TableBody;
