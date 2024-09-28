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
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #fff;
  padding: 50px;
`;

const WelcomeText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

//   &:focus {
//     border-color: #f76b1c;
//     outline: none;
//   }
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

const Button = styled.button`
  padding: 12px;
  background: linear-gradient(135deg, #f76b1c, #f5a623);
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #f5a623, #f76b1c);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
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
