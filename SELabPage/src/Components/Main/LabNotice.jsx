// Components/Main/LabNotice.jsx
import styled from "@emotion/styled";
import { FaUserPlus, FaFolderOpen, FaFileAlt } from "react-icons/fa";

// ✅ 아이콘 자체를 반응형으로 스타일링
const StyledUserIcon = styled(FaUserPlus)`
  width: 2rem;
  height: 2rem;

  @media (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 320px) {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const StyledFolderIcon = styled(FaFolderOpen)`
  width: 2rem;
  height: 2rem;

  @media (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 320px) {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const StyledFileIcon = styled(FaFileAlt)`
  width: 2rem;
  height: 2rem;

  @media (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 320px) {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

// ✅ 날짜 아래 메시지 줄바꿈용
const MessageSpan = styled.span`
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 0.85rem;
    line-height: 1.3rem;
    margin-top: 0.15rem;
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 0.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 1rem;
    margin-top: 0.1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.55rem;
    line-height: 0.9rem;
    margin-top: 0.05rem;
  }
`;

const notices = [
  { type: "member", date: "2024-05-10", message: "새로운 멤버 OOO이 추가되었습니다." },
  { type: "project", date: "2024-05-08", message: "Project Title is here이 Activities에 추가되었습니다." },
  { type: "achievement", date: "2024-05-01", message: "Lab Achievement Title is here이 Activities에 추가되었습니다." },
  { type: "member", date: "2024-04-30", message: "새로운 멤버 OOO이 추가되었습니다." },
  { type: "achievement", date: "2024-04-28", message: "Lab Achievement Title is here이 Activities에 추가되었습니다." },
];

// ✅ 아이콘 매핑에 styled icon 사용
const iconMap = {
  member: <StyledUserIcon />,
  project: <StyledFolderIcon />,
  achievement: <StyledFileIcon />,
};

export default function LabNotice() {
  return (
    <Wrapper>
      <Title>Lab Notice</Title>
      <List>
        {notices.map((item, index) => (
          <NoticeItem key={index}>
            <IconWrapper>{iconMap[item.type]}</IconWrapper>
            <Divider />
            <NoticeText>
              <Date>{item.date}</Date>
              <MessageSpan>{item.message}</MessageSpan>
            </NoticeText>
          </NoticeItem>
        ))}
      </List>
    </Wrapper>
  );
}

// =================== 스타일 ===================

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #f5f5f5;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 90%;

  @media (max-width: 1024px) {
    gap: 1.4rem;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 320px) {
    gap: 0.8rem;
  }
`;

const NoticeItem = styled.li`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    padding: 0.6rem;
    margin-right: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem;
    margin-right: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    margin-right: 0.6rem;
  }

  @media (max-width: 320px) {
    padding: 0.25rem;
    margin-right: 0.4rem;
  }
`;

const Divider = styled.div`
  flex-grow: 1;
  height: 0.5px;
  background-color: #f5f5f5;
  margin: 0 0.5rem;

  @media (max-width: 1024px) {
    margin: 0 0.4rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    margin: 0 0.3rem;
  }

  @media (max-width: 320px) {
    margin: 0 0.2rem;
  }
`;

const NoticeText = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  color: #f5f5f5;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.4rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    line-height: 1rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 320px) {
    font-size: 0.55rem;
    line-height: 0.9rem;
    margin-bottom: 0.2rem;
  }
`;

const Date = styled.span`
  margin-right: 0.5rem;
  font-weight: 400;
  color: #ccc;
`;
