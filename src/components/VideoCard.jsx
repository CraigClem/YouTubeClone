import React from 'react'

const VideoCard = ({video}) => (
    <a href={`https://www.youtube.com/watch?v=${video.videoId}`}> 
        <div className='flex flex-col justify-between bg-neutral-800'>
            <img 
                src={video.thumbnail ? video.thumbnail[0].url : 'https://picsum.photos/200/300'} alt={video.title}
                className='mb-1'
            />
            <div className='px-2 flex flex-col'> 
                <h1 className='mb-2 font-bold text-sm line-clamp-2'>
                    {video.title ? video.title : ''}
                </h1>
                <span className="text-xs font-bold justify-end text-neutral-500" >
                    {video.channelTitle ? video.channelTitle : ''}
                </span>
                <div className='flex flex-row'> 
                    <span className="text-xs font-bold justify-end text-neutral-500" >
                        {video.viewCount ? Math.floor(video.viewCount) : ''}
                    </span>
                    &nbsp;
                    <span className="text-xs font-bold justify-end text-neutral-500" >
                        {video.publishedText ? video.publishedText : ''}
                    </span>
                </div>
            </div>
        </div>
    </a>
)

export default VideoCard