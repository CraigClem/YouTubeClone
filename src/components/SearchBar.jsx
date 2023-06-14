import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

const onChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
}


const onSubmit = (e) => {
    e.preventDefault()
    console.log('submitting',  searchTerm)
    setSearchTerm(e.target.value)

}

const [searchTerm, setSearchTerm] = useState('')

    return (    
        <div
            className='rounded-3xl bg-white px-4 w-1/2 flex items-center'
            type="input"
            placeholder="Search"
        >
            <input 
                className='w-full p-2'
                type="search"
                placeholder="search..."
                // value=""
                onChange={onChange}
            />
            <div>
                <SearchIcon 
                    className='text-red-500'
                    type="button"
                    onClick={onSubmit}
            />
            </div>
    </div>
    )
}


export default SearchBar