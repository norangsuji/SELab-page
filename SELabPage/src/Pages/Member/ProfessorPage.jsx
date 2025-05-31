import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import Footer from "../../Components/Default/Footer";

// ✅ 드라이브 이미지 링크
//const professorImageUrl = "https://drive.google.com/uc?export=view&id=1D0mQ6PE07eeu9dGvN2BPfnfP4lsOAFYj";
const professorImageUrl = "/Images/professor2.png";

function ProfessorPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProfessor = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/gviz/tq?tqx=out:json&sheet=AboutProfessor"
      );
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const formatDate = (raw) => {
        if (!raw) return "";

        // ✅ 숫자만 들어온 경우 (연도만): ex) 2015
        if (typeof raw === "number") {
          return `${raw}`;
        }

        // ✅ 문자열로 들어온 경우
        if (typeof raw === "string") {
          // "2015", "2020-1", "2020-01-01" 등등
          const parts = raw.split("-").map((p) => p.padStart(2, "0"));

          if (parts.length === 1) return parts[0]; // 연도만
          if (parts.length === 2) return `${parts[0]}-${parts[1]}`;
          if (parts.length === 3) return `${parts[0]}-${parts[1]}-${parts[2]}`;
        }

        // ✅ Date 객체 처리
        const date = new Date(raw);
        if (isNaN(date)) return "";

        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");

        if (dd === "01" && mm === "01") return `${yyyy}`;
        if (dd === "01") return `${yyyy}-${mm}`;
        return `${yyyy}-${mm}-${dd}`;
      };

      const entries = json.table.rows.map((row) => {
        const cells = row.c;
        return {
          title: cells[0]?.v || "",
          start: formatDate(cells[1]?.f || cells[1]?.v),
          finish: formatDate(cells[2]?.f || cells[2]?.v),
        };
      });

      // 🔽 최신 날짜 먼저 정렬
      entries.sort((a, b) => {
        const dateA = new Date(a.start);
        const dateB = new Date(b.start);
        return dateB - dateA;
      });

      setData(entries);
    };

    fetchProfessor();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Professor</Title>
          <Description>ISELab의 지도교수입니다</Description>
        </TitleBox>
        <InformationBox>
          <LeftColumn>
            <img src={professorImageUrl} alt="교수님 프로필" />
            <Intro>
              <span className="name">Byung Jung Lee</span>
              <span className="position">Professor</span>
            </Intro>
          </LeftColumn>
          <RightColumn>
            <InfoTitle>이병정 교수</InfoTitle>
            <InfoText>서울시립대학교 공과대학 컴퓨터과학과</InfoText>
            <ul>
              <li>
                <strong>Office :</strong> 서울시립대학교 정보기술관 307호
              </li>
              <li>
                <strong>Office Tel :</strong> 02-6490-2451
              </li>
              <li>
                <strong>E-mail :</strong> bjlee@uos.ac.kr
              </li>
            </ul>

            <SectionTitle>Education</SectionTitle>
            <ul>
              <li>Doctorate in Engineering, 2002.2 Seoul National University, Computer Engineering</li>
              <li>Master of Science, 1998.2 Seoul National University Computer Science</li>
              <li>Bachelor of Science, 1990.2 Seoul National University, Computational Statistics</li>
            </ul>

            <SectionTitle>Experience</SectionTitle>
            <ul>
              {data.map((item, idx) => (
                <li key={idx}>
                  {item.start && item.finish ? (
                    <strong>
                      {item.start} ~ {item.finish}
                    </strong>
                  ) : null}{" "}
                  {item.title}
                </li>
              ))}
            </ul>
          </RightColumn>
        </InformationBox>
      </Container>
      <Footer />
    </>
  );
}

export default ProfessorPage;

// ======================== 스타일 ========================

const Container = styled.div`
  width: 100%;
  padding: 0.7rem 15rem 10rem 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 0.3rem 8rem 5rem 8rem;
    gap: 2.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 5rem 6rem 5rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 3rem 3rem 3rem;
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

const InformationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }

  @media (max-width: 320px) {
    gap: 0.5rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 1rem;
  flex-direction: column;

  img {
    width: 20rem;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;

    @media (max-width: 1024px) {
      width: 15rem;
    }

    @media (max-width: 480px) {
      width: 13rem;
    }

    @media (max-width: 320px) {
      width: 10rem;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }

  & .name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f5f5f5;

    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
    @media (max-width: 320px) {
      font-size: 0.9rem;
    }
  }

  & .position {
    font-size: 1rem;
    font-weight: 700;
    color: #f5f5f5;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
    @media (max-width: 320px) {
      font-size: 0.6rem;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  color: #f5f5f5;
  line-height: 1.6;

  @media (max-width: 1024px) {
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    gap: 0.2rem;
  }

  @media (max-width: 480px) {
    gap: 0.15rem;
  }

  @media (max-width: 320px) {
    gap: 0.1rem;
  }

  ul {
    padding-left: 1.2rem;
    list-style-type: disc;
    margin-top: 0.2rem;

    li {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;

      @media (max-width: 1024px) {
        font-size: 0.9rem;
      }

      @media (max-width: 768px) {
        font-size: 0.85rem;
      }

      @media (max-width: 480px) {
        font-size: 0.75rem;
      }

      @media (max-width: 320px) {
        font-size: 0.7rem;
      }
    }
  }
`;

const InfoTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #f5f5f5;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: #f5f5f5;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SectionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
