import styled from 'styled-components';

function Card({ children, imgSrc, content }) {
  return (
    <CardItem>
      <div className='cardHeader'>
        <a></a>
        <img src={imgSrc} alt='이미지' className='img' />
      </div>
      <div className='cardBody'>
        <strong className='cardTitle'>{children}</strong>
        <p className='cardContent'>{content}</p>
        <span>%</span>
        <span>원</span>
      </div>
    </CardItem>
  );
}

export default Card;

const CardItem = styled.section`
  width: 240px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: #fff;

  .img {
    display: block;
    background: #999;
    width: 100%;
    height: 200px;
  }

  .cardBody {
    padding: 20px;
  }
`;
