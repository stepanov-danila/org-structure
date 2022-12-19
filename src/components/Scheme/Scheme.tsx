import { OrgSchemeItemType } from "@orgStructure";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { StyledScheme } from "./Scheme.styled";
import SchemeRoot from "./SchemeRoot";

export type SchemeProps = {
  root: OrgSchemeItemType;
};

const Scheme = ({ root }: SchemeProps) => {
  return (
    <StyledScheme>
      <TransformWrapper
        centerOnInit
        limitToBounds={false}
        minScale={0.5}
        maxScale={1.25}
      >
        <TransformComponent>
          <SchemeRoot department={root} />
        </TransformComponent>
      </TransformWrapper>
    </StyledScheme>
  );
};

export default Scheme;
