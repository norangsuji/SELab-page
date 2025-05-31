import styled from "@emotion/styled";

export default function ProjectList({ projects }) {
  // 연도 기준으로 그룹화
  const grouped = {};
  projects.forEach((project) => {
    if (!grouped[project.year]) grouped[project.year] = [];
    grouped[project.year].push(project);
  });

  // 연도 내림차순 정렬
  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <>
      {sortedYears.map((year) => (
        <YearGroup key={year}>
          <YearTitle>
            <span>{year}</span>
            <Line />
          </YearTitle>
          <ProjectItems>
            {grouped[year].map((proj, idx) => (
              <ProjectItem key={idx}>
                <FirstRow>
                  <ProjectTitle>{proj.title}</ProjectTitle>
                  <Period>{proj.period}</Period>
                </FirstRow>
                <Agency>발주기관: {proj.agency}</Agency>
              </ProjectItem>
            ))}
          </ProjectItems>
        </YearGroup>
      ))}
    </>
  );
}

const YearGroup = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const YearTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 1024px) {
    gap: 1.8rem;
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    gap: 1.4rem;
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    gap: 0.4rem;
    font-size: 1.2rem;
  }
  @media (max-width: 320px) {
    gap: 0.2rem;
    font-size: 0.9rem;
  }
`;

const Line = styled.div`
  flex: 1;
  height: 0.0625rem;
  background-color: #666;
`;

const ProjectItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    margin-top: 0.8rem;
  }
  @media (max-width: 768px) {
    margin-top: 0.6rem;
  }
  @media (max-width: 480px) {
    margin-top: 0.4rem;
  }
  @media (max-width: 320px) {
    margin-top: 0.2rem;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 이거 추가! 왼쪽 정렬 */
  gap: 0.5rem;

  @media (max-width: 480px) {
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
    align-items: flex-start; /* 이거 추가! 왼쪽 정렬 */
  }
`;

const ProjectTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

const Period = styled.div`
  font-size: 1rem;
  color: #bbb;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

const Agency = styled.div`
  font-size: 1rem;
  color: #aaa;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;
