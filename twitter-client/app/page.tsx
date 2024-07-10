import FeedCard from "@/components/FeedCard";
import Image from "next/image";
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter, BsEnvelope } from "react-icons/bs";


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
    title:'Profile',
    icon:<BiUser/>
  }
] 


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
          <div className="col-span-3 pt-8 ">
            <div className="text-4xl h-fit w-fit rounded-full p-2 hover:bg-gray-700">
              <BsTwitter/>
            </div>
            <div className="mt-5 text-2xl pr-4">
              <ul>
                {sidebarItems.map(item=><li className="flex justify-start items-center gap-4 hover:bg-gray-700 w-fit rounded-3xl px-4 py-2 mt-3" key={item.title}><span>{item.icon}</span><span>{item.title} </span></li>)}
              </ul>
              <div className="text-xl font-semibold">
                <button className="bg-[#1d9bf0] p-4 rounded-full w-[90%] mt-7 hover:bg-sky-500">Tweet</button>
              </div>
            </div>
          </div>
          <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-500">
            <FeedCard/>
          </div>
          <div className="col-span-3">nigger</div>
      </div>
    </div>
  );
}
