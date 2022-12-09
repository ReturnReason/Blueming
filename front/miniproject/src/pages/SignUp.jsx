import styled from 'styled-components';
import { Form, Label, TextInput, Button } from 'components/index';

export default function SignUp() {
  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <Wrapper>
          <Label title='아이디' htmlFor='id' />
          <div>
            <TextInput
              isRequired
              name='id'
              placeholder='아이디를 입력해주세요'
            />
            <Button text='중복 확인' />
          </div>
        </Wrapper>

        <Wrapper>
          <Label title='비밀번호' htmlFor='pw' />
          <TextInput
            isRequired
            name='pw'
            placeholder='비밀번호를 입력해주세요'
          />

          <Label title='비밀번호 확인' htmlFor='pw-check' />
          <TextInput
            name='pw-check'
            placeholder='비밀번호를 다시 입력해주세요'
            isRequired
          />
        </Wrapper>

        <Wrapper>
          <Label title='이메일' htmlFor='email' />
          <div>
            <TextInput
              isRequired
              name='email'
              placeholder='이메일을 입력해주세요'
            />
            <Button text='이메일 인증' />
          </div>
        </Wrapper>
        <Button text='회원가입'></Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
