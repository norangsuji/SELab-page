import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import Search from "../../Components/Research/Search";
import Category from "../../Components/Research/Category";
import Pagination from "../../Components/Research/Pagination";
import AchievementList from "../../Components/Research/AchievementList";
import Footer from "../../Components/Default/Footer";

const CATEGORY_STATUS_MAP = {
  "International Journals": "IJ",
  "International Conferences": "IC",
  "Domestic Journals": "DJ",
  "Domestic Conferences": "DC",
  Patents: "PT",
  Awards: "AR",
  Activities: "AC",
};

function LabAchievementPage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchAchievements = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/gviz/tq?tqx=out:json&sheet=Achivement"
      );
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const rows = json.table.rows.slice(1);
      const parsed = rows.map((row) => {
        const cells = row.c;
        return {
          title: cells[0]?.v || "",
          category: cells[1]?.v || "",
          info: cells[2]?.v || "",
          contributors: (cells[3]?.v || "").split(", "),
          date: cells[4]?.v ? String(cells[4].v) : "", // 날짜 보정
        };
      });

      const parseDate = (dateStr) => {
        if (!dateStr) return new Date("1900-01");

        const start = dateStr.split("~")[0].trim(); // 앞 날짜만 사용

        // yyyy-mm (정상)
        if (/^\d{4}-\d{2}$/.test(start)) return new Date(start);

        // yyyy-m (한 자리 월 → 두 자리로 보정)
        if (/^\d{4}-\d{1}$/.test(start)) {
          const [y, m] = start.split("-");
          return new Date(`${y}-${m.padStart(2, "0")}`);
        }

        // yyyy (보정해서 1월로 처리)
        if (/^\d{4}$/.test(start)) return new Date(`${start}-01`);

        return new Date("1900-01");
      };

      parsed.sort((a, b) => {
        const d1 = parseDate(a.date);
        const d2 = parseDate(b.date);
        return d2 - d1; // 최신순 정렬
      });

      setData(parsed);
      setFiltered(parsed);
    };

    fetchAchievements();
  }, []);

  useEffect(() => {
    let temp = [...data];

    if (selectedCategory !== "All") {
      const selectedCode = CATEGORY_STATUS_MAP[selectedCategory];
      temp = temp.filter((item) => item.category === selectedCode);
    }

    if (keyword.trim() !== "") {
      const lowered = keyword.toLowerCase();
      temp = temp.filter(
        (item) =>
          item.title.toLowerCase().includes(lowered) ||
          item.info.toLowerCase().includes(lowered) ||
          item.contributors.join(", ").toLowerCase().includes(lowered)
      );
    }

    setFiltered(temp);
    setPage(1);
  }, [selectedCategory, keyword, data]);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Lab Achievement</Title>
          <Description>ISE Lab. 성과</Description>
        </TitleBox>
        <AchievementBox>
          <ControlRow>
            <Search keyword={keyword} setKeyword={setKeyword} />
            <Category category={selectedCategory} setCategory={setSelectedCategory} />
          </ControlRow>
          <AchievementList data={currentPageData} keyword={keyword} />
          <Pagination current={page} setPage={setPage} total={totalPages} />
        </AchievementBox>
      </Container>
      <Footer />
    </>
  );
}

export default LabAchievementPage;

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

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #1e1e1e;

  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
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
    font-size: 0.95rem;
  }
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const AchievementBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.8rem;
  }
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    gap: 1.2rem;
  }
  @media (max-width: 320px) {
    gap: 1rem;
  }
`;

const ControlRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 1024px) {
    gap: 4rem;
  }
  @media (max-width: 768px) {
    gap: 2rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.4rem;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;
