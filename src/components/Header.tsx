import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderWrapper = styled.header`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #333;
`;

const BackButton = styled.span``;

const Header = () => {
  const navigate = useNavigate();
  const isRootPath = useMatch("/");

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <HeaderWrapper>
      {!isRootPath && (
        <BackButton onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
      )}
      <Title>Disney Characters</Title>
    </HeaderWrapper>
  );
};

export default Header;
