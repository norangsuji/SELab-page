import styled from "@emotion/styled";

export default function MemberCard({ name, position, email, image }) {
  const splitKoreanEnglishName = (name) => {
    const match = name.match(/^([가-힣\s]+)\s+([a-zA-Z\s]+)$/);
    if (match) {
      return [match[1], match[2]];
    }
    return [name];
  };

  const [koreanName, englishName] = splitKoreanEnglishName(name);

  return (
    <Card>
      <Image src={image} alt={`${name} 프로필`} />
      <Info>
        <Name>
          {koreanName}
          {englishName && <br />}
          {englishName}
        </Name>
        <Position>{position}</Position>
        <Label>Contact</Label>
        <Email>{email}</Email>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  padding: 2rem 3rem;
  background: #ffffff80;
  border: 0.08rem solid #1e1e1e;
  border-radius: 1rem;
  height: 15rem;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 12rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10rem;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    width: 90%;
    height: 9rem;
    gap: 0.6rem;
  }

  @media (max-width: 320px) {
    padding: 0rem 1rem;
    gap: 0.4rem;
  }
`;

const Image = styled.img`
  width: 8rem;
  height: 10rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 0.3rem;

  @media (max-width: 1024px) {
    width: 5rem;
    height: 7rem;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    width: 5rem;
    height: 6.2rem;
  }

  @media (max-width: 320px) {
    width: 4.6rem;
    height: 5.6rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.2;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const Position = styled.div`
  font-size: 0.9rem;
  color: #1e1e1e;
  margin: 0.2rem 0;

  @media (max-width: 1024px) {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

const Label = styled.div`
  font-size: 0.8rem;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

const Email = styled.div`
  font-size: 1rem;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (max-width: 320px) {
    font-size: 0.65rem;
  }
`;
