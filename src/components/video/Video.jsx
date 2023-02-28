import './_video.scss'
import "../../"
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import numeral from 'numeral'

const Video = ({ video }) => {
    const { id, snippet: {
        channelId,
        title,
        publishedAt,
        thumbnails: { medium },
        channelTitle,
    },
    } = video

    const [veiws, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelICon, setChannelICon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

    const _videoId = id?.videoId || id

    // for getting videos details
    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            })
            // console.log(items);
            // console.log(_duration)
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()

    }, [_videoId]);

    // for getting channel icon 
    useEffect(() => {
        const get_channel_icon = async () => {
            const { data: { items } } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            })
            setChannelICon(items[0].snippet.thumbnails.default.url)
        }
        get_channel_icon()

    }, [channelId]);

    return (
        <div className="video">
            <div className="video__top">
                <img src={medium.url} alt="thumbnail" />
                <span>{_duration}</span>
            </div>
            <div className="video__title">
                {title}
            </div>
            <div className="video__details">
                <span> <AiFillEye />{numeral(veiws).format("0.a")} Views •</span>
                <span>{moment(publishedAt).fromNow()}</span>
            </div>

            <div className="video__channel">
                <img src={channelICon} alt="Channel" />
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default Video