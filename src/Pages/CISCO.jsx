import React from "react";
import styled from 'styled-components';
import { SettingOutlined, DollarOutlined, ArrowRightOutlined, DribbbleOutlined, UserOutlined } from "@ant-design/icons";

const Container = styled.div`
  // height: 100vh;
  background-color: purple;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 30px;
  // border-radius: 5px;
  @media (max-width: 1024px) {
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }

  #text1{
    margin-left: 10px;
    color: black;
  }

  #Asia{
    margin-right: 10px;
    width: 25%;
    padding-right: 5px;
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  #Education, #Number {
    width: 100%;
    // border: black;
    // width: 88%;
    // height: 30px;
    // padding-left: 10px;
    color: black;
  }

  #continue{
    background-color: indigo;
    color: white;
    padding: 10px 20px;
    margin-left: 75%;
    @media (max-width: 1024px) {
      margin-left: 60%;
    }
    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;
    }
  }

  #titlenumfilled, #titlenum {
    margin: 0px 5px 0px 0px;
    border-radius: 50%;
    padding: 5px;
    width: 30px;
  }

  #titlenumfilled {
    color: white;
    background-color: midnightblue;
  }

  #titlenum {
    color: gray;
    border: 1px solid gray;
    background-color: white;
  }

  #lightbutton{
    background-color: #d2c9d3;
  }

  img{
    width: 80px;
    margin: -40px 0px 0px 40px;
    @media (max-width: 768px) {
      width: 60px;
      margin: 0;
    }
  }

  select{
    font-size: 0.8rem;
    border: 1px solid gray;
    margin: 5px;
    padding: 7px;
    padding-right: 20px;
    border-radius: 5px;
`;


const SubContainer = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius:10px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  font-size: 0.7rem;
  padding-top: 30px;
  margin-left: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const Text = styled.h2`
  margin-left: 130px;
  color: gray;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Section = styled.div`
  margin: 20px;
  margin-bottom: 0px;
  width: 85%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Subtext = styled.h2`
  font-size: 1rem;
  margin-left: 30px;
  margin-bottom: -10px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Div = styled.div`
  display: flex;
  margin: 30px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

const Div1 = styled.div`
  margin-right: 30px;
  width: 40%;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const Div2 = styled.div`
  margin-right: 30px;
  width: 35%;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const Div4 = styled.div`
  margin: 30px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Div5 = styled.div`
  margin: 30px;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Div6 = styled.div`
  margin: 30px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  margin: 5px 15px 5px 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #DAB1DA;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  font-size: 2rem;
  // width: 100px;
  margin-top: 120px;
  // margin-left: 10px;
  color: dimgray;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    width: 100%;
  }
`;

const SubHeading = styled.div`
  font-size: 1rem;
  width: 250px;
  margin-top: 10px;
  // margin-left: 10px;
  color: gray;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const P = styled.p``;
// const Pre = styled.p``;
const LeftDIv = styled.div`
  // background-color: yellow;
`;
const RightDiv = styled.div`
  // background-color: red;
  margin-right: 0px;
`;
const Div7 = styled.div``;


const Cisco = () => {
  return (
    <>
      <Container>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtra-JQAy-z_pXV-T4FttKSVm0PxbhLe1XxQ&s" alt="Logo" />
        <SubContainer>
          <LeftDIv>
            <Details>
              <Text id="text1"><Button id="titlenumfilled">1</Button> Organization Details</Text>
              <Text><Button id="titlenum">2</Button> Solution Profile</Text>
              <Text><Button id="titlenum">3</Button> Review Details</Text>
              <Text><Button id="titlenum">4</Button> ROI Results</Text>
            </Details>
            <Section>
              <Subtext> Please enter the following information</Subtext>
              <Div>
                <Div1>
                  <P>Closet match to your industry</P>
                        <select name="" id="Education" >
                            <option value="">Education</option>
                            <option value="">empty</option>
                            <option value="">other</option>
                        </select>
                </Div1>
                <Div2>
                  <P>Total number of employee</P>
                <select name="" id="Number">
                            <option value="">Number</option>
                            <option value="">empty</option>
                            <option value="">other</option>
                        </select>                 
                </Div2>
              </Div>

              <Div4>
                <P>Primary location where the solution will be used</P>
                <Div7>
                  <select name="" id="Asia">
                            <option value="">Asia</option>
                            <option value="">empty</option>
                            <option value="">other</option>
                        </select> 
                  <select name="" id="USD">
                            <option value="">USD</option>
                            <option value="">empty</option>
                            <option value="">other</option>
                        </select>
                </Div7>
              </Div4>

              <Div5>
                <P>Select your functional area</P>
                <Button id="lightbutton">Information Technology(IT)</Button>
                <Button><SettingOutlined /> Operations</Button>
                <Button>HR</Button>
                <Button><DribbbleOutlined /> Call/Contact Center</Button>
                <Button id="lightbutton"><DollarOutlined /> Finance/Procurement</Button>
                <Button id="lightbutton"><UserOutlined /> Executive Leadership/Mgmt</Button>
                <Button id="lightbutton">...Other</Button>
              </Div5>

              <Div6>
                <P>What solution(s) would you like to include in your analysis?</P>
                <Button>Communication & Collaborative</Button>
                <Button id="lightbutton"><DribbbleOutlined /> Contact Center</Button>
              </Div6>
            </Section>
            <Button id="continue">Continue  <ArrowRightOutlined /></Button>

          </LeftDIv>

          <RightDiv>
            <Heading>About Organization</Heading>
            <SubHeading>Enter the Basic Details about the Organization to proceed further</SubHeading>
          </RightDiv>
        </SubContainer>
      </Container>
    </>
  );
}

export default Cisco;
