import { OrgSchemeItemType } from "@orgStructure";
import { SchemeItemEnum } from "../../enums";
import { ParentInfoContext } from "../../utils";
import { StyledSchemeRoot } from "./Scheme.styled";
import SchemeCard from "./SchemeCard";
import SchemeSiblingsLine from "./SchemeSiblingsLine";
import SchemeSupervisors from "./SchemeSupervisors";

type SchemeRootProps = { department: OrgSchemeItemType };

const SchemeRoot = ({ department }: SchemeRootProps) => {
  const siblingsCount: number = department.items?.length ?? 0;

  return (
    <StyledSchemeRoot>
      <ParentInfoContext.Provider
        value={{
          parentId: department.id,
          parentDepartment: department.department,
          parentType: SchemeItemEnum.Root,
        }}
      >
        <SchemeCard
          id={department.id}
          name={department.name}
          jobTitle={department.jobTitle}
          department={department.department}
          avatarUrl={department.avatarUrl}
          items={department.items}
          type={SchemeItemEnum.Root}
          active={true}
          handleActive={() => {}}
        />
        <SchemeSiblingsLine itemsCount={siblingsCount} />
        <SchemeSupervisors supervisors={department.items} />
      </ParentInfoContext.Provider>
    </StyledSchemeRoot>
  );
};

export default SchemeRoot;
