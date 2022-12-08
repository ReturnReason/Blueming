import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR } from 'components/colors/common';

export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  border-radius: 5px;
  background: ${PRIMARY_COLOR};
  cursor: pointer;
  color: ${WHITE_COLOR};
  border: none;
  padding: 10px;
`;
