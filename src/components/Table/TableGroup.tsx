import { TableGroupType } from "@orgStructure";
import { useExpandTableItem } from "../../hooks";
import TableGroupRow from "./TableGroupRow";
import TableItems from "./TableItems";

type TableGroupProps = TableGroupType;

const TableGroup = ({ id, group, items, expanded }: TableGroupProps) => {
  const { itemsExist, handleExpand } = useExpandTableItem(items);

  return (
    <>
      <TableGroupRow
        title={group}
        active={expanded}
        handleClick={() => handleExpand(id)}
      />
      {expanded && itemsExist && <TableItems rows={items} depth={0} />}
    </>
  );
};

export default TableGroup;
