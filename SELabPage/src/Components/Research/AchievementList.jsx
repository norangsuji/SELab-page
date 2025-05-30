import styled from "@emotion/styled";

export default function AchievementList({ data, keyword }) {
  const highlightText = (text, keyword) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => (regex.test(part) ? <Highlight key={index}>{part}</Highlight> : part));
  };

  const formatDate = (dateStr) => {
    // 예: dateStr === "Date(2022,5,9)"
    const match = dateStr.match(/Date\((\d+),(\d+),(\d+)\)/);

    if (match) {
      const [, year, month, day] = match;
      const mm = String(Number(month) + 1).padStart(2, "0"); // 월 +1 보정
      const dd = String(day).padStart(2, "0");
      return `${year}-${mm}-${dd}`;
    }

    return dateStr; // 혹시 모를 다른 형식 대비 fallback
  };

  return (
    <ListBox>
      {data.map((item, idx) => (
        <Item key={idx}>
          <Title>{highlightText(item.title, keyword)}</Title>
          <Meta>
            {highlightText(
              typeof item.contributors === "string"
                ? item.contributors.split(",").join(", ")
                : item.contributors?.join(", ") || "Unknown",
              keyword
            )}
            {" / "}
            {highlightText(item.info, keyword)}
            {item.date ? `, ${formatDate(item.date)}` : ""}
          </Meta>
        </Item>
      ))}
    </ListBox>
  );
}

const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
`;

const Item = styled.div`
  border-left: 0.2rem solid #f5f5f5;
  padding-left: 1rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center; // 세로 정렬
  gap: 0.3rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.2rem;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #ccc;
`;

const Highlight = styled.span`
  background-color: #02f799da;
  font-weight: bold;
  color: #1e1e1e;
  border-radius: 0.2rem;
  padding: 0 0.2rem;
`;
