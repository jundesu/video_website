import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ThirdParty from '../components/ThirdParty';

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
      padding: 20px;
      font-size: 3rem;
    }
  }

  @media(max-width: 500px) {
    flex-direction: column;
    p {
      font-size: 2rem;
    }
  }

`;

const FormStyle = styled.form`
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
    padding: 20px 150px;
  }

  @media(max-width: 500px) {
    padding: 25px 25px;
  }
`;

const InputStyled = styled.div`
 width: 100%;
 position: relative;

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

const Label = styled.label`
  width: 100%;
  color: #4b4e6e; 
  font-size: 2rem;
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

const SignUpLink = styled.a`
  text-decoration: none;
  color: #adadad;
  margin-left: 10px;

  &:hover {
    color: #fca311;
  }
`;

function InputField({id, label, placeholder, value, onChange, required}) {
  return (
      <InputStyled>
        <Label htmlFor={id}>{label}</Label>
          <Input
            value={value}
            type={id}
            id={id}
            name={id}
            placeholder={placeholder}
            onChange={onChange} 
            required={required}
          /> 
      </InputStyled>
    );
}

function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const inputFields =[
    {
      label: "E-mail", 
      id: "email",
      placeholder: "enter your e-mail",
      value: email, 
      handleInputChange: e => setEmail(e.target.value),
      required: true,
    },
    {
      label:"Password", 
      id:"password", 
      placeholder: "enter your password",  
      handleInputChange: () => {},
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push({
      pathname:'/home',
      query: { email: email },
    },
    '/home')
  };

  return (
    <LoginPage>
      <p>Log in to your account</p>
      
      <FormStyle onSubmit={handleSubmit}>
        {
          inputFields.map((input, index) => {
            return (
              <InputField
                key={index} 
                value={input.value} 
                label={input.label}
                id={input.id}
                placeholder={input.placeholder} 
                onChange={input.handleInputChange}
                required={input.required}
              />
            )
          })
        }
        
        <ForgotPassword href="#">Forgot password ?</ForgotPassword>
        <Submit>Log in</Submit>
        <SignUpText>or sign up using</SignUpText>
        <ThirdParty/>
        <SignUpText>
          Don't have an account ?
          <SignUpLink href="#">Sign up</SignUpLink>
        </SignUpText>
      </FormStyle>
        
    </LoginPage>
  );

}

export default Login;
