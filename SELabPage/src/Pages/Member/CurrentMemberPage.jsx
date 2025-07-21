import { useEffect, useState } from "react";
import MemberCard from "../../Components/Member/MemberCard";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import Footer from "../../Components/Default/Footer";

function CurrentMemberPage() {
  const [members, setMembers] = useState([]);
  const defaultImage = "/Images/NO_IMAGE.png";

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch("https://opensheet.vercel.app/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/Members");
      const data = await res.json();

      const members = data
        .filter((row) => row.name && row.imageUrl) // 이름 & 이미지 있는 행만
        .map((row) => ({
          name: row.name,
          position: row.position,
          email: row.email,
          image: row.imageUrl?.startsWith("https://") ? row.imageUrl : defaultImage,
        }));

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
          <Description>ISE Lab. 연구원</Description>
        </TitleBox>
        <MemberBox>
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </MemberBox>
      </Container>
      <Footer />
    </>
  );
}

export default CurrentMemberPage;

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
