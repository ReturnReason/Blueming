import styled from 'styled-components';
import { Form, Label, TextInput, Button } from 'components/index';

export default function SignUp() {
  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <Wrapper>
          <Label title='아이디' htmlFor='id' />
          <div className='id'>
            <TextInput isRequired name='id' placeholder='아이디를 입력해주세요' />
            <Button>중복 확인</Button>
          </div>
        </Wrapper>

        <Wrapper>
          <Label title='비밀번호' htmlFor='pw' />
          <TextInput isRequired name='pw' placeholder='비밀번호를 입력해주세요' />

          <Label title='비밀번호 확인' htmlFor='pw-check' />
          <TextInput name='pw-check' placeholder='비밀번호를 다시 입력해주세요' isRequired />
        </Wrapper>

        <Wrapper>
          <Label title='이메일' htmlFor='email' />
          <div className='email'>
            <TextInput isRequired name='email' placeholder='이메일을 입력해주세요' />
            <Button>이메일 인증</Button>
          </div>
        </Wrapper>

        <Button className='join'>회원가입</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  padding: 50px;
  margin: 0 auto;
  border: 1px solid #eee;
  margin-top: 5vh;

  .join {
    margin-top: 10px;
    padding: 8px 5px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .id,
  .email {
    display: flex;
    align-items: center;
  }

  .id input,
  .email input {
    flex-grow: 1;
  }

  .id button,
  .email button {
    margin-left: 15px;
    height: 100%;
    padding: 8px 10px;
  }
`;
