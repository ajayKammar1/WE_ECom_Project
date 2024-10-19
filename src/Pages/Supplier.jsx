import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, CaretDownOutlined, DashboardOutlined, SettingOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined, QuestionCircleOutlined, EditOutlined, LeftCircleTwoTone, BellOutlined } from "@ant-design/icons";

const Supplier = () => {



    return (
        <>
            <div className=" bg-white-400 h-full  m-4 rounded-3xl border-black border-2 shadow-lg">

                {/*below div for first header  */}
                <div className="bg-white-300 p-1 border-b-2 border-black flex flex-row ">
                    <p className="bg-red-500 w-3 h-3 m-3 ml-6  rounded-lg"></p>
                    <p className="bg-yellow-500 w-3 h-3 m-3 ml-0  rounded-lg"></p>
                    <p className="bg-green-500 w-3 h-3 m-3 ml-0  rounded-lg"></p>

                </div>


                {/* below div for second header */}
                <div className="bg-gray-200 items-center  border-black flex flex-row justify-between">

                    <div>
                        <button className="border-r-2 p-2  border-gray-300"><icon><LeftCircleTwoTone /></icon></button>
                        <text className="ml-4">Vendors</text>
                    </div>

                    <div>
                        <text className="mr-4 text-blue-700"><buttob>Subscription</buttob></text>
                        <text className="border-l-2 p-2  border-gray-300"><buttob><EditOutlined /> Edit this application</buttob></text>
                        <text className="border-l-2 p-2 w-12 border-gray-300"><buttob><QuestionCircleOutlined /> Help</buttob></text>
                    </div>

                </div>


                {/* below div for Third header */}
                <div className="bg-white-500 items-center   border-black flex flex-row justify-between">

                    <div className="bg-blue-600 w-[20%] text-white font-bold  p-3">
                        <text className="ml-4 items-center  pl-12">Vendors</text>
                    </div>

                    <div className="space-x-2 mr-2 items-center flex flex-row justify-around">
                        <text className="text-xl"><icon><BellOutlined /></icon></text>
                        <text>Chris</text>
                        <img src="https://pngimg.com/uploads/simpsons/simpsons_PNG95.png" alt="Logo" className="w-9 h-9 bg-gray-200 rounded-3xl" />
                    </div>

                </div>


                <div className="flex flex-row bg-gray-200 rounded-b-3xl">


                    {/* sidemeu */}
                    <div className="flex flex-col w-[20%] max-h-full rounded-bl-3xl bg-gray-600 text-white hidden md:flex">
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Vendors</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Contracts</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Vendor Rating</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Admin</text>
                    </div>



                    <div className="w-[80%] mt-3 ml-3 rounded-br-3xl bg-white rounded-md ">
                        <div className="flex flex-row justify-between shadow-md">
                            <text className=" m-3 text-2xl ">Add Vendor</text>
                        </div>


                        <div className="m-8 text-lg rounded-b-3xl ">
                            <div className="">
                                <div className="flex flex-row justify-between p-2 mb-2">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Name*</label>
                                        <input type="text" placeholder="Name" value="" className="border" />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Internal Representative* </label>
                                        <input type="text" placeholder="Internal Representative*" value="" className="border" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Type*</label>
                                        <input type="text" placeholder="Type" value="" className="border " />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Relationship Since* </label>
                                        <input type="date" placeholder="" value="" className="border " />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Status*</label>
                                        <input type="text" placeholder="" value="" className="border " />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label className="text-xl font-bold">Contact Information </label>
                                        {/* <input type="text" placeholder="" value="" className="border w-64"/> */}
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Country of Registration </label>
                                        <input type="text" placeholder="" value="" className="border " />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Main Contact Person </label>
                                        <input type="text" placeholder="First Name" value="" className="border mr-2 w-[30%]" />
                                        <input type="text" placeholder="Last Name" value="" className="border w-[30%]" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Company Registration Number</label>
                                        <input type="text" placeholder="" value="" className="border" />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Official Email </label>
                                        <input type="email" placeholder="Internal Representative*" value="" className="border " />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Stock Symbol</label>
                                        <input type="text" placeholder="" value="" className="border " />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Secondary Email </label>
                                        <input type="email" placeholder="" value="" className="border " />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Company Website</label>
                                        <input type="text" placeholder="" value="" className="border " />
                                    </div>

                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Mobile Number* </label>
                                        <input type="number" placeholder="Internal Representative*" value="" className="border " />
                                    </div>
                                </div>


                                <div className="flex flex-row justify-between p-2 mb-5">
                                    <div className="w-[48%] flex flex-row justify-between ">
                                        <label>Deals with*</label>
                                        <input type="text" placeholder="" value="" className="border " />
                                    </div>


                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </>
    );
};

export default Supplier;
