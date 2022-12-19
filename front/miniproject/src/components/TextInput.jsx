import styled from 'styled-components';

export default function TextInput({ width, placeholder, name, isRequired = false }) {
  return (
    <Input width={width} required={isRequired} name={name} id={name} placeholder={placeholder} />
  );
}

const Input = styled.input`
  width: ${({ width }) => width};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
