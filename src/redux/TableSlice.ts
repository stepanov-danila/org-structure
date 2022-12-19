import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TableSortDirectionEnum, TableSortByEnum } from "../enums";
import { TableGroupType } from "@orgStructure";

export interface TableState {
  test: string;
  data: TableGroupType[];
  sort: {
    sortDirection: TableSortDirectionEnum;
    sortBy: TableSortByEnum;
  };
}

const initialState: TableState = {
  test: "test",
  data: [],
  sort: {
    sortDirection: TableSortDirectionEnum.Desc,
    sortBy: TableSortByEnum.Name,
  },
};

export const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changeTest: (state: TableState, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
    changeTableData: (
      state: TableState,
      action: PayloadAction<TableGroupType[]>
    ) => {
      state.data = action.payload;
    },
    changeTableSortDirection: (
      state: TableState,
      action: PayloadAction<TableSortDirectionEnum>
    ) => {
      state.sort.sortDirection = action.payload;
    },
    changeTableSortBy: (
      state: TableState,
      action: PayloadAction<TableSortByEnum>
    ) => {
      state.sort.sortBy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeTest,
  changeTableData,
  changeTableSortDirection,
  changeTableSortBy,
} = TableSlice.actions;

export default TableSlice.reducer;
