import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MemberCard from "../../Components/Member/MemberCard";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";

function CurrentMemberPage() {
  const [members, setMembers] = useState([]);
  const defaultImage = "/Images/NO_IMAGE.png"; // 기본 이미지 경로
  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/gviz/tq?tqx=out:json"
      );
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const members = await Promise.all(
        json.table.rows.slice(1).map(async (row) => {
          const cells = row.c;
          const studentId = cells[3]?.v || "";

          // 이미지 경로 시도: PNG 우선, 없으면 JPG
          const pngPath = `/Images/${studentId}.png`;
          const jpgPath = `/Images/${studentId}.jpg`;

          const resolvedImage = (await checkImageExists(pngPath))
            ? pngPath
            : (await checkImageExists(jpgPath))
            ? jpgPath
            : defaultImage;

          return {
            name: cells[0]?.v || "",
            position: cells[1]?.v || "",
            email: cells[2]?.v || "",
            image: resolvedImage,
          };
        })
      );

      setMembers(members);
    };

    fetchMembers();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Current Lab Members</Title>
          <Description>ISELab의 연구원입니다</Description>
        </TitleBox>
        <MemberBox>
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </MemberBox>
      </Container>
    </>
  );
}

export default CurrentMemberPage;

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

const MemberBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  justify-items: center;
  align-items: center; // ✅ 이걸로 수정!

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 0.8rem;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;
