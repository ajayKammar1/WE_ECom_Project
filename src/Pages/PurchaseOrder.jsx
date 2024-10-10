import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, CaretDownOutlined, DashboardOutlined, SettingOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined, QuestionCircleOutlined, EditOutlined, LeftCircleTwoTone, BellOutlined, PlusCircleOutlined, MailOutlined, PlusOutlined, UpSquareOutlined, PlusSquareOutlined, DollarCircleOutlined, InsertRowBelowOutlined, FileImageOutlined } from "@ant-design/icons";

const PurchaseOrder = () => {



    return (
        <>
            <div className=" w-[1200px] mx-48 border m-8 pt-16  p-10 rounded-lg shadow-2xl">
                <div className=" text-4xl ml-[500px] w-32 mb-14">
                    <h1 className="underline">Purchase</h1>
                    <h1 className="ml-5 underline">Order</h1>
                </div>

                <div className=" flex flex-row justify-between mb-10">
                    <div>
                        <div className="flex flex-row p-1 mb-4 ">
                            <text className="text-xl flex flex-col border-b-2 w-32 mr-7"><text>Purchase</text> <text>Order No</text></text>
                            <input type="text" placeholder="A00001" name="" className="w-72 border-b-2 " />
                        </div>

                        <div className="flex flex-row p-1 mb-4 ">
                            <text className="text-xl flex flex-col border-b-2 w-32 mr-7"><text>Purchase</text> <text>Order Date</text></text>
                            <input type="date" placeholder="" name="" className="w-72 border-b-2 " />
                        </div>

                        <text><PlusSquareOutlined className="text-blue-600" /> Add More Fields</text>
                    </div>

                    <div className="w-96 bg-slate-200 flex flex-col justify-center items-center text-center p-4 rounded-md">
                        <input type="image" src=".jpg" alt="image" />
                        <h2 className="mt-2">Add Business Logo</h2>
                        <p>Resolution up to 1080x1080px.</p>
                        <p>PNG or JPEG file</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <form action="" className="p-5 bg-blue-50 rounded-lg flex flex-col justify-between w-[550px]">
                        <h1 className="text-2xl m-2 ">Order By <text className="text-lg text-gray-500"> (Your Details)</text></h1>
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />

                        <div className="ml-1 flex flex-row justify-between w-[500px] ">
                            <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 w-[225px] text-xl border-b-2 bg-blue-50" />
                            <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 w-[225px] text-xl border-b-2 bg-blue-50" />
                        </div>

                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <text className="p-3"><MailOutlined className="text-blue-500" /> Add Email</text>
                        <text className="p-3"><PlusOutlined className="text-blue-500" /> Add Custom Fields</text>
                    </form>

                    <form action="" className="p-5 bg-blue-50 rounded-lg flex flex-col justify-between w-[550px]">
                        <h1 className="text-2xl m-2 ">Order To <text className="text-lg text-gray-500"> (Vendor Details)</text></h1>
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />

                        <div className="ml-1 flex flex-row justify-between w-[500px] ">
                            <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 w-[225px] text-xl border-b-2 bg-blue-50" />
                            <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 w-[225px] text-xl border-b-2 bg-blue-50" />
                        </div>

                        <input type="text" name="" placeholder="inputfiled" className="m-2 p-3 text-xl border-b-2 bg-blue-50" />
                        <text className="p-3"><MailOutlined className="text-blue-500" /> Add Email</text>
                        <text className="p-3"><PlusOutlined className="text-blue-500" /> Add Custom Fields</text>
                    </form>
                </div>

                <p className="p-3 text-xl"><input type="checkbox" name="" id="" /> Add Shipping Details</p>

                <div className="flex flex-col mt-5 mb-2">
                    <div className="flex flex-row justify-between mb-4">
                        <div className="relative mt-7">
                            <input type="text" placeholder="input field" className="border w-80  border-gray-300 p-2 rounded-md" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 text-gray-700">Currency</label>
                            <input type="text" placeholder="input field" className="border w-80 border-gray-300 p-2 rounded-md" />
                        </div>

                        <div className="mt-7">
                            <input type="text" placeholder="input field" className="border w-80 border-gray-300 p-2 rounded-md" />
                        </div>

                    </div>

                </div>


                <table className="bg-blue-50 w-full mb-2 mt-10 ">
                    <tr className="bg-blue-600 text-white ">
                        <th className="p-4 ">Item</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Rate</th>
                        <th className="p-4">Amaount</th>
                    </tr>
                    <tr>
                        <td><input type="text" name="" placeholder="inputfiled" className="p-4 w-96 ml-3 bg-blue-50 border-b-2" /></td>
                        <td><input type="text" name="" placeholder="inputfiled" className="p-4 w-40 bg-blue-50 border-b-2" /></td>
                        <td><input type="text" name="" placeholder="inputfiled" className="p-4 w-40 bg-blue-50 border-b-2" /></td>
                        <td><input type="text" name="" placeholder="inputfiled" className="p-4 w-40 bg-blue-50 border-b-2" /></td>
                    </tr>
                    <tr>
                        <td className="p-4 w-20"><PlusSquareOutlined /> Add Description</td>
                        <td className="p-4"><FileImageOutlined /> Add Thumbnail</td>
                        <td className="p-4"><InsertRowBelowOutlined /> Insert an item below</td>
                        <td className="p-4"> Duplicate</td>
                    </tr>
                    <tr className="mb-4">
                        <td className="p-4 ">Add Unit</td>
                        <td><input type="text" name="" placeholder="inputfiled" className="p-4 bg-blue-50 border-b-2" /></td>
                    </tr>
                </table>

                <h1 className="p-2 border-2 border-dotted items-center pl-[500px] mb-10"><PlusSquareOutlined className="text-blue-500" /> Add New Line</h1>

                <div className="flex flex-col mb-4 w-96 ml-[730px]">
                    <text className="p-2">Add Discounts/Additional Charges</text>
                    <text className="p-2">Summarise Total Quantity</text>
                    <div className="flex flex-row justify-between p-2 text-2xl border-t-2 border-b-2">
                        <h1 className="">Total(USD)</h1>
                        <h1>$1.00</h1>
                    </div>
                    <text className="p-2"><PlusSquareOutlined /> Add More Fields</text>
                    <text className="p-2"><DollarCircleOutlined /> Show Total In Words</text>
                    <input type="file" placeholder="Add Signiture" name="" className="p-2 border-2 border-dotted" />
                </div>
                <div>
                    <input type="file" placeholder="Add Terms & Conditions" name="" className="border-2 border-dotted p-2 m-2" />
                    <input type="file" placeholder="Add Notes" name="" className="border-2 border-dotted p-2 m-2" />
                    <input type="file" placeholder="Add Attachments" name="" className="border-2 border-dotted p-2 m-2" />
                    <input type="file" placeholder="Add Additional Info" name="" className="border-2 border-dotted p-2 m-2" />

                </div>

                <div className=" text-center mt-5">
                    <button type="submit" className="bg-red-600 p-3 text-white text-lg rounded-md py-2 shadow-md hover:bg-red-700 shadow-slate-600">Save & Continue</button>
                </div>

            </div>

        </>
    );
};

export default PurchaseOrder;
