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
  position: relative; // DropdownWrapper의 absolute 위치 기준
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ selected }) => (selected ? "#02f798" : "#f5f5f5")};
  border-radius: 2rem; /* ✅ SearchBox와 동일 */
  position: absolute; // 부모 기준으로 absolute
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
    color: #00ff99;
    border: 1px solid #00ff99;
  }
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f5f5f5;
  font-weight: 400;
  height: 3rem; /* ✅ SearchBox와 동일하게 맞춤 */
  padding: 0 2.5rem; /* ✅ 내부 여백도 맞춰서 통일감 있게 */

  span {
    white-space: nowrap;
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
  color: ${({ active }) => (active ? "#00ff99" : "#f5f5f5")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  white-space: nowrap;

  &:hover {
    color: #00ff99;
  }
`;
