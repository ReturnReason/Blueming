import styled from 'styled-components';

export default function TextInput({ placeholder, name, isRequired = false }) {
  return <Input required={isRequired} name={name} id={name} placeholder={placeholder} />;
}

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
