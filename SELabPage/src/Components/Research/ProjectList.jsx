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
                <Agency>발주 기관: {proj.agency}</Agency>
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
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #666;
`;

const ProjectItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  align-self: stretch;
`;

const ProjectTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

const Period = styled.div`
  font-size: 1rem;
  color: #bbb;
`;

const Agency = styled.div`
  font-size: 1rem;
  color: #aaa;
`;
