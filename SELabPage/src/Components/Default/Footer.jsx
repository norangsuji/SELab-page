import styled from "@emotion/styled";
import { FiMapPin, FiPhone, FiMail, FiPrinter } from "react-icons/fi";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>ISELab</LogoSection>
        <Section>
          <InfoBlock>
            <BlockTitle>Lab Contacts</BlockTitle>
            <InfoLine>
              <FiMapPin />
              서울특별시 동대문구 서울시립대로 163 정보기술관 3층 325호
            </InfoLine>
            <InfoLine>
              <FiPhone />
              +82-2-6490-5733
            </InfoLine>
          </InfoBlock>

          <InfoBlock>
            <BlockTitle>Professor</BlockTitle>
            <InfoLine>
              <FiPhone />
              Phone: +82-2-6490-2451
            </InfoLine>
            <InfoLine>
              <FiPrinter />
              Fax: +82-2-6490-2444
            </InfoLine>
            <InfoLine>
              <FiMail />
              Email: bjlee@uos.ac.kr
            </InfoLine>
          </InfoBlock>
        </Section>
      </FooterContent>
      <Copyright>© {new Date().getFullYear()} ISELab. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #1e1e1e;
  color: #ccc;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 2rem 7rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 3.5rem;
  }
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 320px) {
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    gap: 1.1rem;
  }
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const LogoSection = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  color: #ccc;
`;

const BlockTitle = styled.div`
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  line-height: 1.4;

  svg {
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Copyright = styled.div`
  font-size: 0.85rem;
  color: #888;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
