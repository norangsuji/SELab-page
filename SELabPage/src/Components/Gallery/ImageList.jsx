import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const SHEET_URL = "https://opensheet.elk.sh/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/Gallery";
const DEFAULT_IMAGE = "/Images/DefaultImage.png";

export default function ImageList() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SHEET_URL);
      const data = await res.json();

      const parsed = data.map((row) => {
        const title = row.title?.trim() || "제목 없음";
        const imageUrl = row.imageUrl?.trim() || "";
        return { title, imageUrl };
      });

      const grouped = {};
      parsed.forEach((item) => {
        const yearMatch = item.title.match(/(\d{4})/);
        const year = yearMatch ? yearMatch[1] : "Unknown";
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(item);
      });

      const sorted = Object.entries(grouped)
        .sort((a, b) => b[0] - a[0])
        .map(([year, items]) => ({ year, items }));

      setGalleryData(sorted);
    };

    fetchData();
  }, []);

  return (
    <>
      {galleryData.map(({ year, items }) => (
        <YearSection key={year}>
          <YearTitle>
            <span>{year}</span>
            <Line />
          </YearTitle>
          <CardGrid>
            {items.map((item, idx) => (
              <Card key={idx}>
                <Thumbnail
                  src={item.imageUrl || DEFAULT_IMAGE}
                  alt="gallery image"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.warn("이미지 로딩 실패", item.imageUrl);
                    e.target.src = DEFAULT_IMAGE;
                  }}
                  onClick={() => alert(item.title)}
                />
                <CardText>
                  <Title onClick={() => alert(item.title)}>{item.title}</Title>
                </CardText>
              </Card>
            ))}
          </CardGrid>
        </YearSection>
      ))}
    </>
  );
}

const YearSection = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const YearTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #1e1e1e;

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
  height: 1px;
  background-color: #1e1e1e80;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); // 10rem ≒ 160px
  gap: 2rem;
  margin-top: 1rem;
  align-items: start;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, 1fr); // 고정 2열
    gap: 0.9rem;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, 1fr);
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* ≒ 160px */
  gap: 0.3rem;
  color: #1e1e1e;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }

  @media (max-width: 320px) {
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 0.4rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    border-radius: 0.3rem;
    aspect-ratio: 3 / 4;
  }

  @media (max-width: 768px) {
    border-radius: 0.2rem;
    aspect-ratio: 3 / 4;
  }

  @media (max-width: 480px) {
    border-radius: 0.15rem;
    aspect-ratio: 3 / 4; // or even 1 / 1 if you want it square
  }

  @media (max-width: 320px) {
    border-radius: 0.1rem;
    aspect-ratio: 3 / 4;
  }
`;

const Title = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Date = styled.div`
  font-size: 0.8rem;
  color: #ccc;
`;

const Description = styled.div`
  font-size: 0.75rem;
  color: #aaa;
`;
