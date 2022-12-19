import { useState } from "react";
import { department } from "../../data";
import { StructureType } from "../../enums";
import Scheme from "../Scheme/Scheme";
import Table from "../Table/Table";
import {
  StyledStructureArticle,
  StyledStructureBody,
  StyledStructureHead,
  StyledStructureTitle,
} from "./Structure.styled";
import StructureSwitcher from "./StructureSwitcher";

const Structure = () => {
  const [type, setType] = useState<StructureType>(StructureType.Scheme);

  return (
    <StyledStructureArticle>
      <StyledStructureHead>
        <StyledStructureTitle>Оргструктура HR</StyledStructureTitle>
        <StructureSwitcher activeType={type} handleSwitch={setType} />
      </StyledStructureHead>
      <StyledStructureBody>
        {type === StructureType.Scheme ? (
          <Scheme root={department} />
        ) : (
          <Table />
        )}
      </StyledStructureBody>
    </StyledStructureArticle>
  );
};

export default Structure;
