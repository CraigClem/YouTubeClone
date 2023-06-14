import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components';

//? Main Component - this is the parent Component where all the components will be rendered.

const App = () => (
    <BrowserRouter>
        <div className="bg-black text-stone-300">
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </div>
    </BrowserRouter>
)

export default App
