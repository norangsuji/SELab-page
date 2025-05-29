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
  background: rgba(255, 255, 255, 0.03);
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  height: 15rem;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 14rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 13rem;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    padding: 1.2rem;
  }

  @media (max-width: 320px) {
    width: 16rem;
    padding: 0.5rem 1rem;
  }
`;

const Image = styled.img`
  width: 6rem;
  height: 8rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 0.3rem;

  @media (max-width: 1024px) {
    width: 4.7rem;
    height: 5.9rem;
  }

  @media (max-width: 768px) {
    width: 4.375rem;
    height: 5.625rem;
  }

  @media (max-width: 480px) {
    width: 4.7rem;
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
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const Position = styled.div`
  font-size: 0.9rem;
  color: #ccc;
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
  color: #aaa;

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
  color: #ccc;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
