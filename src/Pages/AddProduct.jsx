import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, InfoCircleOutlined, DashboardOutlined, SettingOutlined, DownCircleFilled, DownCircleOutlined, DownOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined, LeftOutlined, RightOutlined, PlusOutlined, ShareAltOutlined, FieldTimeOutlined, CopyOutlined, NotificationOutlined, NotificationTwoTone, BehanceOutlined, BellOutlined, LeftCircleFilled, PlayCircleOutlined, PlusCircleOutlined, UserAddOutlined, UsergroupAddOutlined, ProductOutlined, PullRequestOutlined, PlusSquareOutlined, StockOutlined, MinusCircleOutlined, TruckOutlined } from "@ant-design/icons";

const Addproduct = () => {
    return (
        <>
            <div className=" bg-white-400 h-full w-200 m-4 rounded-xl border shadow-lg">
                <div className="bg-white-300  shadow-sm">
                    <icon className="ml-3"><MenuOutlined /></icon>
                    <icon className="ml-3"><LeftOutlined /></icon>
                    <icon className="ml-3 mr-72"><RightOutlined /></icon>
                    <logo className="ml-56 mr-40"><input className="w-96 rounded-md text-center m-1 border" placeholder=" pos.sadax.co" /></logo>

                    <icon className="ml-72 mr-2 text-purple-800"><FieldTimeOutlined /></icon>
                    <icon className="mr-2 text-purple-800"><ShareAltOutlined /></icon>
                    <icon className="mr-2 text-purple-800"><PlusOutlined /></icon>
                    <profile className="content-end"> <CopyOutlined /></profile>
                </div>
                <div className="flex flex-row justify-between w-full mt-3  p-2 m-2">
                    <div>
                        <text className="m-1 ml-4 font-bold text-2xl">SADA</text>
                        <logo></logo>
                        {/* <text className="m-1 ml-4 text-xs  bg-zinc-500 flex-col w-9"> */}
                        <text>SUPER</text>
                        <text>SHOP</text>
                        {/* </text> */}
                        <button className="m-1 ml-4"><LeftCircleFilled /></button>
                    </div>

                    <div>
                        <button className="border border-blue-500 rounded-md text-blue-500 w-14">POS</button>
                        <icon> </icon>
                        <icon> </icon>
                        <icon className="m-1" > <BellOutlined /></icon>

                        <logo>LOGO <text className="font-bold">Sadax Design</text></logo>
                        <icon> <DownOutlined /></icon>
                    </div>

                </div>

                <div className="flex flex-wrap bg-white-300 rounded-b-3xl">

                    <div className="flex flex-col w-60 mt-5 mr-4">
                        <text className="m-1.5 ml-4"><DashboardOutlined /> Dashboard</text>
                        <text className="m-1.5 ml-4"><UsergroupAddOutlined /> User Managment</text>
                        <text className="m-1.5 ml-4"><UserOutlined /> Contacts</text>
                        <text className="m-1.5 ml-4"><ProductOutlined /> Products</text>
                        <text className="m-1.5 ml-4"><PlusSquareOutlined /> Purchase</text>
                        <text className="m-1.5 ml-4"><ProductOutlined /> Sell</text>
                        <text className="m-1.5 ml-4"><TruckOutlined /> Stock Transfers</text>
                        <text className="m-1.5 ml-4"><StockOutlined /> Stock Adjustment</text>
                        <text className="m-1.5 ml-4"><MinusCircleOutlined /> Express</text>
                        <text className="m-1.5 ml-4"><ProductOutlined /> Reports</text>
                        <text className="m-1.5 ml-4"><BellOutlined /> Notification Templates</text>
                        <text className="m-1.5 ml-4"><SettingOutlined /> Setting</text>
                        {/* <select> <text>heilo</text> <option>hello</option><option>nagraj</option></select> */}
                    </div>

                    <div className="w-10/12">
                        <div className="bg-gray-100 p-10 shadow-inner">
                            <div className=" flex flex-row justify-between mb-6">
                                <text className="text-2xl font-bold ">Add new product</text>
                                <button className="border border-blue-800 rounded-md bg-blue-800 text-white p-2 text-sm shadow-md shadow-gray-500">Action <DownOutlined /></button>
                            </div>
                            <div className="flex flex-row shadow-sm mb-5">
                                <div className="flex flex-col mr-6 ">
                                    <text>Product Image</text>
                                    <input className="ml-4 m-2 shadow-md rounded-md p-10 w-32 h-32 bg-white" type="image" src="image.jpge" alt="image" />
                                    <button className="bg-blue-700 w-36 ml-1 rounded-md text-white "><PlusOutlined /> Upload</button>
                                    <text className="text-sm ml-5 text-gray-500">Max file size: 5MB</text>
                                    <text className="text-sm text-gray-500">Aspect ratio should be 1.1</text>
                                </div>


                                <div className="flex flex-col mb-5">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Product Name *</text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Product Name" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold ">SKU: <InfoCircleOutlined /></text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="Product Name" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Barcode Type *</text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="Code 128 (c128)" type="text" />
                                        </div>
                                    </div>


                                    <div className="flex flex-row ">
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Unit <PlusCircleOutlined className="text-blue-600" /></text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="please select" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Brand <PlusCircleOutlined className="text-blue-600" /></text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Please select" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Category: </text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Please Select" type="text" />
                                        </div>
                                    </div>


                                    <div className="flex flex-row ">
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Sub Category</text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="Please Select" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Business Location: <InfoCircleOutlined /></text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Product Name" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Alert Quantity <InfoCircleOutlined /></text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Alert Quantity" type="text" />
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="flex flex-col  p-2 w-96 mr-2 mb-3">
                                            <text className="mb-1 font-bold"><input type="checkbox" /> Manage Stock? <InfoCircleOutlined /></text>
                                            <text className="text-gray-400 ml-5">Enable stock managment at product level</text>
                                        </div>

                                    </div>

                                    <div className="flex flex-row">
                                        <div className="flex flex-col  p-2 w-5/6 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Product Description</text>
                                            <input type="text" placeholder="Write description" className="w-full h-40 border shadow-inner p-2" />
                                        </div>
                                        <div className="flex flex-col  p-2 w- mr-2 mb-3">
                                            <text className="mb-1 font-bold">Product Description</text>
                                            <input type="file" className="w-full m-2 " />
                                            <text className="text-gray-500">Max File Size: 5MB</text>
                                            <text className="text-gray-500">Allowed File: pdf,CSV,zip,docs,jpeg</text>
                                        </div>

                                    </div>



                                </div>
                            </div>





                            <div className="flex flex-row shadow-sm mb-5">

                                <div className="flex flex-col mb-5 ml-48">


                                    <div className="">
                                        <div className="flex flex-row  p-2  mr-2 mb-3">
                                            <text className="mb-1 font-bold mr-10"><input type="checkbox" /> Enable Product description, IMEI or Serial Number <InfoCircleOutlined /></text>
                                            <text className="mb-1 font-bold"><input type="checkbox" /> Not for selling <InfoCircleOutlined /></text>

                                        </div>

                                    </div>

                                    <div className="flex flex-row ">
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold"> Weight: </text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Weight" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold ">Custom Field1: </text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="Custom Field1" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Custom Field2: </text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="Custom Field2" type="text" />
                                        </div>
                                    </div>


                                    <div className="flex flex-row ">
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Custom Field3: </text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="please select" type="text" />
                                        </div>
                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold">Custom Field4: </text>
                                            <input className="pl-3 rounded-md p-1 border" placeholder="Custom Field4" type="text" />
                                        </div>

                                    </div>

                                    <div className="flex flex-row ">

                                        <div className="flex flex-col  p-2 w-80 mr-2 mb-3">
                                            <text className="mb-1 font-bold"> Service staff time/Preparetion time (In minutes) </text>
                                            <input className="pl-3 rounded-md p-1 border " placeholder="please select" type="text" />
                                        </div>

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

export default Addproduct;
