import styled from 'styled-components';
import { Button, TextInput, Label } from './index';

export default function Form() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormBox onSubmit={submitHandler}>
      <Label />
      <TextInput placeholder={'사용할 아이디를 입력해주세요.'} />
      <Button text={'중복 확인'} />
    </FormBox>
  );
}

const FormBox = styled.form`
  display: flex;
`;
