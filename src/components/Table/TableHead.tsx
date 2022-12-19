import { useDispatch, useSelector } from "react-redux";
import { TableSortByEnum, TableSortDirectionEnum } from "../../enums";
import {
  selectTableSortBy,
  selectTableSortDirection,
} from "../../redux/selectors";
import {
  changeTableSortBy,
  changeTableSortDirection,
} from "../../redux/TableSlice";
import SortBtn from "./SortBtn";
import {
  StyledTableHead,
  StyledTableHeader,
  StyledTableHeaderText,
  StyledTableRow,
} from "./Table.styled";

export type TableHeadProps = {
  cols: TableHeadCol[];
};

export type TableHeadCol = {
  title: string;
  type: TableSortByEnum;
};

const TableHead = ({ cols }: TableHeadProps) => {
  const dispatch = useDispatch();
  const sortDirection = useSelector(selectTableSortDirection);
  const sortBy = useSelector(selectTableSortBy);

  const handleSort = (type: TableSortByEnum) => {
    dispatch(changeTableSortBy(type));
    dispatch(
      changeTableSortDirection(
        sortDirection === TableSortDirectionEnum.Desc
          ? TableSortDirectionEnum.Asc
          : TableSortDirectionEnum.Desc
      )
    );
  };

  return (
    <StyledTableHead>
      <StyledTableRow>
        {cols.map((col: TableHeadCol, index) => (
          <StyledTableHeader
            key={index}
            index={index}
            onClick={() => {
              handleSort(col.type);
            }}
          >
            <StyledTableHeaderText>
              {col.title}
              {sortBy === col.type && (
                <SortBtn sortDirection={sortDirection} isHeadSort />
              )}
            </StyledTableHeaderText>
          </StyledTableHeader>
        ))}
      </StyledTableRow>
    </StyledTableHead>
  );
};

export default TableHead;
