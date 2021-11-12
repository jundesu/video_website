import styled from "@emotion/styled";
import { AvatarIcon } from "./Header";

const Profile = styled.div`
  width: 300px;
  height: 400px;
  background: #495057;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  position: absolute;
  top: 60px;
  right: 0px;
`;

const Name = styled.div``;
const Account = styled.div``;
const ManagementLink = styled.a``;
const DarkMode = styled.div``;
const SignOut = styled.button``;

function PopUpProfile(){

  return (
    <Profile>
      <AvatarIcon/>
      <Name>hello world</Name>
      <Account>12345@6789.com.tw</Account>
      <ManagementLink href="#">manage your account</ManagementLink>
      <DarkMode>
        <label for="dark-mode"></label>
        <input type="checkbox" id="dark-mode"/>
      </DarkMode>
      <SignOut>sign out</SignOut>

    </Profile>
  );

}

export default PopUpProfile;