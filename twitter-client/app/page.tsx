import FeedCard from "@/components/FeedCard";
import Image from "next/image";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter, BsEnvelope } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";


interface TwitterSidebar{
  title:string,
  icon:React.ReactNode
}


const sidebarItems : TwitterSidebar[] = [
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },{
    title:'Explore',
    icon:<BiHash/>
  },{
    title:'Notifications',
    icon:<BsBell/>
  },{
    title:'Messages',
    icon:<BsEnvelope/>
  },{
    title:'Bookmark',
    icon:<BsBookmark/>
  },{
    title:'Twitter Blue',
    icon:<BiMoney/>
  },{
    title:'Profile',
    icon:<BiUser/>
  },{
    title:'More',
    icon:<SlOptions/>
  }
] 


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
          <div className="col-span-3 pt-4 ">
            <div className="text-3xl h-fit w-fit rounded-full p-2 hover:bg-gray-700">
              <BsTwitter/>
            </div>
            <div className="mt-5 text-2xl pr-4">
              <ul>
                {sidebarItems.map(item=>
                <li className="flex justify-start items-center gap-4 hover:bg-gray-700 w-fit rounded-3xl px-3 py-2 mt-3" key={item.title}>
                  <span className="text-3xl">
                    {item.icon}
                  </span>
                  <span>
                    {item.title}
                  </span>
                </li>)}
              </ul>
              <div className="text-xl font-semibold">
                <button className="bg-[#1d9bf0] p-3 rounded-full w-[90%] mt-7 hover:bg-sky-500">Tweet</button>
              </div>
            </div>
          </div>
          <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-900 h-screen overflow-scroll">
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
          </div>
          <div className="col-span-3">nigger</div>
      </div>
    </div>
  );
}
