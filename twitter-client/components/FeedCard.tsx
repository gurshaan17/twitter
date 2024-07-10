import Image from 'next/image'


const FeedCard = () => {
    return <div>
        <div className="grid grid-cols-12">
            <div className="col-span-2"><Image src='https://avatars.githubusercontent.com/u/140047039?v=4' height={50} width={50}  alt='no user'/></div>
            <div className="col-span-10 ">there</div>
        </div>
    </div>
}

export default FeedCard;