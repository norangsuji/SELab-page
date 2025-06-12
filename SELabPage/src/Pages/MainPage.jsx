import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "../Components/Default/NavBar";
import BannerSlide from "../Components/Main/BannerSlide";
import LabNotice from "../Components/Main/LabNotice";
import Footer from "../Components/Default/Footer";

function MainPage() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTab = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <TitleBox>
        <FirstTitle>
          Intelligent Software{!isMobile && "\u00A0"}
          {isMobile && <br />}
          Engineering Lab
        </FirstTitle>
        <FirstIntroduction>
          <p>서울시립대학교 컴퓨터과학부 지능형 소프트웨어공학 연구실</p>
        </FirstIntroduction>
      </TitleBox>
      <Container>
        <IntroBox>
          {" "}
          <LeftCard>
            <ProfileCard>
              <ProfilePhoto src="/Images/professor2.png" alt="교수님 사진" />
              <CardTitle>Professor</CardTitle>
              <CardName>BYUNG JEONG LEE</CardName>
              <CardText>Email: bjlee@uos.ac.kr</CardText>
              <CardText>TEL: 02-6490-2451</CardText>
              <CardText>Office: 정보기술관 3층 307호</CardText>
              <ButtonRow>
                <CardButton onClick={() => navigate("/professors")}>Intro +</CardButton>
                <CardButton onClick={() => navigate("/lab-achievements")}>Activities +</CardButton>
              </ButtonRow>
            </ProfileCard>
          </LeftCard>
          <RightColumn>
            <Title>ISE Lab. Introduction</Title>
            <IntroductionBox>
              <p>
                서울시립대학교 지능형 소프트웨어공학 연구실에서
                <br />
                대학원 석/박사과정 연구원을 모집합니다.
              </p>
              <p>
                지능형 소프트웨어 공학은 기간과 비용의 한도 내에서
                <br /> 소프트웨어을 위한 체계적인 기술과 관리에 대한 학문 분야로서,
                <br /> 소프트웨어의 품질을 향상시키고
                {isMobile && <br />}생산성을 증가시키는데 그 목적이 있습니다.
              </p>
              <p>
                지능형 소프트웨어공학 연구실에서는 이병정 교수님의 지도 하에
                <br /> 지능형 소프트웨어 공학에 대한 폭넓은 시각을 가지고,
                <br /> 소프트웨어를 개발할 때 널리 사용하는 여러 기법들에 대하여 연구합니다.
                <br /> 또한 구체적으로 소프트웨어 테스팅, 진화 등의
                {isTab && <br />} 다양한 토픽들을 다루고 있습니다.
              </p>
            </IntroductionBox>
          </RightColumn>
        </IntroBox>
        <LabNotice />
      </Container>
      <Footer />
    </>
  );
}

export default MainPage;

// ======================== 스타일 ========================

const Container = styled.div`
  width: 100%;
  padding: 3rem 15rem 10rem 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 2rem 8rem 5rem 8rem;
    gap: 2.3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 5rem 6rem 5rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 3rem 3rem 3rem;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 2rem 3rem 2rem;
    gap: 1rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.2rem;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 0.3rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0rem;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 0.5rem;
    padding: 0;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    max-width: 100%;
  }
`;

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 320px) {
    gap: 1rem;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 20rem; /* 적당한 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  background-image: url("/homeimage.jpg");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1e1e1e40;
    backdrop-filter: blur(3px);
    z-index: 0;
  }

  * {
    z-index: 1;
    position: relative;
  }

  @media (max-width: 1024px) {
    height: 15rem; /* 적당한 높이 */
    gap: 0.8rem;
  }
  @media (max-width: 768px) {
    height: 10rem; /* 적당한 높이 */
    gap: 0.6rem;
  }
  @media (max-width: 480px) {
    gap: 0.4rem;
    height: 8rem; /* 적당한 높이 */
  }
  @media (max-width: 320px) {
    gap: 0.2rem;
    height: 7rem; /* 적당한 높이 */
  }
`;

const FirstTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3.2rem;
  color: #f5f5f5;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.7rem;
    line-height: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`;

const FirstIntroduction = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 2.5rem;
    line-height: 2rem;
    color: #f5f5f5;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
      line-height: 1.8rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.5rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
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

const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.2rem;
  color: #1e1e1e;
  text-align: left;

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
  align-items: left;

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    color: #1e1e1e;
    text-align: left;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.8rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 1.4rem;
      margin-bottom: 0.4rem;
    }

    @media (max-width: 480px) {
      font-size: 0.6rem;
      line-height: 0.9rem;
      margin-bottom: 0.3rem;
      align-items: center;
      text-align: center;
    }

    @media (max-width: 320px) {
      font-size: 0.55rem;
      line-height: 0.7rem;
      margin-bottom: 0.2rem;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

const ProfileCard = styled.div`
  background-color: #004a8f;
  color: #f5f5f5;
  padding: 2rem 1.5rem;
  width: 15rem;
  z-index: 10;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 1024px) {
    border-radius: 0.5rem;
    gap: 0.5rem;
    padding: 1.8rem 1.3rem;
  }
  @media (max-width: 768px) {
    border-radius: 0.5rem;
    gap: 0.4rem;
    padding: 1.5rem 1rem;
    width: 13rem;
  }
  @media (max-width: 480px) {
    border-radius: 0.5rem;
    gap: 0.4rem;
    padding: 1.2rem 0.8rem;
    width: 13rem;
  }
  @media (max-width: 320px) {
    border-radius: 0.5rem;
    gap: 0.2rem;
    padding: 1rem 0.5rem;
    width: 12rem;
  }
`;

const ProfilePhoto = styled.img`
  width: 80px;
  height: 100px;
  border-radius: 0.25rem;
  object-fit: cover;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 90px;
    border-radius: 0.2rem;
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 75px;
    border-radius: 0.2rem;
  }
  @media (max-width: 320px) {
  }
`;

const CardTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 400;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

const CardName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3rem;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
  @media (max-width: 320px) {
  }
`;

const CardText = styled.div`
  font-size: 0.85rem;
  line-height: 1rem;
  font-weight: 300;
  text-align: center;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 0.8rem;
  }
  @media (max-width: 320px) {
    font-size: 0.55rem;
    line-height: 0.7rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

const CardButton = styled.button`
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  color: #004a8f;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.6rem;
  }
  @media (max-width: 320px) {
  }
`;
