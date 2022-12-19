import styled, { css } from "styled-components";

export const flexRowCenter = () => css`
  display: flex;
  align-items: center;
`;

export const flexColumnCenter = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledStructureArticle = styled.article``;

export const StyledStructureHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-bottom: 30px;
`;

export const StyledStructureBody = styled.div``;

export const StyledStructureTitle = styled.h1`
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: ${(props) => props.theme.colors.black2};
  margin: 0;
  grid-column: 2;
`;

export const StyledStructureSwitcher = styled.div`
  ${flexRowCenter()}
  cursor: pointer;
  height: 37px;
  grid-column: 3;
  margin-left: auto;
`;

type StyledStructureSwitcherItemProps = {
  active: boolean;
};

export const StyledStructureSwitcherItem = styled.span<StyledStructureSwitcherItemProps>`
  height: 100%;
  width: 96px;
  ${flexRowCenter()}
  justify-content: center;
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  flex-shrink: 0;
  ${(props) =>
    props.active
      ? css`
          background: ${(props) => props.theme.colors.orange};
          color: ${(props) => props.theme.colors.white};
        `
      : css`
          color: ${(props) => props.theme.colors.black};
          background: ${(props) => props.theme.colors.cardBg};
        `}
  &:first-child {
    border-radius: 40px 0 0 40px;
  }
  &:last-child {
    border-radius: 0 40px 40px 0;
  }
`;
