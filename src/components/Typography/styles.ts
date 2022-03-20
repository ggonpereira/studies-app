import styled from 'styled-components';

export const Typography = styled.h3<{ color?: string; textAlign?: string; noMargin?: boolean }>`
  font-size: 1.3em;
  margin-bottom: ${(props) => (props.noMargin ? '0' : '5px')};
  color: ${(props) => props.color ?? '#303332'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'none')};
  font-weight: 500;
`;
