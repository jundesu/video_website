import styled from "@emotion/styled";

const VideoHeader = styled.header`
  width: 100%;
  height: 80px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #4a4e69; 
`;

const Logo = styled.a`
  height: 50px;
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  outline: none;
  border: none;
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
`;

const LayoutBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border: none;
`;

const AvatarIcon = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
`; 

const Masthead = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <VideoHeader>
        <Logo href="#">LOGO</Logo>

        <Masthead>
          <label for="search"></label>
          <SearchInput type="search" id="search" placeholder="Type to search" name="search"></SearchInput>
          <SearchBtn type="button">S</SearchBtn>
        </Masthead>
       
        <Masthead>
          <LayoutBtn>G</LayoutBtn>
          <LayoutBtn>T</LayoutBtn>
          <AvatarIcon/>
        </Masthead>

    </VideoHeader>
  );
}

export default Header;

