import styled from 'styled-components';

export const Typography = styled.h3<{
  color?: string;
  bold?: boolean;
  textAlign?: string;
  noMargin?: boolean;
}>`
  font-size: 1.3em;
  margin-bottom: ${(props) => (props.noMargin ? '0' : '5px')};
  color: ${(props) => props.color ?? props.theme.colors.text};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'none')};
  font-weight: ${(props) => (props.bold ? 'bold' : 500)};
`;
