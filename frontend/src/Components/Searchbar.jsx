import React from "react";

function SearchBar(){
    return(<div className=" max-w-screen-xl m-4">
                    <div className='max-w-md mx-auto'>
                        <div className="relative flex items-center w-full h-12  rounded-lg border  ">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                </svg>
                            </div>
                            <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." /> 
                        </div>
                    </div>
                </div>
    );
}
export default SearchBar;