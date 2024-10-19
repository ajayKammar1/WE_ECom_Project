import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: linear-gradient(135deg, #f5a623, #f76b1c);
  color: white;
  padding: 50px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #fff;
  padding: 50px;
  @media (max-width: 600px) {
    width:100%;
    padding: 20px;
  }
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 100%;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 7px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #f76b1c;
    outline: none;
  }
`;

const Label = styled.label`
  margin-bottom: 7px;
  font-size: 0.8rem;
  color: #333;
`;

const Button = styled.button`
  padding: 0.6rem;
  background: linear-gradient(135deg, #f76b1c, #f5a623);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #f5a623, #f76b1c);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const RegisterForm = () => {
  return (
    <Container>
      <LeftSection>
        <WelcomeText>Welcome!</WelcomeText>
        <Subtitle>To keep connected with us, please register your personal info below.</Subtitle>
      </LeftSection>

      <RightSection>
        <Form>
          <Title>Register</Title>

          <Label htmlFor="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" />

          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Enter your last name" />

          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" />

          <Button type="submit">Register</Button>
        </Form>
      </RightSection>
    </Container>
  );
};

export default RegisterForm;
