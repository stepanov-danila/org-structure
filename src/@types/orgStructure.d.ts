declare module "@orgStructure" {
  import { SchemeItemEnum } from "../enums";

  export type OrgSchemeItemType = {
    id: string;
    name: string;
    jobTitle: string;
    avatarUrl: string;
    department?: string;
    items: OrgSchemeItemType[];
  };

  export type ParentInfoContextType = {
    parentId: string;
    parentType: SchemeItemEnum;
    parentDepartment: string;
  };

  export type TableGroupType = {
    id: string;
    group: string;
    expanded?: boolean;
    items: TableGroupItemType[];
  };

  type TableGroupItemType = {
    id: string;
    name: string;
    avatarUrl: string;
    department: string;
    positionRole: {
      position: string;
      role?: string;
    };
    expanded?: boolean;
    items: TableGroupItemType[];
  };
}
