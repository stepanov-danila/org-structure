import { ParentInfoContextType } from "@orgStructure";
import styled, { css } from "styled-components";
import {
  LineDirectionEnum,
  SchemeItemEnum,
  SchemeItemSideEnum,
} from "../../enums";
import { ThemeColor } from "../../theme";
import { flexColumnCenter } from "../Structure/Structure.styled";
import { strokeAnimation } from "../Svg/Svg.styled";
import { SchemeCardProps } from "./SchemeCard";
import { SchemeItemProps } from "./SchemeItem";
import { SchemeSiblingsLineProps } from "./SchemeSiblingsLine";

export const StyledScheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  .react-transform-wrapper,
  .react-transform-component {
    min-width: 100%;
  }
`;

export const StyledSchemeItem = styled.div<
  Pick<SchemeItemProps, "isFirst" | "isLast" | "type">
>`
  ${flexColumnCenter()}
  position: relative;
  ${(props) =>
    props.type !== SchemeItemEnum.Root &&
    css`
      width: 194px;
    `}
  &::before {
    content: "";
    display: block;
    height: 2px;
    background: ${(props) => props.theme.colors.lineStroke};
    top: 0;
    position: absolute;
  }
  ${(props) =>
    !props.isFirst &&
    !props.isLast &&
    css`
      &::before {
        left: -15px;
        right: 0;
      }
    `}
  ${(props) =>
    props.isFirst &&
    !props.isLast &&
    css`
      &::before {
        left: calc(50% + 30px);
        right: 0;
      }
    `}
  ${(props) =>
    !props.isFirst &&
    props.isLast &&
    css`
      &::before {
        right: calc(50% + 30px);
        left: -15px;
      }
    `}
  ${(props) =>
    props.isFirst &&
    props.isLast &&
    css`
      &::before {
        display: none;
      }
    `}
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const StyledSchemeItemInner = styled.div`
  ${flexColumnCenter()}
  justify-content: flex-end;
  min-height: 212px;
`;

type StyledSchemeCardType = Pick<SchemeCardProps, "type" | "active">;

export const StyledSchemeCard = styled.div<StyledSchemeCardType>`
  width: 194px;
  border-radius: 10px;
  position: relative;
  ${flexColumnCenter()}
  align-self: center;
  transition: border-color 0.3s;
  padding: 24px 10px;
  ${(props) =>
    props.type !== SchemeItemEnum.Subordinate &&
    css`
      background: ${(props) => props.theme.colors.cardBg};
      cursor: pointer;
    `};
  ${({ type, active }) =>
    type === SchemeItemEnum.Root &&
    css`
      width: 630px;
      height: 187px;
      ${(props) =>
        active &&
        css`
          padding: 22px 8px;
          border: 2px solid ${(props) => props.theme.colors.lineStroke};
        `}
    `};
  ${(props) =>
    props.type === SchemeItemEnum.Supervisor &&
    css`
      height: 212px;
    `};
  ${(props) =>
    props.type === SchemeItemEnum.Group &&
    css`
      height: 212px;
    `};
  ${(props) =>
    props.type === SchemeItemEnum.Subordinate &&
    css`
      padding: 10px 8px 22px;
    `};
  h2 {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    padding: 0 10px;
    max-width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${(props) =>
      props.type === SchemeItemEnum.Group
        ? css`
            margin: auto;
            -webkit-line-clamp: 8;
          `
        : css`
            margin: 0 0 16px;
            -webkit-line-clamp: 2;
          `};
  }
  h3 {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: ${(props) => props.theme.colors.black2};
    margin: 0;
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h5 {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 110%;
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
    margin: 8px 0 0;
    max-width: 100%;
    height: 28px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 0 10px;
  }
`;

type StyledSchemeCardBorderSvgType = {
  active: boolean;
};

export const StyledSchemeCardBorderSvg = styled.div<StyledSchemeCardBorderSvgType>`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  svg {
    width: 194px;
    height: 212px;
    rect {
      stroke-dasharray: 790;
      stroke-dashoffset: 790;
      ${(props) =>
        props.active &&
        css`
          animation: ${strokeAnimation} 0.3s ease forwards;
        `}
    }
  }
`;

export const StyledSchemeSiblings = styled.div<
  Pick<ParentInfoContextType, "parentType"> & { side: SchemeItemSideEnum }
