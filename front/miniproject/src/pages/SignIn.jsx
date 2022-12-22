import { Button, Label, TextInput } from 'components';
import { PRIMARY_COLOR } from 'components/colors/common';
import styled from 'styled-components';

function SignIn() {
  return (
    <Container>
      <h2 className='loginTitle'>로그인</h2>
      <form>
        <Label htmlFor='id' title='아이디' />
        <TextInput width={'100%'} name='id' placeholder={'아이디를 입력하세요.'} />
        <Label htmlFor='pw' title='비밀번호' />
        <TextInput width={'100%'} name='pw' placeholder={'비밀번호를 입력하세요.'} />
        <LoginContainer>
          <p>
            <a href='#'>아이디/비밀번호 찾기</a>
          </p>
          <p>
            <a href='/signup'>회원가입</a>
          </p>
        </LoginContainer>
        <Button className={'loginBtn'} mt={'20px'} width={'100%'}>
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
  margin-top: 20vh;

  .loginTitle {
    text-align: center;
    margin-bottom: 15px;
  }

  a {
    color: ${PRIMARY_COLOR};

    &:hover {
      text-decoration: underline;
    }
  }

  .loginBtn {
    padding: 8px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-around;
  margin-top: 15px;
`;
