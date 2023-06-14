import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <nav className="sticky flex flex-row justify-between h-20 bg-black top-0 w-screen p-4 items-center z-10">

            <ul className="">
                <li className="">
                <Link to="/">Home</Link>
                </li>
            </ul>
            <SearchBar/>
        </nav>
    )
}

export default NavBar