import { css, FlattenSimpleInterpolation } from 'styled-components'
type Position = {
  (left?: string, top?: string, right?: string, bottom?: string): FlattenSimpleInterpolation
}
export const fixed: Position = (left?: string, top?: string, right?: string, bottom?: string) => css`
  position: fixed;
  top: ${top};
  left: ${left};
  right: ${right};
  bottom: ${bottom};
`
export const absolute: Position = (left?: string, top?: string, right?: string, bottom?: string) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  right: ${right};
  bottom: ${bottom};
`
export const mobile = (content: string) => css`
  @media (max-width: 820px) {
    ${content}
  }
`
export const shake = () => css``
