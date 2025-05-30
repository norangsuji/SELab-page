import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";

export default function Search({ keyword, setKeyword }) {
  return (
    <SearchBox active={!!keyword}>
      <SearchButton active={!!keyword}>
        <FiSearch size={20} />
      </SearchButton>
      <Input placeholder="검색할 내용을 입력하세요." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
    </SearchBox>
  );
}

// ========== 스타일 ==========
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 3rem;
  border: 1px solid ${({ active }) => (active ? "#00ff99" : "#f5f5f5")};
  background: linear-gradient(
    122.72deg,
    rgba(79, 79, 79, 0.1) 1.74%,
    rgba(79, 79, 79, 0.1) 1.75%,
    rgba(255, 255, 255, 0.1) 33.05%,
    rgba(79, 79, 79, 0.1) 97.16%
  );
  border-radius: 2rem;
  overflow: hidden;
  padding: 0rem 0.4rem 0rem 1rem;

  :hover {
    border: 1px solid #00ff99;
  }
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: #ccccccc0;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ active }) => (active ? "#00ff99" : "#f5f5f5")};
  cursor: pointer;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #00ff99;
  }
`;
