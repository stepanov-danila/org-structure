import styled, { css } from "styled-components";
import { TableSortDirectionEnum } from "../../enums";
import { flexRowCenter } from "../Structure/Structure.styled";
import { SortBtnProps } from "./SortBtn";
import { TogglerProps } from "./Toggler";

export const StyledText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.black2};
  margin: 0;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const StyledColgroup = styled.colgroup``;

export const StyledCol = styled.col``;

export const StyledTableHead = styled.thead``;

type StyledTableHeaderProps = {
  index: number;
};
export const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  padding: 0 20px;
  vertical-align: middle;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lineStroke};
  cursor: pointer;
  text-align: ${(props) => (props.index === 2 ? "left" : "center")};
  transition: background 0.3s;
  &:hover {
    background: ${(props) => props.theme.colors.lineStroke};
  }
`;

export const StyledTableHeaderText = styled(StyledText)`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  position: relative;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr``;

type StyledItemCellProps = {
  itemsExist?: boolean;
  isCentered?: boolean;
};
export const StyledTableCell = styled.td<StyledItemCellProps>`
  padding: 0;
  vertical-align: middle;
`;

export const StyledItemCell = styled(StyledTableCell)`
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lineStroke};
  ${(props) =>
    props.itemsExist &&
    css`
      background: ${(props) => props.theme.colors.cardBg};
    `}
  ${(props) =>
    props.isCentered &&
    css`
      text-align: center;
    `}
`;

export const StyledRole = styled(StyledText)`
  color: ${(props) => props.theme.colors.grey};
  line-height: 110%;
  margin: 6px 0 0;
`;

export const StyledPosition = styled(StyledText)``;

export const StyledDepartment = styled(StyledText)``;

export const StyledName = styled(StyledText)`
  font-weight: 500;
`;

export const StyledUser = styled.div`
  ${flexRowCenter()}
  padding-left: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex-shrink: 0;
    object-fit: cover;
    margin: 0 13px 0 0;
  }
`;

export const StyledTableGroupHead = styled.div`
  ${flexRowCenter()}
  height: 40px;
  background: ${(props) => props.theme.colors.cardBg};
  border-bottom: 1px solid ${(props) => props.theme.colors.lineStroke};
  padding: 0 10px;
  h3 {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 120%;
    color: ${(props) => props.theme.colors.black2};
    margin: 0;
  }
`;

export const StyledToggler = styled.div`
  ${flexRowCenter()}
  cursor: pointer;
`;

export const StyledSortBtn = styled.span<SortBtnProps>`
  ${flexRowCenter()}
  cursor: pointer;
  ${(props) =>
    props.isHeadSort &&
    css`
      position: absolute;
      z-index: 2;
      top: 0;
      right: -20px;
    `}
  svg {
    transition: transform 0.3s;
    ${(props) =>
      props.sortDirection === TableSortDirectionEnum.Desc &&
      css`
        transform: rotateX(180deg);
      `}
  }
`;
