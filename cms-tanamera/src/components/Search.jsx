export default function SearchComponent() {
    return (
        <form className="max-w mt-2 ml-48 mr-16">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-4 h-4 my-auto font-sm text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-1 pl-8 pr-4 text-sm text-gray-800 border rounded-sm outline-none bg-gray-50 focus:bg-white focus:border-orange-600"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-4 h-4 my-auto font-sm text-gray-400 right-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 14.343a8 8 0 10-11.314 0M15 18v2M9 18v2M15 22h.01M9 22h.01"
                    />
                    </svg>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-4 h-4 my-auto font-sm text-gray-400 right-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a4 4 0 004 4h8a4 4 0 004-4v-2M8 8v6m0 0V8m0 0h8m0-3a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            </div>
        </form>
    );
}