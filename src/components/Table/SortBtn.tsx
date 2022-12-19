import { TableSortDirectionEnum } from "../../enums";
import { AscSortSvg } from "../Svg/Svg";
import { StyledSortBtn } from "./Table.styled";

export type SortBtnProps = {
  sortDirection: TableSortDirectionEnum;
  isHeadSort?: boolean;
};

const SortBtn = ({ sortDirection, isHeadSort = false }: SortBtnProps) => {
  return (
    <StyledSortBtn
      sortDirection={sortDirection}
      title={
        sortDirection === TableSortDirectionEnum.Asc
          ? "Сортировать по возрастанию"
          : "Сортировать по убыванию"
      }
      isHeadSort={isHeadSort}
    >
      <AscSortSvg />
    </StyledSortBtn>
  );
};

export default SortBtn;
