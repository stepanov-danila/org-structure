import { TogglerTypeEnum } from "../../enums";
import { StyledTableGroupHead } from "./Table.styled";
import TableSpanFull from "./TableSpanFull";
import Toggler from "./Toggler";

type TableGroupRowProps = {
  title: string;
  active: boolean;
  handleClick: () => void;
};

const TableGroupRow = ({ title, active, handleClick }: TableGroupRowProps) => {
  return (
    <TableSpanFull>
      <StyledTableGroupHead>
        <Toggler
          type={TogglerTypeEnum.Expand}
          active={active}
          handleClick={handleClick}
          style={{
            marginRight: "8px",
          }}
        />
        <h3>{title}</h3>
      </StyledTableGroupHead>
    </TableSpanFull>
  );
};

export default TableGroupRow;
