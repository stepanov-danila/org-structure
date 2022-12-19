import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableGroups, tableHeadCols } from "../../data";
import { selectTableData } from "../../redux/selectors";
import { changeTableData } from "../../redux/TableSlice";
import { fillTableDatqWithExpandedKey } from "../../utils";
import { StyledTable } from "./Table.styled";
import TableBody from "./TableBody";
import TableColgroup from "./TableColgroup";
import TableHead from "./TableHead";

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectTableData);

  useEffect(() => {
    const mapedData = fillTableDatqWithExpandedKey(tableGroups);
    dispatch(changeTableData(mapedData));
  }, [dispatch]);

  return (
    <StyledTable>
      <TableColgroup />
      <TableHead cols={tableHeadCols} />
      <TableBody tableGroups={data} />
    </StyledTable>
  );
};

export default Table;
