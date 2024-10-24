import { FacebookFilled, FacebookOutlined, FieldTimeOutlined, InstagramFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";

const CourseDetails = () => {
    return (
        <>
            <div className=" m-2 p-5 bg-gray-300">
                <h2 className="font-bold m-3">COURSE DETAILS</h2>
                <div className="flex justify-between bg-slate-50 p-5 rounded-xl">
                    <div className="w-[45%]">
                        <img className="rounded-lg border shadow-xl" src="https://static.wixstatic.com/media/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg/v1/fill/w_820,h_460,al_c,q_85,enc_auto/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg" alt="" />
                    </div>
                    <div className="w-[45%]">
                        <div className="w-[100%] flex justify-between text-fuchsia-800 my-2">
                            <input type="range" name="" id="" className="w-[75%] bg-purple-800" />
                            <p>%60 Watched</p>
                        </div>
                        <p className="text-stone-500">GETTING STARTED WITH B2DETA</p>
                        <h1 className="font-bold text-[1.3rem] w-full">HEADLINE FOR THE COURSE</h1>
                        <p className="text-stone-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, velit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-between w-[35%] my-4">
                            <p><FieldTimeOutlined className="bg-purple-800 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text className="font-bold">13H</text></p>
                            <p><StarOutlined className="bg-purple-800 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text className="font-bold">4.5</text></p>
                        </div>
                        <button type="button" className="bg-purple-800 w-[100%] p-2 text-[1.2rem] text-gray-50 font-bold rounded-xl">START COURSE</button>
                    </div>

                </div>

                <h2 className="font-bold m-3 mt-6">COURSE OUTLINE</h2>

                <div className="flex justify-between">
                    <div className="w-[58%] bg-slate-50 rounded-2xl">
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                        <div className="flex justify-between  text-[1.2rem] p-4 border-b-2">
                            <h3>Lesson one name</h3>
                            <p><FieldTimeOutlined className="bg-gray-600 p-1 text-[1.2rem] text-zinc-50 rounded-md" /> <text>13H</text></p>
                        </div>
                    </div>

                    <div className="w-[40%] flex-col bg-slate-50 p-4 rounded-xl">
                        <h2 className="font-bold">INSTRUCTOR</h2>
                        <img className="mx-auto w-36 rounded-full border-4 border-gray-700" src="https://i.etsystatic.com/39152123/r/il/2f705e/5850191672/il_300x300.5850191672_dc1s.jpg" alt="" />
                        <h1 className="text-center m-2 font-bold text-[1.2rem]">Led Zepplin</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum aspernatur necessitatibus, esse animi distinctio?</p>
                        <div className="flex justify-center ">
                            <button className="text-[1.7rem] bg-purple-700 m-2 rounded-md text-white px-1 w-[8%]"><FacebookOutlined /></button>
                            <button className="text-[1.7rem] bg-purple-700 m-2 rounded-md text-white px-1 w-[8%]"><InstagramOutlined /></button>
                            <button className="text-[1.7rem] bg-purple-700 m-2 rounded-md text-white px-1 w-[8%]"><LinkedinOutlined /></button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold m-3 mt-6">ABOUT COURSES</h2>

                    <div className="bg-slate-50 p-5 rounded-xl">
                        <h1 className="font-bold m-1 ">COURSE NAME</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iure, omnis quisquam a ab corporis assumenda cumque? Obcaecati soluta quaerat, distinctio animi deleniti architecto odio non, provident amet vel voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, in doloribus. Repellendus repudiandae cum commodi labore eos, similique alias autem eius veritatis fugit. Harum excepturi quam dignissimos sunt ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima quae sequi iste. Doloremque molestias, dolore eius dolorum numquam ullam excepturi aspernatur dicta, tenetur dolores impedit labore voluptates animi voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque porro iusto nemo deleniti a sit ipsam repellendus impedit ducimus. Blanditiis, maxime excepturi dignissimos, inventore nostrum repudiandae error optio beatae itaque necessitatibus cumque.</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CourseDetails;