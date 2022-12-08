import styled from 'styled-components';
import { Form } from 'components/index';

export default function SignUp() {
  return (
    <Container>
      <Title />
      <Form />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
`;