>`
  ${flexColumnCenter()}
  ${(props) =>
    props.parentType === SchemeItemEnum.Supervisor &&
    props.side === SchemeItemSideEnum.Left &&
    css`
      align-self: flex-start;
      align-items: flex-start;
    `}
  ${(props) =>
    props.parentType === SchemeItemEnum.Supervisor &&
    props.side === SchemeItemSideEnum.Right &&
    css`
      align-self: flex-end;
      align-items: flex-end;
    `}
`;

export const StyledSchemeSiblingsItems = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

export const StyledSchemeSiblingsLine = styled.div<
  Pick<SchemeSiblingsLineProps, "itemsCount"> &
    Pick<ParentInfoContextType, "parentType">
>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 -2px;
  width: 120px;
  overflow: hidden;
  position: relative;
  ${(props) =>
    props.parentType === SchemeItemEnum.Supervisor &&
    css`
      width: 194px;
    `}
  ${(props) =>
    props.itemsCount > 1 &&
    props.parentType !== SchemeItemEnum.Supervisor &&
    css`
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: ${(props) => props.theme.colors.white};
      }
    `}
  svg {
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }
`;

type StyledSchemeTriggerProps = {
  color: ThemeColor;
} & Pick<SchemeItemProps, "type">;

export const StyledSchemeTrigger = styled.div<StyledSchemeTriggerProps>`
  width: 100%;
  ${flexColumnCenter()}
  align-self: center;
  position: absolute;
  z-index: 3;
  top: 100%;
  left: 0;
  transform: translateY(-50%);
  span {
    box-sizing: border-box;
    content: "";
    display: block;
    ${(props) =>
      props.type === SchemeItemEnum.Root
        ? css`
            height: 32px;
            width: 32px;
          `
        : css`
            height: 20px;
            width: 20px;
          `};
    border-radius: 50%;
    background: ${(props) => props.theme.colors.white};
    border: ${(props) => (props.type === SchemeItemEnum.Root ? "11px" : "7px")}
      solid ${(props) => props.color};
  }
  strong {
    background: ${(props) => props.color};
    border-radius: 40px;
    height: 24px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    white-space: nowrap;
    margin: 5px 0 0;
  }
`;

export const StyledSchemeVerticalLine = styled.div`
  width: 2px;
  height: 64px;
  align-self: center;
  background: ${(props) => props.theme.colors.lineStroke};
`;

export const StyledSchemeVerticalLongLine = styled(StyledSchemeVerticalLine)`
  height: 90px;
  margin-top: -24px;
  position: relative;
  z-index: 3;
`;

type StyledSchemeLineStrokeSvgProps = {
  lineDirection: LineDirectionEnum;
};

export const StyledSchemeLineStrokeSvg = styled.div<StyledSchemeLineStrokeSvgProps>`
  display: flex;
  ${(props) =>
    props.lineDirection === LineDirectionEnum.Left &&
    css`
      transform: translateX(calc(50% - 1px));
    `}
  ${(props) =>
    props.lineDirection === LineDirectionEnum.Right &&
    css`
      transform: translateX(calc(-50% + 1px));
    `}
`;

export const StyledSchemeExpand = styled.div`
  ${flexColumnCenter()}
  width: 194px;
  flex-grow: 1;
  position: relative;
  &:before {
    content: "";
    display: block;
    height: 2px;
    background: ${(props) => props.theme.colors.lineStroke};
    top: 0;
    position: absolute;
    right: calc(50% + 30px);
    left: -15px;
  }
`;

export const StyledSchemeExpandInner = styled(StyledSchemeItemInner)`
  height: 212px;
  justify-content: flex-start;
`;

export const StyledSchemeExpandBtn = styled.div`
  display: flex;
  button.MuiButtonBase-root {
    height: 37px;
    padding: 0 15.5px;
    border-radius: 40px;
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    &:hover {
      .MuiTouchRipple-root {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    .MuiTouchRipple-root {
      transition: background 0.3s;
    }
  }
`;

export const StyledSchemeExpandBtnVerticalLine = styled(
  StyledSchemeVerticalLine
)`
  height: calc(50% - 20px);
`;

export const StyledSchemeRoot = styled.div`
  min-height: calc(100vh - 100px);
  width: 100%;
  ${flexColumnCenter()}
`;
