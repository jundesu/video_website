import styled from "@emotion/styled";
import SignOutImg from "../svgs/signOut_icon.svg";
import DarkImg from "../svgs/darkMode_icon.svg";
import AvatarImg from "../svgs/avatar_icon.svg";

import { ThemeContext } from "../theme/palette";
import { useContext } from "react";

const PopupContainer = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid ${({borderColor}) => borderColor};
  background-color: ${({backgroundColor}) => backgroundColor} ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 20px;
  position: absolute;
  top: 70px;
  right: 0px;
`;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 40px 40px; ;

`;

const AvatarIcon = styled(AvatarImg)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fca311;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: span 2;
`;

const Name = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;

  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 600;
  color: ${({color}) => color};

`;
const Account = styled.div`
grid-column-start: 2;
grid-column-end: 3;

  color: #adb5bd;
  font-size: 1.5rem;

`;
const ManagementLink = styled.a`
  width: 100%;
  height: 10%;
  text-decoration: none;
  color: #0a9396;
  font-size: 2rem;
`;

const DarkModeLabel = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

`;
const DarkModeIcon = styled(DarkImg)`
  width: 25px;
  height: 25px;
  stroke: ${(stroke) => stroke};
`;

const Text = styled.span`
  font-size: 2rem;
  font-weight: 300;
  margin-left: 10px;
  color: ${({color}) => color};
`;

const Slider = styled.span`
  display: inline-block;
  width: 45px;
  height: 20px;
  border-radius: 20px;
  margin-left: 10px;
  position: relative;
  transition: 1s;
  background-color: ${({checked}) => checked ? '#fca311' : '#dee2e6'};

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6c757d;
    position: absolute;
    top: 0%;
    left: 0%;
    transition: 1s;
    transform: ${({checked}) => checked ? 'translate(25px, 0)' : 'translate(0, 0)'};
  }

`;


const SignOut = styled.a`
  width: 100%;
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: 300;
  display: flex;
  align-items: center;

  & > span {
    margin-left: 10px;
  }
`;

const SignOutIcon = styled(SignOutImg)`
  width: 25px;
  height: 25px;
  stroke: ${(stroke) => stroke};
`;

function PopUpProfile({userEmail, profile}){

  const {isDark, theme, toggleTheme} = useContext(ThemeContext);

  return (
    <PopupContainer backgroundColor={theme.popupContainerBackgroundColor} borderColor={theme.popupContainerBorderColor}>
      <Profile>
        <AvatarIcon />
        <Name color={theme.nameColor}>{profile.name}</Name>
        <Account>{userEmail}</Account>
      </Profile>

      <ManagementLink href="#">Manage your account</ManagementLink>

      <DarkModeLabel htmlFor="dark-mode">
          <DarkModeIcon stroke={theme.darkModeIconColor}/>
          <Text color={theme.textColor}>Dark mode</Text>
          <Slider checked={isDark}></Slider>
          <input type="checkbox" id="dark-mode" onClick={toggleTheme} />
      </DarkModeLabel>

      <SignOut href="/Login">
        <SignOutIcon stroke={theme.signOutIconColor}/>
        <Text color={theme.textColor}>Sign out</Text>
      </SignOut>

    </PopupContainer>
  );

}

export default PopUpProfile;


// & > input:checked + .slider {
//   background-color: #fca311;
// }

// & > input:checked + .slider:before {
//   transform: translate(25px, 0);
// }