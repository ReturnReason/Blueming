import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR } from 'components/colors/common';

export default function Button({ children, bgColor, fontColor }) {
  return (
    <Btn bgColor={bgColor} fontColor={fontColor}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor || PRIMARY_COLOR};
  cursor: pointer;
  color: ${({ fontColor }) => fontColor || WHITE_COLOR};
  border: none;
  padding: 5px 8px;
`;
