import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR } from 'components/colors/common';

export default function Button({ children, bgColor, fontColor, type, onClick, width, mt }) {
  return (
    <Btn
      mt={mt}
      width={width}
      onClick={onClick}
      type={type}
      bgColor={bgColor}
      fontColor={fontColor}
    >
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  width: ${({ width }) => width};
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor || PRIMARY_COLOR};
  cursor: pointer;
  color: ${({ fontColor }) => fontColor || WHITE_COLOR};
  border: none;
  padding: 5px 8px;
  margin-top: ${({ mt }) => mt};
`;
