import styled from "@emotion/styled";
import SignOutImg from "../svgs/signOut_icon.svg";
import DarkImg from "../svgs/darkMode_icon.svg";
import AvatarImg from "../svgs/avatar_icon.svg";


const PopupContainer = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid #dee2e6;
  background-color: #ffffff;
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

`;
const Account = styled.div`
grid-column-start: 2;
grid-column-end: 3;

  color: #b7b7a4;
  font-size: 1.5rem;

`;
const ManagementLink = styled.a`
  width: 100%;
  height: 10%;
  text-decoration: none;
  color: #0a9396;
  font-size: 2rem;
`;

const DarkModeIcon = styled(DarkImg)`

`;

const DarkMode = styled.label`
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    cursor: pointer;

  & > span {
    margin-left: 10px;
  }

  & > input {
    opacity: 0;
  }

  .slider {
    display: inline-block;
    width: 45px;
    height: 20px;
    background-color: #dee2e6;
    border-radius: 20px;
    position: relative;
    transition: 1s;

  }

  .slider:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6c757d;
    position: absolute;
    top: 0%;
    left: 0%;
    transition: 1s;

  }

  & > input:checked + .slider {
    background-color: #fca311;
  }

  & > input:checked + .slider:before {
    transform: translate(25px, 0);
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

const SignOuticon = styled(SignOutImg)`

`;

function PopUpProfile({userEmail, profile}){

  return (
    <PopupContainer>
      <Profile>
        <AvatarIcon />
        <Name>{profile.name}</Name>
        <Account>{userEmail}</Account>
      </Profile>

      <ManagementLink href="#">Manage your account</ManagementLink>

      <DarkMode for="dark-mode">
          <DarkModeIcon/>
          <span>Dark mode</span>
          <input type="checkbox" id="dark-mode"/>
          <span className="slider"></span>
      </DarkMode>

      <SignOut href="/Login">
        <SignOuticon/>
        <span>Sign out</span>
      </SignOut>

    </PopupContainer>
  );

}

export default PopUpProfile;