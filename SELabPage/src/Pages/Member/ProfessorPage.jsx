import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";

// ✅ 드라이브 이미지 링크
//const professorImageUrl = "https://drive.google.com/uc?export=view&id=1D0mQ6PE07eeu9dGvN2BPfnfP4lsOAFYj";
const professorImageUrl = "/Images/professor2.png";

function ProfessorPage() {
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
                <strong>Lab :</strong> 000호
              </li>
              <li>
                <strong>Lab Tel :</strong> 000-0000-0000
              </li>
              <li>
                <strong>Office :</strong> 000호
              </li>
              <li>
                <strong>Office Tel :</strong> 000-0000-0000
              </li>
              <li>
                <strong>E-mail :</strong> 00000000@uos.ac.kr
              </li>
            </ul>

            <SectionTitle>Education</SectionTitle>
            <ul>
              <li>Ph.D in Electrical and Computer Engineering, Seoul National University, Aug. 2020</li>
              <li>M.S. in Biosystems Engineering, Seoul National University, Aug. 2015</li>
              <li>B.S. in Electrical and Computer Engineering, University of Seoul, Feb. 2013</li>
            </ul>

            <SectionTitle>Experience</SectionTitle>
            <ul>
              <li>
                <strong>2024.01~2024.12</strong> 약력내용 1줄내외 약력내용 1줄내외
              </li>
              <li>
                <strong>2024.01~2024.12</strong> 약력내용 1줄내외 약력내용 1줄내외
              </li>
              <li>
                <strong>2024.01~2024.12</strong> 약력내용 1줄내외 약력내용 1줄내외
              </li>
              <li>
                <strong>2024.01~2024.12</strong> 약력내용 1줄내외 약력내용 1줄내외
              </li>
            </ul>
          </RightColumn>
        </InformationBox>
      </Container>
    </>
  );
}

export default ProfessorPage;

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
    padding: 0.3rem 6rem 6rem 6rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 4rem 4rem 4rem;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.1rem 3rem 3rem 3rem;
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
    width: 300px;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;

    @media (max-width: 1024px) {
      width: 250px;
    }

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 160px;
    }

    @media (max-width: 320px) {
      width: 130px;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

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
  font-size: 1.1rem;
  font-weight: 600;
  color: #f5f5f5;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
