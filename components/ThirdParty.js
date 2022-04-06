import styled from '@emotion/styled';
import AppleImg from '../svgs/apple_icon.svg';
import FacebookImg from '../svgs/facebook_icon.svg';
import GoogleImg from '../svgs/google_icon.svg';

const ThirdPartyStyle = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
`;

const Social = styled.button`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  border: none;
  padding: 0;

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const AppleIcon = styled(AppleImg)`
  width: 100%;
  height: 100%;
`;
const FacebookIcon = styled(FacebookImg)`
  width: 100%;
  height: 100%;
`;
const GoogleIcon = styled(GoogleImg)`
  width: 90%;
  height: 90%;
`;

function ThirdParty() {
  return (
    <ThirdPartyStyle>
      <Social>
        <AppleIcon />
      </Social>
      <Social>
        <FacebookIcon />
      </Social>
      <Social>
        <GoogleIcon />
      </Social>
    </ThirdPartyStyle>
  );
}

export default ThirdParty;
