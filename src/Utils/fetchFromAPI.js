import axios from 'axios'

//? for vite use import.meta.env and not process.env

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

// const options = {
//     params: {
//         relatedToVideoId: '7ghhRHRP6t4',
//         part: 'id,snippet',
//         type: 'video',
//         maxResults: '50'
//     },
//     headers: {
//         'X-RapidAPI-Key': '202de6a233msh2866e393635d95ep13fa2bjsn5f9d33d36f53',
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// };

// search ? part = snippet & q=${ selectedCategory }

// export const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

// const query = ''

// const options = {
//     params: { 
//         maxResults: '50',
//         query: `${query}`,
//         geo: 'US',
//         lang: 'en',
//     },
//     headers: {
//         'X-RapidAPI-Key': '202de6a233msh2866e393635d95ep13fa2bjsn5f9d33d36f53',
//         'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//     }
// };

// export const fetchFromAPI = async (url, query) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// }