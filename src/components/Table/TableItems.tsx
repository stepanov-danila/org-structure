import { TableGroupItemType } from "@orgStructure";
import { useTableSort } from "../../hooks";
import { cloneDeep } from "../../utils";
import TableItemRow from "./TableItemRow";

type TableItemsProps = {
  rows: TableGroupItemType[];
  depth: number;
};

const TableItems = ({ rows, depth }: TableItemsProps) => {
  const sortFunc = useTableSort();
  const clonedRows: TableGroupItemType[] = cloneDeep(rows);

  return (
    <>
      {clonedRows.sort(sortFunc).map((item, index) => (
        <TableItemRow key={index} {...item} depth={depth} />
      ))}
    </>
  );
};

export default TableItems;
