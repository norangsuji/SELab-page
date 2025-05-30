import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../../Components/Default/NavBar";
import AlumnisList from "../../Components/Member/AlumnisList";

function AlumnisPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAlumnis = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1hlC9yX2rlqQsiIbqKKA-MYI7BD1fRmemm6G5YMENSO4/gviz/tq?tqx=out:json&sheet=Alumnis"
      );
      const text = await res.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const alumnis = json.table.rows.slice(1).map((row) => {
        const cells = row.c;
        return {
          name: cells[0]?.v || "",
          position: cells[1]?.v || "",
          date: cells[2]?.v || "",
        };
      });

      setData(alumnis);
    };

    fetchAlumnis();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleBox>
          <Title>Alumnis</Title>
          <Description>ISELab의 졸업생입니다</Description>
        </TitleBox>
        <AlumnisBox>
          <AlumnisList alumnis={data} />
        </AlumnisBox>
      </Container>
    </>
  );
}

export default AlumnisPage;

// ===== 스타일 =====
const Container = styled.div`
  width: 100%;
  padding: 0.7rem 15rem 16rem 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #f5f5f5;
`;

const Description = styled.div`
  font-size: 1rem;
  color: #ccc;
`;

const AlumnisBox = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
