import './_video.scss'
import "../../"
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="	https://i.ytimg.com/vi/_6Zhfts2iao/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAMsuyEuPTwZh9umlkAV2Vm5dmLLQ" alt="videoImg" />
                <span>05:06</span>
            </div>
            <div className="video__title">
                Create a website in 10 minutes using frameworks
            </div>
            <div className="video__details">
                <span> <AiFillEye /> 5m Views •</span>
                <span>5 days ago</span>
            </div>

            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s68-c-k-c0x00ffffff-no-rj" alt="Channel image" />
                <p>Rainbow Hat junior</p>
            </div>
        </div>
    )
}

export default Video