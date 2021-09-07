import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from 'styled-components';

const Icon = styled(FontAwesomeIcon)<{
  margin?: string,
  color?: string,
  transition?: boolean,
}>`
  align-self: center;
  ${props => props.margin && css`margin: ${props.margin};`}
  ${props => props.color && css`color: ${props.color.startsWith('$') ? props.theme.colors[props.color.replace('$', '')] : props.color};`}
  ${props => props.transition && css`
    > path {
      transition: d .5s;
    }
  `}
`

export default Icon;