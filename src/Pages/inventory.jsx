import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, CaretDownOutlined, DashboardOutlined, SettingOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined } from "@ant-design/icons";

const Inventory = () => {

    const data = [
        {
            "date": "Date",
            "reference": "Reference",
            "biller": "Biller",
            "warehouse": "Warehouse",
            "saleStatus": "Sale Status",
            "paymentStatus": "Payment",
            "grandTotal": "Grand",
            "paid": "Paid",
            "due": "Due",
            "Action":"Action"
        },
        {
            "date": "2024-10-02",
            "reference": "INV-002",
            "biller": "Jane Smith",
            "warehouse": "Secondary Warehouse",
            "saleStatus": "Pending",
            "paymentStatus": "Partial",
            "grandTotal": 2000,
            "paid": 1500,
            "due": 500
        },
        {
            "date": "2024-10-03",
            "reference": "INV-003",
            "biller": "Jim Beam",
            "warehouse": "Main Warehouse",
            "saleStatus": "Canceled",
            "paymentStatus": "Unpaid",
            "grandTotal": 500,
            "paid": 0,
            "due": 500
        },
        {
            "date": "2024-10-04",
            "reference": "INV-004",
            "biller": "Michael Scott",
            "warehouse": "Warehouse A",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 2500,
            "paid": 2500,
            "due": 0
        },
        {
            "date": "2024-10-05",
            "reference": "INV-005",
            "biller": "Pam Beesly",
            "warehouse": "Warehouse B",
            "saleStatus": "Pending",
            "paymentStatus": "Partial",
            "grandTotal": 1800,
            "paid": 800,
            "due": 1000
        },
        {
            "date": "2024-10-06",
            "reference": "INV-006",
            "biller": "Dwight Schrute",
            "warehouse": "Warehouse A",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 3200,
            "paid": 3200,
            "due": 0
        },
        {
            "date": "2024-10-07",
            "reference": "INV-007",
            "biller": "Stanley Hudson",
            "warehouse": "Main Warehouse",
            "saleStatus": "Pending",
            "paymentStatus": "Partial",
            "grandTotal": 1200,
            "paid": 600,
            "due": 600
        },
        {
            "date": "2024-10-08",
            "reference": "INV-008",
            "biller": "Phyllis Vance",
            "warehouse": "Warehouse C",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 900,
            "paid": 900,
            "due": 0
        },
        {
            "date": "2024-10-09",
            "reference": "INV-009",
            "biller": "Ryan Howard",
            "warehouse": "Main Warehouse",
            "saleStatus": "Pending",
            "paymentStatus": "Unpaid",
            "grandTotal": 400,
            "paid": 0,
            "due": 400
        },
        {
            "date": "2024-10-10",
            "reference": "INV-010",
            "biller": "Kelly Kapoor",
            "warehouse": "Warehouse D",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 2900,
            "paid": 2900,
            "due": 0
        },
        {
            "date": "2024-10-11",
            "reference": "INV-011",
            "biller": "Andy Bernard",
            "warehouse": "Warehouse B",
            "saleStatus": "Pending",
            "paymentStatus": "Partial",
            "grandTotal": 1500,
            "paid": 500,
            "due": 1000
        },
        {
            "date": "2024-10-12",
            "reference": "INV-012",
            "biller": "Oscar Martinez",
            "warehouse": "Warehouse C",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 2100,
            "paid": 2100,
            "due": 0
        }
    ]

    const StateColor = (state) => {
        switch(state) {
            case "Completed": 
                return "bg-green-400";
            case "Canceled": 
                return "bg-red-400";
            case "Pending": 
                return "bg-orange-400";
            case "Unpaid": 
                return "bg-purple-400";
            case "Paid": 
                return "bg-green-400";
            default: 
                return "bg-blue-400";
        }
    };

    return (
        <>
            <div className=" bg-white-400 h-full w-100% m-4 rounded-2xl border shadow-lg">
                <div className="bg-white-300 p-2 flex flex-row justify-between ">
                    <div>
                        <icon className=""><MenuOutlined /></icon>
                    </div>
                    <div>
                        <logo className=" text-xl font-bold italic text-blue-500">$ale<i className="text-purple-900">Pro</i></logo>
                    </div>
                    <div>
                        <icon className=" mr-2 text-purple-800"><FullscreenOutlined /></icon>
                        <icon className="mr-2 text-purple-800"><DribbbleOutlined /></icon>
                        <icon className="mr-2 text-purple-800"><UserOutlined /></icon>
                        <profile className="content-end">Shakalaka <CaretDownOutlined /></profile>
                    </div>
                    
                </div>

                <div className="flex flex-wrap bg-slate-100 rounded-b-2xl">

                    <div className="flex flex-col w-[15%]  mt-3 hidden md:flex">
                        <text className="m-1 ml-4"><DashboardOutlined /> Dashboard</text>
                        <text className="m-1 ml-4"><SettingOutlined /> Setting</text>

                    </div>

                    <div className="w-[85%]">
                        <div className="flex flex-row justify-between">
                            <text className=" m-3 text-purple-700 font-bold">WELCOME SHAKALAKA</text>
                            <text className=" m-3  text-purple-700 font-bold">REWARD POINTS: 3</text>
                        </div>

                        <div className="bg-white pb-[1px]">
                            <div className="p-1.5 shadow">
                                <a className="mr-[2%] ml-4 active:blue" href="http://">Sale</a>
                                <a className="mr-[2%]" href="http://">Payment</a>
                                <a className="mr-[2%] " href="http://">Questions</a>
                                <a className="mr-[2%] " href="http://">Return</a>

                            </div>

                            <div className="flex flex-row justify-between m-[1%]">
                                <button>Show entries</button>
                                <input placeholder="search" className="border rounded-md pl-2 text-black" />
                                <div className="">
                                    <a href="path/to/your/file.pdf" download className="m-0.5 bg-red-500 text-white p-1 rounded-l-md">
                                        <span>PDF</span>
                                    </a>
                                    <button className="m-0.5 bg-yellow-400 text-white p-1 ">CSV</button>
                                    <button className="m-0.5 bg-blue-500 text-white p-1 " onClick={window.print}>Print</button>
                                    <button className="m-0.5 bg-purple-800 text-white p-1 rounded-r-md">Column Visiblity <CaretDownFilled /></button>
                                </div>
                            </div>



                            <div className="w-auto rounded-lg m-4  bg-slate-100">

                                <table className="w-[100%] table-auto border-collapse">
                                    <thead className="shadow-sm">
                                        <tr className="">
                                            <th className="p-2 "><input type="checkbox" name="" id="" /></th>
                                            <th className="p-2 ">Date</th>
                                            <th className="p-2 ">Reference</th>
                                            <th className="p-2 ">Biller</th>
                                            <th className="p-2 ">Warehouse</th>
                                            <th className="p-2 ">Sale Status</th>
                                            <th className="p-2 ">Payment Stutus</th>
                                            <th className="p-2 ">Grand Total</th>
                                            <th className="p-2 ">Paid</th>
                                            <th className="p-2 ">Due</th>
                                            <th className="p-2 ">Action</th>
                                        </tr>

                                    </thead>
                                    
                                    <tbody>
                                        
                                    {data.map(item => (
                                        <tr key={item.id} className="text-center">
                                            <td className="p-2 "><input type="checkbox" name="" id="" /></td>
                                            <td className="p-2 ">{item.date}</td>
                                            <td className="p-2 ">{item.reference}</td>
                                            <td className="p-2 ">{item.biller}</td>
                                            <td className="p-2 ">{item.warehouse}</td>

                                            <td className="p-2"> 
                                            <button className={`${StateColor(item.saleStatus)} w-[100%] rounded-lg text-white `}>
                                                {item.saleStatus}
                                            </button>
                                                
                                            </td>

                                            <td className="p-2">
                                                <button className={`${StateColor(item.paymentStatus)} w-[60%] rounded-lg text-white  `}>
                                                    {item.paymentStatus}
                                                </button>
                                                
                                            </td>

                                            <td className="p-2 ">{item.grandTotal}</td>
                                            <td className="p-2 ">{item.paid}</td>
                                            <td className="p-2 ">{item.due}</td>
                                            <td className="p-2 ">{item.Action}</td>
                                        </tr>
                                    ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );
};

export default Inventory;
