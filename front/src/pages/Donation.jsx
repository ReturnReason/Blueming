import { SUB_COLOR } from 'components/colors/common';
import styled from 'styled-components';
import { TbHeartHandshake } from 'react-icons/tb';
import { MdChildCare, MdOutlineChildFriendly, MdOutlinePets } from 'react-icons/md';
import { FaWheelchair } from 'react-icons/fa';
import { RiEarthFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbOld } from 'react-icons/tb';
import Card from 'components/Card';

export default function Donation() {
  return (
    <div>
      <HeaderContent>
        <CategoryList>
          {categories.map((category, idx) => {
            return (
              <li key={`${category} ${idx}`}>
                {category?.icon}
                {category?.topic}
              </li>
            );
          })}
        </CategoryList>
      </HeaderContent>
      <BodyContent>
        <h2>진행중인 모금</h2>
        <div>
          <Sort>
            <input type='radio' name='sort_recommendation' />
            <label>추천순</label>
            <input type='radio' name='sort_latest' />
            <label>최신순</label>
            <input type='radio' name='sort_impending' />
            <label>종료 임박순</label>
          </Sort>
        </div>
        <DonationCards>
          <Card />
          <Card />
          <Card />
          <Card />
        </DonationCards>
      </BodyContent>
    </div>
  );
}

const categories = [
  {
    topic: '전체',
    icon: (
      <i>
        <TbHeartHandshake />
      </i>
    ),
  },
  {
    topic: '청소년',
    icon: (
      <i>
        <MdChildCare />
      </i>
    ),
  },
  {
    topic: '아동',
    icon: (
      <i>
        <MdOutlineChildFriendly />
      </i>
    ),
  },
  {
    topic: '어르신',
    icon: (
      <i>
        <TbOld />
      </i>
    ),
  },
  {
    topic: '장애인',
    icon: (
      <i>
        <FaWheelchair />
      </i>
    ),
  },
  {
    topic: '동물',
    icon: (
      <i>
        <MdOutlinePets />
      </i>
    ),
  },
  {
    topic: '환경',
    icon: (
      <i>
        <RiEarthFill />
      </i>
    ),
  },
  {
    topic: '기타',
    icon: (
      <i>
        <BsFillPeopleFill />
      </i>
    ),
  },
];

const HeaderContent = styled.div`
  background: ${SUB_COLOR};
  color: #fff;
`;

const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  height: 200px;
  margin: 0 auto;
  width: 1000px;

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 25px;
  }
`;

const BodyContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;

  > h2 {
    align-self: start;
    margin-bottom: 15px;
  }
`;

const DonationCards = styled.div`
  display: flex;
  column-gap: 15px;
`;

const Sort = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1000px;
  gap: 5px;
  margin-bottom: 10px;
`;
