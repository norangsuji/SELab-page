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

  @media (max-width: 1024px) {
    height: 2.8rem;
    padding: 0 0.3rem 0 0.8rem;
  }
  @media (max-width: 768px) {
    height: 2.6rem;
    padding: 0 0.2rem 0 0.7rem;
  }
  @media (max-width: 480px) {
    height: 2.4rem;
    padding: 0 0.2rem 0 0.6rem;
  }
  @media (max-width: 320px) {
    padding: 0 1rem;
    height: 2rem;
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
    font-size: 0.5rem;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ active }) => (active ? "#00ff99" : "#f5f5f5")};
  cursor: pointer;
  line-height: 2.5rem; /* ✅ 이 부분이 문제! */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem 0rem 0rem;
  margin: 0.8rem;
  border-right: 1px solid #f5f5f586;

  :hover {
    color: #00ff99;
  }

  @media (max-width: 1024px) {
    line-height: 2.2rem;
    padding: 0 0.7rem 0rem 0rem;
    margin: 0.7rem;
  }
  @media (max-width: 768px) {
    line-height: 2rem;
    padding: 0 0.6rem 0rem 0rem;
    margin: 0.6rem;
  }
  @media (max-width: 480px) {
    line-height: 1.8rem;
    padding: 0 0.5rem 0rem 0rem;
    margin: 0.5rem;
  }
  @media (max-width: 320px) {
    line-height: 1.5rem; /* ✅ 이렇게 줄이면 해결됨 */
    padding: 0 0.4rem 0rem 0rem;
    margin: 0.4rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;

    @media (max-width: 1024px) {
      width: 1.1rem;
      height: 1.1rem;
    }
    @media (max-width: 768px) {
      width: 1rem;
      height: 1rem;
    }
    @media (max-width: 480px) {
      width: 0.9rem;
      height: 0.9rem;
    }
    @media (max-width: 320px) {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;
