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
        <div>
          <Button mt={'20px'} width={'100%'}>
            로그인
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  width: 400px;
  padding: 20px;
  margin: 0 auto;
`;
