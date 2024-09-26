import React from "react";
import styled from 'styled-components';
import { SettingOutlined, DollarOutlined, CaretDownOutlined, ArrowRightOutlined, DribbbleOutlined, UserOutlined } from "@ant-design/icons";


const Container = styled.div`
  // display: flex;
  height: 700px;
  background-color: purple;
  padding: 30px;
  padding-top: 70px;
  padding-bottom: 50px;
  border-radius: 10px;
  // margin: 50px;

  #text1{
    margin-left: 15px;
    color: black;
  }

  input{
    border: white;
    width: 88%;
    height: 30px;
    padding-left: 10px;
    color: black;
  }

  #Asia{
    margin-right: 20px;
    width: 230px;
    padding-right: 7px;

  }

  #Education{
    // margin-right: 20px;
    width: 320px;
  }

  #Number{
    // margin-right: 20px;
    width: 320px;
  }
  
  #USD{
    width: 100px;
    padding-right: 7px;
  }

  #continue{
    background-color: indigo;
    color: white;
    padding: 10px 20px 10px 20px;
    margin-left: 85%;
    margin-top: -5px;
  }

  #titlenumfilled{
    margin: 0px 5px 0px 0px;
    color:white;
    background-color: midnightblue;
    border-radius: 150px;
    padding: 5px;
    width: 30px;
  }

  #titlenum{
    margin: 0px 5px 0px 0px;
    color:gray;
    border: 1px solid gray;
    background-color: white;
    border-radius: 150px;
    padding: 5px;
    width: 30px;
  }

  #lightbutton{
    background-color: #d2c9d3;
  }

  img{
    width: 80px;
    margin: -40px 0px 0px 40px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius:10px;
`;

const Details = styled.div`
  display: flex;
  // justify-content: space-evenly;
  font-size: 0.7rem;
  padding-top: 30px;
  margin-left: 50px;
  margin-top: -5px;
  margin-bottom: -5px;
`;
const Text = styled.h2`
  margin-left: 130px;
  color: gray;
`;
const Section = styled.div`
  height: 490px;
  // background-color: gray;
  margin: 20px 20px 20px 40px;
  width: 1000px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const Subtext = styled.h2`
  font-size: 1rem;
  margin-left: 30px;
  margin-bottom: -10px;
`;

const Div = styled.div`
  // background-color:red;
  display: flex;
  // justify-content: space-between;
  margin: 30px 30px -10px 30px;
  // margin-bottom: -10px;
`;
const Div1 = styled.div`
  margin-right: 30px;
`;
const Div2 = styled.div`

`;
const Div4 = styled.div`
//  display: flex; 
  margin: 30px;
  margin-bottom: -10px;
`;

const Div5 = styled.div`
  margin: 30px;
  // background-color: red;
  width: 70%;
`;
const Div6 = styled.div`
  margin: 30px;

`;
const P = styled.p`
  color: gray
`;
const Button = styled.button`
  font-size: 1rem;
  margin: 5px 15px 5px 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  // color: Purple;
  background-color: #DAB1DA;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Icon = styled.h1`
  font-size: 1rem;
`;

const Pre = styled.div`
    display: flex;
    // background-color: blue;
    // width: 230px;
    height: 35px;
    border: 1px solid alicblue;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

`;

const Div7 = styled.div`
 display: flex;
`;

const LeftDIv = styled.div`
  background-color: white;
  height: 100%;
  border-radius:10px;
`;

const RightDiv = styled.div`
  // align-content: center;
  // text-align: center;
`;

const Heading = styled.div`
  font-size: 2rem;
  width: 100px;
  margin-top: 120px;
  margin-left: 30px;
  color: dimgray;
  // background-color: blue;
`;

const SubHeading = styled.div`
  font-size: 1rem;
  width: 250px;
  margin-top: 10px;
  margin-left: 30px;
  color: gray;
  // background-color: blue;
`;

const App = () => {
  return (
    <>
      <Container>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DhayAmIlm3IRHJkDwwhBIyeleBD6B3MD_g&s" alt="Logo" />
        <SubContainer>
          <LeftDIv>

            <Details>
              <Text id="text1"><Button id="titlenumfilled">1</Button> Organization Details</Text>
              <Text><Button id="titlenum">2</Button> Solution Profile</Text>
              <Text><Button id="titlenum">3</Button> Review Details</Text>
              <Text><Button id="titlenum">4</Button> ROI Results</Text>
            </Details>
            <Section>
              <Subtext> Please enter following information</Subtext>

              <Div>
                <Div1>
                  <P>Closet match to your industry</P>
                  <Pre id="Education">
                    <input placeholder="Education" />
                    <Icon><CaretDownOutlined /></Icon>
                  </Pre>
                </Div1>
                <Div2>
                  <P>Total number of employees</P>
                  <Pre id="Number">
                    <input placeholder="10-49" />
                    <Icon><CaretDownOutlined /></Icon>
                  </Pre>
                </Div2>
              </Div>

              <Div4>
                <P> Primary location where the solution will be used</P>
                <Div7>
                  <Pre id="Asia">
                    <input placeholder="Asia" />
                    <Icon><CaretDownOutlined /></Icon>
                  </Pre>
                  <Pre id="USD">
                    <input placeholder="USD" />
                    <Icon><CaretDownOutlined /></Icon>
                  </Pre>
                </Div7>

              </Div4>

              <Div5>
                <P> Select your functional area</P>
                <Button id="lightbutton">Information Technology(IT)</Button>
                <Button><SettingOutlined /> Operations</Button>
                <Button>HR</Button>
                <Button><DribbbleOutlined /> Call/Contact Center</Button>
                <Button id="lightbutton"><DollarOutlined /> Finance/Procurement</Button>
                <Button id="lightbutton"><UserOutlined /> Executive Leadership/Mgmt</Button>
                <Button id="lightbutton">...Other</Button>
              </Div5>

              <Div6>
                <P> What solution(s) would you like to include in your analysis?</P>
                <Button>Communication & Collaborative</Button>
                <Button id="lightbutton"><DribbbleOutlined /> Contact Center</Button>
              </Div6>

              <Button id="continue">Continue  <ArrowRightOutlined /></Button>
            </Section>
          </LeftDIv>

          <RightDiv>
            <Heading> About Organization</Heading>
            <SubHeading> Enter the Basic Details about the Organization to proceed further</SubHeading>
          </RightDiv>

        </SubContainer>


      </Container>
    </>
  );
}

export default App;