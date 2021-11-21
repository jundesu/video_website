import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = styled.main`
  display: flex;
  width: 100%;
  height:100%;
  background: linear-gradient(to bottom,#928DAB, #1F1C2C);

  p {
    width: 50%;
    margin: auto;
    color: white;
    font-size: 4rem;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  background-color: #ffffff;
  padding: 100px 100px;
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
  border: 2px solid;
  border-color: transparent transparent #928DAB transparent;

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
`;
const SignUpText = styled.span`
  color: #534f66; 
  font-size: 1.5rem;
`;


const ThirdParty = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Social = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fca311;
  border-radius: 50%;
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
          <Social/>
          <Social/>
          <Social/>          
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