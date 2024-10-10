import React from "react";
import { MenuOutlined, FullscreenOutlined, DribbbleOutlined, UserOutlined, CaretDownOutlined, DashboardOutlined, SettingOutlined, CaretDownFilled, InteractionOutlined, BorderOutlined } from "@ant-design/icons";

const Inventory = () => {

    const data = [
        {
            "date": "2024-10-01",
            "reference": "INV-001",
            "biller": "John Doe",
            "warehouse": "Main Warehouse",
            "saleStatus": "Completed",
            "paymentStatus": "Paid",
            "grandTotal": 1000,
            "paid": 1000,
            "due": 0
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


    return (
        <>
            <div className=" bg-white-400 h-full w-200 m-4 rounded-3xl border shadow-lg">
                <div className="bg-white-300 p-1">
                    <icon className="ml-4 mr-96"><MenuOutlined /></icon>
                    <logo className="ml-80 mr-40 text-2xl font-bold italic text-blue-500">$ale<i className="text-purple-900">Pro</i></logo>

                    <icon className="ml-96 mr-2 text-purple-800"><FullscreenOutlined /></icon>
                    <icon className="mr-2 text-purple-800"><DribbbleOutlined /></icon>
                    <icon className="mr-2 text-purple-800"><UserOutlined /></icon>
                    <profile className="content-end">Shakalaka <CaretDownOutlined /></profile>
                </div>

                <div className="flex flex-wrap bg-slate-100 rounded-b-3xl">

                    <div className="flex flex-col w-56 mt-3">
                        <text className="m-1 ml-4"><DashboardOutlined /> Dashboard</text>
                        <text className="m-1 ml-4"><SettingOutlined /> Setting</text>

                    </div>

                    <div className="w-10/12">
                        <div className="flex flex-row justify-between">
                            <text className=" m-3 text-purple-700 font-bold">WELCOME SHAKALAKA</text>
                            <text className=" m-3  text-purple-700 font-bold">REWARD POINTS: 3</text>
                        </div>

                        <div className="bg-white">
                            <div className="p-1.5 shadow">
                                <a className="mr-10 ml-4 active:blue" href="http://">Sale</a>
                                <a className="mr-10 " href="http://">Payment</a>
                                <a className="mr-10 " href="http://">Questions</a>
                                <a className="mr-10 " href="http://">Return</a>

                            </div>

                            <div className="flex flex-row justify-between m-5">
                                <button>Show entries</button>
                                <input placeholder="search" className="border rounded-md pl-2 text-black" />
                                <div className="">
                                    {/* <button className="m-0.5 bg-red-500 text-white p-1 rounded-l-md">PDF</button> */}
                                    <a href="path/to/your/file.pdf" download className="m-0.5 bg-red-500 text-white p-1 rounded-l-md">
                                        <span>PDF</span>
                                    </a>
                                    <button className="m-0.5 bg-yellow-400 text-white p-1 ">CSV</button>
                                    <button className="m-0.5 bg-blue-500 text-white p-1 " onClick={window.print}>Print</button>
                                    <button className="m-0.5 bg-purple-800 text-white p-1 rounded-r-md">Column Visiblity <CaretDownFilled /></button>
                                </div>
                            </div>



                            <div className="w-auto rounded-lg m-4  bg-slate-50">

                                <table className="w-full ">
                                    <tr className="flex flex-row justify-around p-5 shadow-md w-[1250px]">
                                        <th><BorderOutlined /></th>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Biller</th>
                                        <th>Warehouse</th>
                                        <th>Sale Status</th>
                                        <th className="w-24">Payment Stutus</th>
                                        <th className="w-20">Grand Total</th>
                                        <th>Paid</th>
                                        <th>Due</th>
                                        <th>Action</th>
                                    </tr>

                                    {data.map(item => (
                                        <tr key={item.id} className="flex flex-row text-center content-center p-3 shadow-sm">
                                            <td className="w-5 ml-8 mr-3"><BorderOutlined /></td>
                                            <td className="w-[90px]  ml-4 mr-2 ">{item.date}</td>
                                            <td className="w-24 ml-3 mr-2 ">{item.reference}</td>
                                            <td className="w-24 mr-2 ">{item.biller}</td>
                                            <td className="w-28 ml-2 mr-2 ">{item.warehouse}</td>
                                            <td className="bg-green-400 w-24 mr-2 text-white rounded-md p-0.3 ml-5 h-7  px-1">{item.saleStatus}</td>
                                            <td className="bg-green-400 w-16 text-white rounded-md p-0.3 ml-14 mr-16 h-7 px-1 ">{item.paymentStatus}</td>
                                            <td className="w-16  mr-12 ">{item.grandTotal}</td>
                                            <td className="w-16  ml-1 mr-4 ">{item.paid}</td>
                                            <td className="w-16 ml-2 mr-14 ">{item.due}</td>
                                            <td className="w-15 "><InteractionOutlined /></td>
                                        </tr>
                                    ))}

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
