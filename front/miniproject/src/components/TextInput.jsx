import styled from 'styled-components';

export default function TextInput({ placeholder }) {
  return <Input placeholder={placeholder} />;
}

const Input = styled.input`
  padding: 10px;
`;
