import Card from 'components/Card';
import styled from 'styled-components';

export default function Main() {
  return (
    <Container>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
      <Card content={'컨텐츠'}>카드</Card>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
`;
