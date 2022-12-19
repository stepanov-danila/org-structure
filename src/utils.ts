import { ParentInfoContextType, TableGroupType } from "@orgStructure";
import { createContext } from "react";
import { LineDirectionEnum, SchemeItemEnum, SchemeItemSideEnum } from "./enums";
import { theme, ThemeColor } from "./theme";
import lodash from "lodash";
import deepdash from "deepdash-es";

const _ = deepdash(lodash);

const { blue, purple, orange, lightgreen, cadetblue } = theme.colors;

export const supervisorColors: ThemeColor[] = [
  blue,
  purple,
  orange,
  lightgreen,
  cadetblue,
];

export const ColorContext = createContext(supervisorColors[4]);
export const SideContext = createContext(SchemeItemSideEnum.None);
export const ParentInfoContext = createContext<ParentInfoContextType>({
  parentId: "",
  parentType: SchemeItemEnum.Subordinate,
  parentDepartment: "",
});

/**
 * ===Не лучший вариант для вычисления направления стрелки===
 * Расчитывает направление стрелки исходя из величины массива подчиненных
 * и позиции конкретного элемента в нем.
 * Исходя из четного/нечетного кол-ва находит "центр" массива
 * и находит по какую "сторону от центра" лежит элемент
 * @param subordinatesCount - количество массива подчиненных
 * @param index - индекс в массиве
 * @param limit - ограничение массива
 * @returns enum направления стрелки
 */
export const getLineDirectionFromIndex = (
  subordinatesCount: number,
  index: number,
  limit: number
): LineDirectionEnum => {
  if (subordinatesCount > limit) {
    subordinatesCount = limit + 1;
  }

  const countIsEven: boolean = subordinatesCount % 2 === 0;
  const half: number = Math.ceil(subordinatesCount / 2);

  if (subordinatesCount > 1) {
    if (countIsEven) {
      if (index + 1 <= half) {
        return LineDirectionEnum.Left;
      } else {
        return LineDirectionEnum.Right;
      }
    } else {
      if (index + 1 < half) {
        return LineDirectionEnum.Left;
      } else if (index + 1 > half) {
        return LineDirectionEnum.Right;
      } else {
        return LineDirectionEnum.Vertical;
      }
    }
  } else {
    return LineDirectionEnum.Vertical;
  }
};

/**
 * Расчитывает положение элемента относительно центра контейнера,
 * который, как предполагается, центрирован относительно линии соединения с родителем.
 * Если элемент слева от центра, то стрелка левая, если справа - правая.
 * Рассчеты идут засчет ширины контейнера, элемента и его отступа от левого края.
 * Если элемент находится в пределах 100px от центра, то закругления не будет.
 * @param containerWidth ширина контейнера
 * @param elementWidth ширина элепмента
 * @param leftOffet отступ элемента от левого края контейнера
 * @returns enum направления стрелки
 */
export const getLineDirectionFromLeftOffsetAndWidths = (
  containerWidth: number,
  elementWidth: number,
  leftOffet: number,
  parentType: SchemeItemEnum,
  side: SchemeItemSideEnum
): LineDirectionEnum => {
  const containerCenterPosition: number = Math.ceil(containerWidth / 2);
  const elementInnerCenter: number = Math.ceil(elementWidth / 2);
  const elementCenterPosition = elementInnerCenter + leftOffet;

  if (parentType === SchemeItemEnum.Supervisor) {
    if (side === SchemeItemSideEnum.Left) {
      if (leftOffet === 0) {
        return LineDirectionEnum.LongVertical;
      } else {
        return LineDirectionEnum.Right;
      }
    }
    if (side === SchemeItemSideEnum.Right) {
      if (leftOffet + elementWidth === containerWidth) {
        return LineDirectionEnum.LongVertical;
      } else {
        return LineDirectionEnum.Left;
      }
    }
  }

  if (
    elementCenterPosition !== containerCenterPosition &&
    Math.abs(containerCenterPosition - elementCenterPosition) < 50
  ) {
    return LineDirectionEnum.Vertical;
  }
  if (elementCenterPosition > containerCenterPosition) {
    return LineDirectionEnum.Right;
  }
  if (elementCenterPosition < containerCenterPosition) {
    return LineDirectionEnum.Left;
  }
  if (elementCenterPosition === containerCenterPosition) {
    return LineDirectionEnum.LongVertical;
  }
  return LineDirectionEnum.Vertical;
};

export const getSideFromIndexArray = (
  arr: any[],
  index: number
): SchemeItemSideEnum => {
  if (arr.length === 0) {
    return SchemeItemSideEnum.None;
  }

  const center: number = Math.ceil(arr.length / 2);

  if (index < center) {
    return SchemeItemSideEnum.Left;
  } else {
    return SchemeItemSideEnum.Right;
  }
};

export const cloneDeep = (data: any): any => _.cloneDeep(data);

export const fillTableDatqWithExpandedKey = (
  data: TableGroupType[]
): TableGroupType[] => {
  const cloned = _.cloneDeep(data);

  const newdata: TableGroupType[] = _.mapValuesDeep(
    cloned,
    (value) => {
      value.expanded = false;

      return value;
    },
    {
      childrenPath: ["items"],
    }
  );

  return newdata;
};

export const getDataWithChangedExpandedKeyById = (
  data: TableGroupType[],
  id: string
): TableGroupType[] => {
  const cloned = _.cloneDeep(data);

  const newdata: TableGroupType[] = _.mapValuesDeep(
    cloned,
    (value) => {
      if (value.id === id) {
        value.expanded = !value.expanded;
      }

      return value;
    },
    {
      childrenPath: ["items"],
    }
  );

  return newdata;
};
