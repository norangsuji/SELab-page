import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "../Components/Default/NavBar";
import BannerSlide from "../Components/Main/BannerSlide";
import LabNotice from "../Components/Main/LabNotice";

function MainPage() {
  return (
    <>
      <Navbar />
      <Container>
        <BannerSlide />
        <IntroBox>
          <Title>ISELab Introduction</Title>
          <IntroductionBox>
            <p>
              지능형 소프트웨어 공학은 기간과 비용의 한도 내에서
              <br /> 소프트웨어을 위한 체계적인 기술과 관리에 대한 학문 분야로서,
              <br /> 소프트웨어의 품질을 향상시키고 생산성을 증가시키는데 그 목적이 있다.
            </p>
            <p>
              지능형 소프트웨어공학 연구실에서는 이병정 교수님의 지도 하에
              <br /> 지능형 소프트웨어 공학에 대한 폭넓은 시각을 가지고,
              <br /> 소프트웨어를 개발할 때 널리 사용하는 여러 기법들에 대하여 연구한다.
              <br /> 또한 구체적으로 소프트웨어 테스팅, 진화 등의 다양한 토픽들을 다루고 있다.
            </p>
          </IntroductionBox>
        </IntroBox>
        <LabNotice />
      </Container>
    </>
  );
}

export default MainPage;

// ======================== 스타일 ========================

const Container = styled.div`
  width: 100%;
  padding: 0.7rem 15rem 16rem 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 0.3rem 8rem 9rem 8rem;
    gap: 2.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 5rem 6rem 5rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 3rem 4rem 3rem;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.1rem 2rem 3rem 2rem;
    gap: 0.5rem;
  }
`;

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }

  @media (max-width: 320px) {
    gap: 0.3rem;
  }
`;

const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.2rem;
  color: #f5f5f5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

const IntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #f5f5f5;
    text-align: center;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      line-height: 1.8rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 480px) {
      font-size: 0.55rem;
      line-height: 1rem;
      margin-bottom: 0.3rem;
    }

    @media (max-width: 320px) {
      font-size: 0.5rem;
      line-height: 0.9rem;
      margin-bottom: 0.2rem;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;
