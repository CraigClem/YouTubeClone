/* eslint-disable react/prop-types */
import React from 'react'
import VideoCard from './VideoCard'

const Video = ({ videos }) => (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5'>
        {videos && videos.map((video, index) =>  
            <VideoCard key={index} video={video} />
        )}
    </div>
    )

export default Video