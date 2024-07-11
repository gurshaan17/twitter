import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';


const FeedCard = () => {
    return <div className='p-5 border border-gray-900 border-r-0 border-l-0  hover:bg-gray-900 transition-all'>
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1"><Image src='https://avatars.githubusercontent.com/u/140047039?v=4' height={50} width={50}  alt='no user'/></div>
            <div className="col-span-11 pl-3 ">
                <div className='text-xl'>
                    Gurshaan Singh
                </div>
                <p className='text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ducimus nesciunt consequatur odio. Quod itaque placeat voluptas cupiditate culpa. Ullam mollitia sunt velit voluptatem deserunt, voluptate doloremque nostrum explicabo sint doloribus odit obcaecati. Necessitatibus.</p>
                <div className='flex justify-evenly mt-5 '>
                    <div><BiMessageRounded/></div> 
                    <div><FaRetweet/></div>
                    <div><AiOutlineHeart/></div>
                    <div><BiUpload/></div>
                </div>
            </div>
            
        </div>
    </div>
}

export default FeedCard;