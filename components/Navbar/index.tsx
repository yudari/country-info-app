import React from 'react'

function index({ colorTheme, setTheme }: any) {
    return (
        <div className="navbar w-full shadow-md">
            <div className="container-navbar w-4/5 flex flex-row justify-between items-center py-4  mx-auto">
                <h1 className="font-bold text-2xl text-very-dark-blue-text">Where in the world?</h1>
                <div className="mode-toggle-container flex flex-row items-center gap-1">
                    {colorTheme === "light" ? (
                        <>
                            <h3 className="text-very-dark-blue-text">Light Mode</h3>
                            <svg
                                onClick={() => setTheme("light")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-very-dark-blue-text"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </>

                    ) : (
                        <>
                            <h3 className="text-white">Dark Mode</h3>
                            <svg
                                onClick={() => setTheme("dark")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </>

                    )}
                </div>
            </div>
        </div>
    )
}

export default index