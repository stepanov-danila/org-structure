import { StructureType } from "../../enums";
import {
  StyledStructureSwitcher,
  StyledStructureSwitcherItem,
} from "./Structure.styled";

export type StructureSwitcherProps = {
  activeType: StructureType;
  handleSwitch: React.Dispatch<React.SetStateAction<StructureType>>;
};

const StructureSwitcher = ({
  activeType,
  handleSwitch,
}: StructureSwitcherProps) => {
  return (
    <StyledStructureSwitcher>
      <StyledStructureSwitcherItem
        active={activeType === StructureType.Scheme}
        onClick={() => handleSwitch(StructureType.Scheme)}
      >
        Схема
      </StyledStructureSwitcherItem>
      <StyledStructureSwitcherItem
        active={activeType === StructureType.Table}
        onClick={() => handleSwitch(StructureType.Table)}
      >
        Таблица
      </StyledStructureSwitcherItem>
    </StyledStructureSwitcher>
  );
};

export default StructureSwitcher;
