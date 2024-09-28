// SuccessPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    image: '/door.png',
    text: '건물의 문을 열고 들어간 순간,\n알파키와 범인들을 발견한다.\n당신은 침착하게 행동하여\n무사히 범인들을 신고한 뒤,\n알파키를 구출할 수 있게 된다.',
  },
  {
    image: '/alphki_nukki.png',
    text: '나를 구하러 와줘서 정말 고마워!\n똑똑한 너희들이 없었다면 큰 위험에\n빠졌을 지도 몰라.. 감사의 의미로 간식을\n준비했는데 맛있게 먹어주길 바래!\n\n다음에 또 보자! 안녕!',
  },
  {
    image: '/clap.png',
    text: '알파키 구출에 성공하셨습니다!\n\n안내가 끝난 후 알파키가 준비한 간식을\n받아가시길 바랍니다:)\n\n저희는 영어회화 중앙동아리\n"알파카이"며, 부스가 맘에 드셨다면\n저희 동아리에게도 많은 관심 부탁드립니다!\n\n부스에 참여해주셔서 진심으로\n감사드립니다!',
  },
];

const SuccessPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="success-page">
      <img src={pages[currentPage].image} alt="Success" className="success-image" />
      <p className="success-text">{pages[currentPage].text}</p>
      <button onClick={handleNext} className="next-button">
        {currentPage < pages.length - 1 ? '다음' : '처음으로'}
      </button>
    </div>
  );
};

export default SuccessPage;