import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: -1.5rem;
  width: max-content;
  background-color: #1e1e1e;
  box-shadow: 0 1vh 1.5vh rgba(0, 0, 0, 0.1);
  border-radius: 1vh;
  overflow: hidden;
  z-index: 10;

  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "0.8rem 0" : "0 0")};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.6rem 1.5rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: #1e1e1e;
  white-space: nowrap;

  &:hover {
    color: #41fb5a;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.5rem 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }
`;

const NavItemLink = styled(Link)`
  display: block;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f5f5f5;
  text-decoration: none;
  line-height: 2rem;

  &:hover {
    color: #41fb5a;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

const NavItemContainer = styled.div`
  position: relative;
`;

const NavItem = ({ label, to, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavItemContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <NavItemLink to={to}>{label}</NavItemLink>
      {subItems && (
        <Dropdown isOpen={isOpen}>
          {subItems.map((item, index) => (
            <DropdownItem key={index} to={item.to}>
              {item.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </NavItemContainer>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  background-color: #1e1e1e;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 15rem;

  @media (max-width: 1024px) {
    padding: 1.8rem 9rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 7rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 320px) {
    padding: 0.8rem 2rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #f5f5f5;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 1.8rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }

  @media (max-width: 320px) {
    gap: 0.8rem;
  }
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <NavbarContainer>
        <Logo to="/">ISELab</Logo>
        <NavMenu>
          <NavItem
            label="Research"
            to="/lab-achievements"
            subItems={[
              { label: "Lab Achievement", to: "/lab-achievements" },
              { label: "Projects", to: "/projects" },
            ]}
          />
          <NavItem
            label="Members"
            to="/professors"
            subItems={[
              { label: "Professor", to: "/professors" },
              { label: "Current Members", to: "/current-members" },
              { label: "Alumnis", to: "/alumnis" },
            ]}
          />
          <NavItem label="Gallery" to="/gallery" />
        </NavMenu>
      </NavbarContainer>
    </NavWrapper>
  );
}
