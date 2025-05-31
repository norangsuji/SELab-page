import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// 확장자 후보 리스트
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "JPG"];
const DEFAULT_IMAGE = "/Images/DefaultImage.png";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/gviz/tq?tqx=out:json&sheet=Gallery";

export default function ImageList() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const rows = json.table.rows.slice(1);

      const parsed = rows.map((row) => {
        const title = row.c[0]?.v || "제목 없음";
        const id = row.c[1]?.v || "";
        return { title, id };
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
                <ImageWithFallback id={item.id} onClick={() => alert(item.title)} />
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

// ✅ 이미지 확장자 fallback 처리용 컴포넌트
function ImageWithFallback({ id, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleError = () => {
    if (currentIndex < IMAGE_EXTENSIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentSrc = `/Images/${id}.${IMAGE_EXTENSIONS[currentIndex]}`;

  return (
    <Thumbnail
      src={currentSrc}
      alt="gallery image"
      onError={handleError}
      onClick={onClick} // ✅ 여기에 클릭 이벤트 props 연결
    />
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
  height: 1px;
  background-color: #666;
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
  color: #fff;

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
  background-color: #888;
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
