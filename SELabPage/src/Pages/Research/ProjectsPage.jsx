import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Project</Title>
          <Description>ISELab에서 진행하는 프로젝트들입니다</Description>
        </TitleBox>
      </Container>
    </>
  );
}

export default ProjectsPage;

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
  color: #f5f5f5;
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
  color: #f5f5f5;

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
