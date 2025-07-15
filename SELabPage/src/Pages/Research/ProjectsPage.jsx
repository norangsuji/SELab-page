import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import ProjectList from "../../Components/Research/ProjectList";
import Footer from "../../Components/Default/Footer";

function ProjectsPage() {
  const dummyProjects = [
    {
      year: "2022",
      title: "데이터 융합 인재 양성 사업",
      period: "2022.09.01~2029.02.28",
      agency: "과학기술정보통신부/원천기술개발사업",
    },
    {
      year: "2020",
      title: "딥러닝 알고리즘 기반 소프트웨어 버그 자동 정정 연구",
      period: "2020.03.01~2023.02.28",
      agency: "과학기술정보통신부/중견연구자지원사업",
    },
    {
      year: "2020",
      title: "진화론적 방법에 기반한 소프트웨어 버그 자동 정정 연구",
      period: "2020.03.01~2023.02.28",
      agency: "과학기술정보통신부/중견연구자지원사업",
    },
    {
      year: "2014",
      title: "상시 모니터링 연동 의미기반 테스트 지원 기술",
      period: "2014.07.01~2019.06.30",
      agency: "과학기술정보통신부/차세대정보표준기술개발사업",
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Project</Title>
          <Description>ISE Lab. 프로젝트</Description>
        </TitleBox>
        <ProjectBox>
          <ProjectList projects={dummyProjects} />
        </ProjectBox>
      </Container>
      <Footer />
    </>
  );
}

export default ProjectsPage;

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
    gap: 0.5rem;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }

  @media (max-width: 320px) {
    gap: 0.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #1e1e1e;
  text-align: center;
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const ProjectBox = styled.div`
  width: 100%;
  padding: 0rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.8rem;
    padding: 0rem 4rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
    padding: 0rem 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    padding: 0rem 1.2rem;
  }

  @media (max-width: 320px) {
    gap: 0.2rem;
    padding: 0rem 1rem;
  }
`;
