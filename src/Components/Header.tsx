import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: grey;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  padding: 10px 20px;
`;

const Title = styled.h1`
  display: flex;
`;
const Button = styled.button`
  background-color: cyan;
  padding: 20px;
  border-radius: 10px;
  height: 50px;

  &:hover {
    background-color: white;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;
