import { Button, Label, TextInput } from 'components';
import styled from 'styled-components';

function SignIn() {
  return (
    <Container>
      <form>
        <Label htmlFor='id' title='아이디' />
        <TextInput width={'100%'} name='id' />
        <Label htmlFor='pw' title='비밀번호' />
        <TextInput width={'100%'} name='pw' />
        <LoginContainer>
          <p>
            <a href='#'>아이디/비밀번호 찾기</a>
          </p>
          <p>
            <a href='#'>회원가입</a>
          </p>
        </LoginContainer>
        <Button mt={'20px'} width={'100%'}>
          로그인
        </Button>
      </form>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  width: 400px;
  padding: 30px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-around;
  margin-top: 15px;
`;
