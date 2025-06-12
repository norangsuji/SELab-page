import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { FiChevronDown } from "react-icons/fi";

// 카테고리 리스트 예시
const CATEGORY_LIST = [
  "All",
  "International Journals",
  "International Conferences",
  "Domestic Journals",
  "Domestic Conferences",
  "Patents",
  "Awards",
  "Activities",
];

export default function Category({ category, setCategory }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setOpen((prev) => !prev);

  const selectCategory = (c) => {
    setCategory(c);
    setOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      <DropdownWrapper ref={dropdownRef} isOpen={open}>
        <DropdownToggle onClick={toggle}>
          <span>{category || "Select Category"}</span>
          <FiChevronDown size={20} />
        </DropdownToggle>
        {open && (
          <DropdownList>
            {CATEGORY_LIST.map((c, i) => (
              <DropdownItem
                key={i}
                active={c === category || (category === "" && c === "All")}
                onClick={() => selectCategory(c)}
              >
                {c}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 30rem;
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ selected }) => (selected ? "#00603a" : "#1E1E1E")};
  border-radius: 2rem;
  position: absolute;
  z-index: 10;
  top: 0;
  overflow: hidden;
  background: linear-gradient(
    122.72deg,
    rgba(79, 79, 79, 0.1) 1.74%,
    rgba(79, 79, 79, 0.1) 1.75%,
    rgba(255, 255, 255, 0.1) 33.05%,
    rgba(79, 79, 79, 0.1) 97.16%
  );
  backdrop-filter: blur(10px);
  cursor: pointer;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "auto" : "3rem")};

  &:hover {
    color: #00603a;
    border: 1px solid #00603a;
  }

  @media (max-width: 1024px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "2.8rem")};
  }
  @media (max-width: 768px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "2.6rem")};
  }
  @media (max-width: 480px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "2.4rem")};
    position: relative;
  }
  @media (max-width: 320px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "2.2rem")};
  }
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1e1e1e;
  font-weight: 400;
  height: 3rem;
  padding: 0 2.5rem;

  span {
    white-space: nowrap;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    height: 2.8rem;
    padding: 0 2rem;
    span {
      font-size: 0.95rem;
    }
  }
  @media (max-width: 768px) {
    height: 2.6rem;
    padding: 0 1.5rem;
    span {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    height: 2.4rem;
    padding: 0 1.2rem;
    span {
      font-size: 0.85rem;
    }
  }
  @media (max-width: 320px) {
    padding: 0 1rem;
    height: 2rem;
    span {
      font-size: 0.6rem;
    }
  }
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  left: 0;
  width: 100%;
`;

const DropdownItem = styled.li`
  padding: 0.6rem 2.5rem 1rem 2.5rem;
  color: ${({ active }) => (active ? "#00603a" : "#1E1E1E")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  white-space: nowrap;
  font-size: 1rem;

  &:hover {
    color: #00603a;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 2rem 0.8rem 2rem;
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    padding: 0.4rem 1.2rem 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  @media (max-width: 320px) {
    padding: 0.3rem 1rem 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;
