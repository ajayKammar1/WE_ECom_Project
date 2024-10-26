import { CalculatorOutlined, CheckCircleOutlined, DoubleLeftOutlined, DownOutlined, FieldTimeOutlined, FormOutlined, LeftOutlined, QuestionOutlined, RightOutlined, SunOutlined, UndoOutlined } from "@ant-design/icons";
import React from "react";

const ExamToolbar = () => {
    return(
        <>
            <div className=" border-2 border-blue-900 h-full m-2 flex sm:h-screen">
                <div className="w-3/12 hidden bg-gray-200 h-full p-2 text-md space-y-2 sm:block">
                
                    <div className="flex justify-between font-bold ">
                        <text>Exam Toolbar</text>
                        <span><DoubleLeftOutlined/></span>
                    </div>
                    <div className="flex justify-between m-2 ">
                        <text><FormOutlined/> Exam Question Details</text>
                        <span><DownOutlined/></span>
                    </div>
                    <div className="flex justify-between m-2 border-b-2 border-gray-400 pb-4">
                        <text><CheckCircleOutlined/> Exam Progress</text>
                        <span><DownOutlined/></span>
                    </div>
                    <div className="flex justify-between m-2">
                        <text> Microsoft Learn</text>
                    </div>
                    <div className="flex justify-between m-2">
                        <text><FieldTimeOutlined/> Take a Break</text>
                    </div>
                    <div className="flex justify-between m-2">
                        <text><CalculatorOutlined/> Calculator</text>
                    </div>
                    <div className="flex justify-between m-2">
                        <text><SunOutlined/> color scheme</text>
                        <span><DownOutlined/></span>
                    </div>
                    <div className="flex justify-between m-2">
                        <text><QuestionOutlined/> Help</text>
                    </div>
                  
                </div>
                
                <div className="  p-2 sm:w-10/12">
                    <div className="flex flex-wrap flex-col   p-2 sm:flex sm:flex-row sm:justify-between">
                        <div >
                            <h1 className="font-bold">Question 1</h1>
                        </div>
                        <div className="flex flex-wrap text-xs justify-between ">
                            <div>
                                <p>Exam Question Progress (1/53)</p>
                                <input type="range" name="" id="" className="w-44"/>
                            </div>
                            <div>
                                <p>Lab (0/4)</p>
                                <input type="range" name="" id="" className="w-24"/>
                            </div>
                        </div>
                        <div className="text-center text-sm">
                            <p>TIME REMAINING </p>
                            <p className="text-blue-500 font-bold">02:38:51</p>
                        </div>
                    </div>

                    <div className="border m-2 p-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, praesentium. Quisquam, corrupti nostrum maxime, dolorem rerum ipsa delectus reprehenderit a nulla repudiandae est facere odio facilis soluta laudantium obcaecati quos?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, libero.
                        </p>
                        <div className="space-y-2">
                            <p><input type="radio" name="" id="" /> A. Red</p>
                            <p><input type="radio" name="" id="" /> B. Blue</p>
                            <p><input type="radio" name="" id="" /> C. Green</p>
                            <p><input type="radio" name="" id="" /> D. Cat</p>
                            
                            <button type="button" className="bg-gray-600 text-white p-1 rounded-2xl text-sm hover:bg-slate-700 hover:text-red-400"> <UndoOutlined/> Reset Answer</button>

                            <div className="flex flex-wrap justify-between w-1/3 ">
                               <p><input type="checkbox" name="" id="" /> Review Later</p>
                               <p><input type="checkbox" name="" id="" /> Leave Feedback</p>
                            </div>
                        </div>
                    </div>


                    <div className=" flex flex-wrap justify-around ">
                        <button className="bg-cyan-800 text-white p-1 m-1 w-36 flex justify-around hover:bg-red-900" type="button "><LeftOutlined className="text-xs pt-1"/> Previous </button>
                        <button className="bg-cyan-800 text-white p-1 m-1 w-36 flex justify-around hover:bg-green-800" type="button "> Next <RightOutlined className="text-xs pt-1"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExamToolbar;