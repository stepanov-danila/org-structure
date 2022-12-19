import { TableGroupType } from "@orgStructure";
import { TableSortByEnum, TableSortDirectionEnum } from "../enums";
import { RootState } from "./store";

export const selectTableData = (state: RootState): TableGroupType[] =>
  state.table.data;

export const selectTableSortDirection = (
  state: RootState
): TableSortDirectionEnum => state.table.sort.sortDirection;

export const selectTableSortBy = (state: RootState): TableSortByEnum =>
  state.table.sort.sortBy;
