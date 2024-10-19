import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, CaretDownOutlined, DashboardOutlined, SettingOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined, QuestionCircleOutlined, EditOutlined, LeftCircleTwoTone, BellOutlined, DownOutlined, XOutlined, LeftOutlined, RightOutlined, MoreOutlined } from "@ant-design/icons";

const Supplier2 = () => {



    return (
        <>
            <div className=" bg-white-400 h-full m-4 rounded-3xl border-black border-2 shadow-lg">

                {/*below div for first header  */}
                <div className="bg-white-300 p-1 border-b-2 border-black flex flex-row ">
                    <p className="bg-red-500 w-3 h-3 m-3 ml-6  rounded-lg"></p>
                    <p className="bg-yellow-500 w-3 h-3 m-3 ml-0  rounded-lg"></p>
                    <p className="bg-green-500 w-3 h-3 m-3 ml-0  rounded-lg"></p>

                </div>


                {/* below div for second header */}
                <div className="bg-gray-200 items-center  border-black flex flex-row justify-between">

                    <div>
                        <button className="border-r-2 p-2 w-12 border-gray-300"><icon><LeftCircleTwoTone /></icon></button>
                        <text className="ml-4">Vendors</text>
                    </div>

                    <div>
                        <text className="mr-4 text-blue-700"><buttob>Subscription</buttob></text>
                        <text className="border-l-2 p-2 w-12 border-gray-300"><buttob><EditOutlined /> Edit this application</buttob></text>
                        <text className="border-l-2 p-2 w-12 border-gray-300"><buttob><QuestionCircleOutlined /> Help</buttob></text>
                    </div>

                </div>


                {/* below div for Third header */}
                <div className="bg-white-500 items-center   border-black flex flex-row justify-between">

                    <div className="bg-blue-600 w-[20%] text-white font-bold  p-3">
                        <text className="ml-4 items-center pl-12">Vendors</text>
                    </div>

                    <div className="space-x-2 items-center flex flex-row justify-around">
                        <text className="text-xl"><icon><BellOutlined /></icon></text>
                        <text>Chris</text>
                        <img src="https://pngimg.com/uploads/simpsons/simpsons_PNG95.png" alt="Logo" className="w-9 h-9 bg-gray-200 rounded-3xl" />
                    </div>

                </div>


                <div className="flex flex-row bg-white rounded-b-3xl">


                    {/* sidemeu */}
                    <div className="flex flex-col w-[20%] max-h-full rounded-bl-3xl bg-gray-600 text-white hidden md:flex">
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Vendors</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Contracts</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Vendor Rating</text>
                        <text className=" items-center  p-2 pl-4 text-lg bg-gray-600">Admin</text>
                    </div>



                    <div className="w-[30%]  ml-3 bg-gray-200 rounded-md ">
                        <div className="bg-slate-100 flex flex-row justify-between shadow-md">
                            <text className=" m-3 text-2xl ">Add Vendor</text>
                        </div>

                        <div className="w-[90%] border ml-7 mt-10 h-40 p-3 shadow-lg flex flex-col justify-between bg-white">
                            <div className="flex flexrow justify-between">
                                <text>Rutronik</text>
                                <icon><MoreOutlined/></icon>
                            </div>
                            <div className="flex flex-row justify-between">
                                <text>Rehan Jones</text>
                                <text className="text-blue-800">rehan@gmail.com</text>
                                <text>$ 500.00</text>
                            </div>
                        </div>

                        <div className=" bg-white w-[90%] border ml-7 mt-10 h-40 p-3 shadow-lg flex flex-col justify-between">
                            <div className="flex flexrow justify-between">
                                <text>Rutronik</text>
                                <icon><MoreOutlined/></icon>
                            </div>
                            <div className="flex flex-row justify-between">
                                <text>Rehan Jones</text>
                                <text className="text-blue-800">rehan@gmail.com</text>
                                <text>$ 500.00</text>
                            </div>
                        </div>

                        <div className="bg-white w-[90%] border ml-7 mt-10 h-40 p-3 shadow-lg flex flex-col justify-between">
                            <div className="flex flexrow justify-between">
                                <text>Rutronik</text>
                                <icon><MoreOutlined/></icon>
                            </div>
                            <div className="flex flex-row justify-between">
                                <text>Rehan Jones</text>
                                <text className="text-blue-800">rehan@gmail.com</text>
                                <text>$ 500.00</text>
                            </div>
                        </div>

                        <div className="bg-white w-[90%] border ml-7 mt-10 h-40 p-3 shadow-lg flex flex-col justify-between">
                            <div className="flex flexrow justify-between">
                                <text>Rutronik</text>
                                <icon><MoreOutlined/></icon>
                            </div>
                            <div className="flex flex-row justify-between">
                                <text>Rehan Jones</text>
                                <text className="text-blue-800">rehan@gmail.com</text>
                                <text>$ 500.00</text>
                            </div>
                        </div>


                    </div>

                    <div className="w-[50%] via-white">
                        <div className="flex flex-row justify-between p-2 shadow-sm bg-gray-200">
                            <div>
                                <icon><LeftOutlined/><RightOutlined/></icon>
                            </div>

                            <div>
                                <text className="mr-4 text-blue-700"><buttob>Archive</buttob></text>
                                <text className="border-l-2 p-2 w-12 border-gray-300"><buttob><EditOutlined /> Edit</buttob></text>
                                <text className="border-l-2 p-2 w-12 border-gray-300"><buttob> More <DownOutlined/></buttob></text>
                                <text className="border-l-2 p-2 w-12 border-gray-300"><buttob><XOutlined/></buttob></text>
                            </div>
                        </div>

                        <div className="p-2 font-bold shadow-sm">
                           <text>Overview</text>
                        </div>
                        <div className="m-2 shadow-md mb-8">
                            <table className="flex flex-row border mt-10 rounded-lg bg-white">
                                <tr className="flex flex-col border w-[50%] items-start pl-3">
                                    <th className="p-1 pt-2   ">Name</th>
                                    <th className="p-1">Type</th>
                                    <th className="p-1">Total spend</th>
                                    <th className="p-1">Status</th>
                                    <th className="p-1">Country of Registration</th>
                                    <th className="p-1">Company Registration Number</th>
                                    <th className="p-1">Stock Symbol</th>
                                    <th className="p-1">Company website</th>
                                    <th className="p-1">Internal Representative</th>
                                    <th className="p-1">Relationship Since</th>
                                </tr>
                                <tr className="flex flex-col border w-[50%] items-start pl-3">
                                    <td className="p-1 pt-2   ">Rutronik</td>
                                    <td className="p-1">Wholesalers</td>
                                    <td className="p-1">$ 500.00</td>
                                    <td className="p-1">Live</td>
                                    <td className="p-1">United States</td>
                                    <td className="p-1">EL1002022</td>
                                    <td className="p-1">RU102022</td>
                                    <td className="p-1">www.rutronickelectronic.com</td>
                                    <td className="p-1">Charles- Charles@zylker.com</td>
                                    <td className="p-1">30-Nov-2021</td>
                                </tr>
                            </table>
                        </div>


                        <div className="p-2 font-bold shadow-sm text-lg">
                           <text>Contact Information</text>
                        </div>
                        <div className="m-2 shadow-md">
                            <table className="flex flex-row border mt-10 rounded-lg bg-white">
                                <tr className="flex flex-col border w-[420px] items-start pl-3">
                                    <th className="p-1 pt-2   ">Main Contact Person</th>
                                    <th className="p-1">Official Email</th>
                                    <th className="p-1"> Secondary Email</th>
                                    <th className="p-1">Mobile Number</th>

                                </tr>
                                <tr className="flex flex-col border w-[420px] items-start pl-3">
                                    <td className="p-1 pt-2   ">Rehan Jones</td>
                                    <td className="p-1">rehan@gmail.com</td>
                                    <td className="p-1">rehan@gmail.com</td>
                                    <td className="p-1">9876543210</td>
                                    
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Supplier2;
