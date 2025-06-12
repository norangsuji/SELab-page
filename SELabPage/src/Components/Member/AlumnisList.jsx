import styled from "@emotion/styled";
import { romanizeKoreanName } from "./romanizeKoreanName";

function formatName(name) {
  const isKoreanOnly = /^[\uAC00-\uD7AF\s]+$/.test(name);
  const isEnglishOnly = /^[a-zA-Z\s]+$/.test(name);

  if (isEnglishOnly) return name;
  if (isKoreanOnly) {
    const eng = romanizeKoreanName(name);
    return `${name} / ${eng}`;
  }
  return name;
}

export default function AlumnisList({ alumnis }) {
  const grouped = {};
  const unspecified = [];
  const bachelors = [];

  alumnis.forEach((item) => {
    const rawYear = item.date ? String(item.date).slice(0, 4) : null;
    const year = /^\d{4}$/.test(rawYear) ? rawYear : null;

    if (item.position === "Bachelor") {
      bachelors.push(item); // Bachelor는 따로 수집
      return;
    }

    if (year) {
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    } else {
      unspecified.push(item);
    }
  });

  const sortedGroups = Object.entries(grouped).sort((a, b) => b[0] - a[0]);
  unspecified.sort((a, b) => a.name.localeCompare(b.name, "ko"));

  if (unspecified.length > 0) {
    sortedGroups.push(["Unspecified", unspecified]);
  }

  return (
    <>
      {/* 🎓 연도별 Ph.D / M.S 출력 */}
      {sortedGroups.map(([year, list]) => (
        <YearBox key={year}>
          <YearTitle>
            <span>{year === "Unspecified" ? "Unspecified Year" : year}</span>
            <Line />
          </YearTitle>

          {["Ph.D", "M.S"].map((key) => {
            const filtered = list.filter((a) => a.position === key);
            if (filtered.length === 0) return null;

            return (
              <PositionList key={key}>
                {filtered.map((item, idx) => (
                  <ListItem key={idx}>
                    <PositionLabel>{key}</PositionLabel>
                    <Divider />
                    <Name>{formatName(item.name)}</Name>
                  </ListItem>
                ))}
              </PositionList>
            );
          })}
        </YearBox>
      ))}

      {/* 🎒 전체 Bachelor 출력 */}
      {bachelors.length > 0 && (
        <YearBox>
          <YearTitle>
            <Line />
            <span>Bachelor</span>
            <Line />
          </YearTitle>
          <PositionList>
            {bachelors.map((item, idx) => (
              <ListItem key={idx}>
                <PositionLabel>Bachelor</PositionLabel>
                <Divider />
                <Name>{formatName(item.name)}</Name>
              </ListItem>
            ))}
          </PositionList>
        </YearBox>
      )}
    </>
  );
}

// ===== 스타일 =====

const YearBox = styled.div`
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 320px) {
    margin-bottom: 0.7rem;
  }
`;

const YearTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 2rem;
    gap: 0.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    gap: 0.5rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
  @media (max-width: 320px) {
    font-size: 0.7rem;
    gap: 0.1rem;
  }
`;

const Line = styled.div`
  flex: 1;
  height: 0.0625rem;
  background-color: #1e1e1e50;
`;

const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #1e1e1e;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.3rem;
  }
`;

const PositionLabel = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #1e1e1e;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
`;

const Divider = styled.div`
  flex: 1;
  height: 0.0625rem;
  background-color: #1e1e1e50;
  margin: 0 1rem;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Name = styled.div`
  white-space: nowrap;
  font-size: 1.2rem;
  text-align: right;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
`;
