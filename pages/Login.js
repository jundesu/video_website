import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AppleImg from "../svgs/apple_icon.svg";
import FacebookImg from "../svgs/facebook_icon.svg";
import GoogleImg from "../svgs/google_icon.svg";


const LoginPage = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,#928DAB, #1F1C2C);

  p {
    width: 50%;
    margin: auto;
    padding: 30px;
    color: white;
    font-size: 4rem;
    text-align: center;
    font-weight: 100;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    p {
      width: 100%;
    }
  }

  @media(max-width: 500px) {
    flex-direction: column;
    p {
      font-size: 2rem;
    }
  }

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  padding: 100px 100px;

  @media(max-width: 1200px) {
    padding: 50px 50px;
  }

  @media(max-width: 800px) {
    width: 100%;
  }

  @media(max-width: 500px) {
    padding: 25px 25px;
  }
`;

const Label = styled.label`
  width: 100%;
  color: #4b4e6e; 
  position: relative;
  font-size: 2rem;

  &::after {
    content: '';
    width: 0%;
    height: 2px;
    background: #fca311;
    position: absolute;
    bottom: 0px;
    left: 0px;
    transition: all 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Input = styled.input`
  display: block;
  width: 100% ;
  margin: 0;
  line-height: 5rem;
  outline: none;
  border-bottom: 2px solid;
  border-color: transparent transparent #928DAB transparent;
  border-radius: 0;
  font-size: 2rem;

  &::placeholder {
    color: #adadad;
    font-weight: 300;
  }
`;

const ForgotPassword = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #adadad;
  margin-left: auto;

  &:hover {
    color: #fca311;
  }
`;

const Submit = styled.button`
  width: 100%;
  color: #ffffff;
  cursor: pointer;
  font-size: 3rem;
  line-height: 6rem;
  padding: 0;
  margin: 30px 0;
  border: none;
  border-radius: 50px;
  background-image: linear-gradient(to right, #928DAB, #1F1C2C, #928DAB);
  background-size: 200%;
  background-position: right;
  transition-property: background-position;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;

  &:hover {
    background-position: left;
  }

  @media(max-width: 500px) {
    font-size: 2rem;
    line-height: 4rem;
    margin: 10px 0;
  }

`;
const SignUpText = styled.span`
  color: #534f66; 
  font-size: 1.8rem;
`;


const ThirdParty = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media(max-width: 1200px) {
    width: 70%;
  }
  @media(max-width: 800px) {
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

  @media(max-width: 500px) {
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

const SignUpLink = styled.a`
  text-decoration: none;
  color: #adadad;
  margin-left: 10px;

  &:hover {
    color: #fca311;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleChange = (e)=> {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push({
      pathname:'/Home',
      query: { email: email },
    },
    '/home')
  };



  return (
    <LoginPage>
      <p>Log in to your account</p>
      <Form>
        <Label>
          E-mail
          <Input type="email" placeholder="enter your e-mail" value={email} onChange={handleChange} required/>
        </Label>
        
        <Label>
          Password
          <Input type="password" placeholder="enter your password" required/>
        </Label>

        <ForgotPassword href="#">Forgot password ?</ForgotPassword>

        <Submit onClick={handleClick}>Log in</Submit>

        <SignUpText>or sign up using</SignUpText>

        <ThirdParty>
          <Social>
              <AppleIcon/>
          </Social>
          <Social>
            <FacebookIcon/>
          </Social>
          <Social>
            <GoogleIcon/>
          </Social>
        </ThirdParty>

        <SignUpText>
          Don't have an account ?
          <SignUpLink href="#">Sign up</SignUpLink>
        </SignUpText>

      </Form>
    </LoginPage>
  );

}

export default Login;