import { StyledCol, StyledColgroup } from "./Table.styled";

const TableColgroup = () => {
  return (
    <StyledColgroup>
      <StyledCol />
      <StyledCol style={{ width: "400px" }} />
      <StyledCol />
    </StyledColgroup>
  );
};

export default TableColgroup;
