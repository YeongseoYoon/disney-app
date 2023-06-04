import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Disney Characters</Title>
    </HeaderWrapper>
  );
};

export default Header;
