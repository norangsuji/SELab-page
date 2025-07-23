import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import ProjectList from "../../Components/Research/ProjectList";
import Footer from "../../Components/Default/Footer";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://opensheet.vercel.app/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/Project");
        const data = await res.json();

        const formatted = data
          .filter((p) => p.title && p.start && p.finish)
          .map((p) => ({
            year: p.start.split("-")[0],
            title: p.title,
            period: `${p.start}~${p.finish}`,
            agency: p.agency || "정보 없음",
          }));

        setProjects(formatted);
      } catch (err) {
        console.error("📛 프로젝트 데이터를 불러오는데 실패했어요:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Project</Title>
          <Description>ISE Lab. 프로젝트</Description>
        </TitleBox>
        <ProjectBox>
          <ProjectList projects={projects} />
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
