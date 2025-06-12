import styled from "@emotion/styled";

export default function Pagination({ current, setPage, total }) {
  return (
    <PaginationBox>
      <button disabled={current === 1} onClick={() => setPage(current - 1)}>
        prev
      </button>
      <PageIndicator>
        {current} <Total>/ {total}</Total>
      </PageIndicator>
      <button disabled={current === total} onClick={() => setPage(current + 1)}>
        next
      </button>
    </PaginationBox>
  );
}
const PaginationBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #1e1e1e76;
    background: transparent;
    color: #1e1e1e;
    border-radius: 10rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    :hover {
      color: #00603a;
      border: 1px solid #00603a;
    }
  }
`;

const PageIndicator = styled.span`
  font-weight: bold;
  color: #1e1e1ed4;
`;

const Total = styled.span`
  color: #1e1e1e82; // white 50%
`;
