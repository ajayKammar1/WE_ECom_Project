import { CloseSquareOutlined, DownOutlined, FilterOutlined, PlusOutlined, SearchOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import React from "react";

const data = [
    {
        "bgimg": "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja3JvdW5kJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "proimg": "https://pics.craiyon.com/2024-07-26/4HniJPPyTi6Put5yOiv2_w.webp",
        "name": "Jerome Bell",
        "courses": "2"
    },
    {
        "bgimg": "https://images.unsplash.com/photo-1674363635494-f096b2402685?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "proimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkszLn13c5g6cjblIWIttB_JjVgbsgIGuQLC44jkEqLL0MVqvN_H3UCwrBidMP_ohyfM&usqp=CAU",
        "name": "Floyd Miles",
        "courses": "3"
    },
    {
        "bgimg": "https://images.unsplash.com/photo-1613977645186-d3e10f27a09d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRpZGFsfGVufDB8fDB8fHww",
        "proimg": "https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png?f=webp",
        "name": "Jenny Wilson",
        "courses": "4"
    },
    {
        "bgimg": "https://images.unsplash.com/photo-1635701680062-b53d105b1088?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90aG9sZXN8ZW58MHx8MHx8fDA%3D",
        "proimg": "https://pics.craiyon.com/2023-11-15/NFfo8Fq5SC-QlFZzS4ge3Q.webp",
        "name": "Karthryn Murphy",
        "courses": "5"
    },
    {
        "bgimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtawhQCpuP82I_9TsylNbhw-1uLP6hVQ7OYBJ52aSzOPv4RVR3WoB_E10CoFXYdzxH00&usqp=CAU",
        "proimg": "https://pics.craiyon.com/2023-11-15/GZp-tcMSTqOJ-270CwHCIA.webp",
        "name": "Annette Black",
        "courses": "6"
    },
    {
        "bgimg": "https://images.unsplash.com/photo-1692278068988-22d63fb76990?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJ1Z3VhaXxlbnwwfHwwfHx8MA%3D%3D",
        "proimg": "https://play-lh.googleusercontent.com/bZFgLx_6xeI8Vhoj7m88uoDNrOA3afmqLC8D6lZBZG5uF1XBTDCsLmVSTK4ub0y75tU=w526-h296-rw",
        "name": "Cody Fisher",
        "courses": "7"
    },
    {
        "bgimg": "https://media.istockphoto.com/id/2031483690/photo/forte-de-s%C3%A3o-jorge-de-oitavos-cascais-portugal.webp?b=1&s=612x612&w=0&k=20&c=URFv-ZQxyLOt85Wi993yqzXps6E_PAdxAz6ani-Pmrg=",
        "proimg": "https://img.freepik.com/free-photo/love-illustrated-anime-style_23-2151103287.jpg",
        "name": "Jerome Bell",
        "courses": "8"
    },
    {
        "bgimg": "https://thumbs.dreamstime.com/b/coriscan-rocks-sea-dusk-red-off-coast-northern-corsica-looking-towards-cap-corse-36529113.jpg",
        "proimg": "https://play-lh.googleusercontent.com/bZFgLx_6xeI8Vhoj7m88uoDNrOA3afmqLC8D6lZBZG5uF1XBTDCsLmVSTK4ub0y75tU=w526-h296-rw",
        "name": "Jerome Bell",
        "courses": "9"
    },
    {
        "bgimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDWt7HBQ-kmwEMiHLfFO_N1c5_f7vdCZfLFQ0EpNDCSXVhzY0DZYdG_AFdd9uOr8elCQ&usqp=CAU",
        "proimg": "https://pics.craiyon.com/2023-10-15/d3fd9666d2fd4786b722c5d1bf217316.webp",
        "name": "Jerome Bell",
        "courses": "10"
    }
]

const Category = () => {
    return (
        <>
            <div className="">
                <div className=" h-screen flex flex-wrap border-2">
                    <div className=" border-r-2  w-[20%] p-[3%] h-screen  fixed">
                        <div className="flex justify-between mb-[8%]">
                            <p className="font-bold"><span><FilterOutlined /></span><text> Filter</text></p>
                            <p className="font-bold"><span><CloseSquareOutlined /></span><text> Clear</text></p>
                        </div>
                        <div className="flex flex-col justify-evenly h-[50%] ">
                            <h2 className="font-bold">CATEGORY</h2>
                            <p><input type="checkbox" name="" id="" /> UI & UX</p>
                            <p><input type="checkbox" name="" id="" /> Animation</p>
                            <p><input type="checkbox" name="" id="" /> Typography</p>
                            <p><input type="checkbox" name="" id="" /> Web Devlopers</p>
                            <p><input type="checkbox" name="" id="" /> Photography</p>
                            <p><input type="checkbox" name="" id="" /> Game Design</p>
                            <p><input type="checkbox" name="" id="" /> Illustration</p>
                            <button className="w-[60%]"><PlusOutlined /> Show More</button>
                        </div>
                        <div className="mt-[10%] border-t-2">
                            <h2 className="font-bold my-2">RATINGS</h2>
                            <div className="flex justify-around">
                                <p><StarFilled /></p>
                                <p><StarFilled /></p>
                                <p><StarFilled /></p>
                                <p><StarFilled /></p>
                                <p><StarFilled /></p>
                                <text>00-40</text>
                            </div>
                        </div>
                    </div>








                    <div className=" w-[80%] p-[4%] ml-[20%]">

                        <p className="border p-2 m-2"><SearchOutlined /> <input className="border-none outline-none bg-transparent w-[95%]" type="search" placeholder="search Any Instructor.." name="" id="" /></p>
                        <text className="m-2">Short by Relevent <DownOutlined /></text>


                        <div className="mt-3 flex flex-wrap justify-around">

                            {data.map(item => (
                                <div className="w-[28%] h-[55vh]  grid grid-rows-4 rounded-lg mb-8 shadow-md">
                                    <figure className="w-[100%] h-[200%] object-cover">
                                        <img className="w-[100%] h-[100%] object-cover rounded-t-lg" src={item.bgimg} alt="background" />
                                    </figure>
                                    <figure >
                                        <img className="relative w-[25%] h-[80%] top-16 block ml-[4%] mr-auto rounded-full  border-solid border-green-600 border-2" src={item.proimg} alt="Profile-img" />
                                    </figure>
                                    <section className=" w-[100%] h-[50%] mt-12 p-[2%]">
                                        <div className="flex m-2 justify-between">
                                            <p className="flex justify-between w-[50%]"><StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarOutlined /></p>
                                            <text>4.0(06)</text>
                                        </div>
                                        <h2 className="m-2 font-bold">{item.name}</h2>
                                        <p className="m-2"><text className="font-bold">{item.courses}</text> <text>Courses</text></p>
                                    </section>
                                </div>

                            ))}


                        </div>


                    </div>
                </div>
            </div>




        </>
    )
}

export default Category;