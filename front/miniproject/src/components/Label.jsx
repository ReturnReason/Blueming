import styled from 'styled-components';

export default function Label({ title, htmlFor, children }) {
  return (
    <Container>
      <LabelBox htmlFor={htmlFor}>{title}</LabelBox>
      {children}
    </Container>
  );
}

const Container = styled.div``;

const LabelBox = styled.label``;
