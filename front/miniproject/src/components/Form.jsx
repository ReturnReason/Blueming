import styled from 'styled-components';

export default function Form({ children }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return <FormBox onSubmit={submitHandler}>{children}</FormBox>;
}

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
