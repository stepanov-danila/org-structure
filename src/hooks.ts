import lodash from "lodash";
import deepdash from "deepdash-es";
import { createRef, useEffect, useMemo, useState } from "react";
import {
  OrgSchemeItemType,
  TableGroupItemType,
  TableGroupType,
} from "@orgStructure";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTableData,
  selectTableSortBy,
  selectTableSortDirection,
} from "./redux/selectors";
import { TableSortByEnum, TableSortDirectionEnum } from "./enums";
import { changeTableData } from "./redux/TableSlice";
import { getDataWithChangedExpandedKeyById } from "./utils";

const _ = deepdash(lodash);

export const useChildrenCount = (subordinates: OrgSchemeItemType[]): number => {
  const [childrenCount, setChildrenCount] = useState<number>(0);

  useEffect(() => {
    let newChildrenCount = subordinates.length;

    _.eachDeep(
      subordinates,
      (value) => {
        newChildrenCount = newChildrenCount + (value?.items?.length ?? 0);
      },
      {
        childrenPath: ["items"],
      }
    );

    setChildrenCount(newChildrenCount);
  }, [subordinates]);

  return childrenCount;
};

export const useSubordinatesLimit = (
  subordinates: OrgSchemeItemType[],
  initLimit: number
) => {
  const [limit, setLimit] = useState<number>(initLimit);

  const showAllSubordinates = () => {
    setLimit(subordinates.length);
  };

  const resetLimit = () => {
    setLimit(initLimit);
  };

  return {
    limit,
    showAllSubordinates,
    resetLimit,
  };
};

export const useContainerWidth = () => {
  const ref = createRef<HTMLDivElement>();
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (ref && ref.current) {
      setContainerWidth(Math.ceil(ref.current.offsetWidth));
    }
  }, [ref]);

  return {
    ref,
    containerWidth,
  };
};

export const useSiblings = (items: OrgSchemeItemType[]) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);
  const { ref, containerWidth } = useContainerWidth();
  const itemsCount: number = items?.length ?? 0;

  return {
    activeItemIndex,
    setActiveItemIndex,
    ref,
    containerWidth,
    itemsCount,
  };
};

export const useBoundingClientRect = () => {
  const ref = createRef<HTMLDivElement>();

  const [offsetLeft, setOffsetLeft] = useState<number>(0);
  const [elementWidth, setElementWidth] = useState<number>(0);

  useEffect(() => {
    if (ref && ref.current) {
      setOffsetLeft(Math.ceil(ref.current.offsetLeft));
      setElementWidth(Math.ceil(ref.current.offsetWidth));
    }
  }, [ref]);

  return {
    ref,
    offsetLeft,
    elementWidth,
  };
};

type TableSortOptions = {
  isGroups?: boolean;
};

export const useTableSort = (options?: TableSortOptions) => {
  const sortDirection = useSelector(selectTableSortDirection);
  const sortBy = useSelector(selectTableSortBy);

  const sortFunc = (
    a: TableGroupItemType | TableGroupType,
    b: TableGroupItemType | TableGroupType
  ) => {
    let _a: string = "";
    let _b: string = "";

    if (!!options?.isGroups) {
      if (sortBy === TableSortByEnum.Department) {
        _a = a["group"] ?? "";
        _b = b["group"] ?? "";
      } else {
        _a = "";
        _b = "";
      }
    } else {
      if (sortBy === TableSortByEnum.PositionRole) {
        _a = a[sortBy]["position"] ?? "";
        _b = b[sortBy]["position"] ?? "";
      } else {
        _a = a[sortBy];
        _b = b[sortBy];
      }
    }

    if (_a < _b) {
      return sortDirection === TableSortDirectionEnum.Desc ? -1 : 1;
    }
    if (_a > _b) {
      return sortDirection === TableSortDirectionEnum.Desc ? 1 : -1;
    }
    // a должно быть равным b
    return 0;
  };

  return sortFunc;
};

export const useExpandTableItem = (items: TableGroupItemType[]) => {
  const dispatch = useDispatch();
  const data = useSelector(selectTableData);

  const itemsExist: boolean = useMemo(() => items.length > 0, [items]);

  const handleExpand = (id) => {
    dispatch(changeTableData(getDataWithChangedExpandedKeyById(data, id)));
  };

  return {
    itemsExist,
    handleExpand,
  };
};
