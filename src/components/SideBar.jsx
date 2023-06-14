import React from 'react'

import { categories } from '../Utils/constants'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

//TODO - Check linter setup to remove linting errors for props.


const SideBar = ( {selectedCategory, setSelectedCategory} ) => (

    <div className='overflow-auto flex flex-row md:flex-col justify-around h-auto mb-4 md:h-screen md:mb-0'>
        {categories.map((category) => {
            return (
                <button 
                    key={category.name}
                    onClick={() => (setSelectedCategory(category.name))}
                    className={"hover:bg-red-900 rounded-xl mx-2 md:my-2 md:mx-0 flex items-center text-xs font-bold w-full " + (category.name === selectedCategory ? "bg-red-700" : "") }
                >
                    <div className='flex w-full'>
                        <div className={"px-2 py-1 " + (category.name === selectedCategory ? "text-white" : "text-red-700")}>
                            <GraphicEqIcon/>
                        </div>
                        <div className={"my-auto mr-2 " + (category.name === selectedCategory ? "" : "text-white opacity-[0.5]")}>
                            {category.name ?? ''}
                        </div> 
                    </div>
                </button>
            )
        })}
    </div>
)

export default SideBar