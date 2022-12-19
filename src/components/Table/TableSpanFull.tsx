import React from "react";
import { StyledTableCell, StyledTableRow } from "./Table.styled";

type TableSpanFullProps = {
  children: React.ReactNode;
};

const TableSpanFull = ({ children }: TableSpanFullProps) => {
  return (
    <StyledTableRow>
      <StyledTableCell colSpan={3}>{children}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TableSpanFull;
