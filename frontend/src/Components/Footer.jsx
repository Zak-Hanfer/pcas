import React from 'react';

function Foota() {
    const year = new Date().getFullYear();
    return(
        <section className="bg-PrincipalCol">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center mx-5 my-2">
                    <div className="px-5 py-2">
                        <a href="/" className="leading-6 text-white hover:text-gray-700">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/" className="text-base leading-6 text-white hover:text-gray-700">
                            Team
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/" className="text-base leading-6 text-white hover:text-gray-700">
                            Pricing
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/" className="text-base leading-6  text-white hover:text-gray-700">
                            Contact
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/" className="text-base leading-6  text-white hover:text-gray-700">
                            Terms
                        </a>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="/" className="text-white hover:text-gray-700">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        </svg>
                    </a>
                    <a href="/" className="text-white hover:text-gray-700">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        </svg>
                    </a>
                    <a href="/" className="text-white hover:text-gray-700">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        </svg>
                    </a>
                    <a href="/" className="text-white hover:text-gray-700">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-white">
                     Copyright ⓒ {year}
                </p>
            </div>
        </section>
        );
}

export default Foota;