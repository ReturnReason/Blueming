import { SUB_COLOR } from 'components/colors/common';
import styled from 'styled-components';
import { TbHeartHandshake } from 'react-icons/tb';
import { MdChildCare, MdOutlineChildFriendly, MdOutlinePets } from 'react-icons/md';
import { FaWheelchair } from 'react-icons/fa';
import { RiEarthFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbOld } from 'react-icons/tb';

export default function Donation() {
  return (
    <Container>
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
    </Container>
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

const Container = styled.div`
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
