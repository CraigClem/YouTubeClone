//? PARENT COMPONENT FOR API CALL
import axios from 'axios'
import { useState, useEffect} from 'react'
// import { fetchFromAPI } from '../Utils/fetchFromAPI'

import SideBar from './SideBar'
import Video from './Video'

const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('Trending')
const [videos, setVideos] = useState([])


// move below code from component, blocker using selected categaroy as query where not defined and api key an env var

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

// const video = `https://www.youtube.com/watch?v=${videoId}`

const options = {
    params: { 
        maxResults: '50',
        query: `${selectedCategory}`,
        geo: 'US',
        lang: 'en',
    },
    headers: {
        'X-RapidAPI-Key': '202de6a233msh2866e393635d95ep13fa2bjsn5f9d33d36f53',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};



useEffect(() => {
    const fetchFromAPI = async (url) => {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
}
    const getData = async () => {
        try {
            const response = await fetchFromAPI('search')
            console.log(response.data)
            setVideos(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    getData()
}, [selectedCategory])

return (
    <div className='flex flex-col h-screen md:flex-row'>
        <div className='border-b-2 md:border-r-2 border-pink-500 h-auto md:h-screen px-4'>
            <SideBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </div>
        <div className='p-4 overflow-auto w-full items-center'>
            <span className='text-red-700 text-lg font-bold mb-2'><span className='text-white'>{ selectedCategory ? selectedCategory : 'Trending' } </span>Videos</span>
            <Video 
                videos={videos}
                setVideos={setVideos}
            />
        </div>
    </div>

)}


export default Feed