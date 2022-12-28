import { Button } from 'components';
import Card from 'components/Card';
import styled from 'styled-components';

export default function Main() {
  return (
    <>
      <Container>
        {Array(8)
          .fill()
          .map((card, idx) => {
            return (
              <Card key={idx} content={'컨텐츠'}>
                카드
              </Card>
            );
          })}
        <Button className={'more'} width={'1000px'}>
          더보기
        </Button>
      </Container>
    </>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  justify-items: center;
  gap: 15px;

  .more {
    grid-column: -5 / -1;
    margin: 0 auto;
    margin-top: 15px;
    padding: 8px;
  }
`;
