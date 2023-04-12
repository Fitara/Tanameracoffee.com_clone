export default function Sidebar() {
    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-42 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 text-xs dark:bg-blue-800">
                <a className="flex flex-col items-center">
                    <img src="https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png" className="h-[150px] w-[150px]" alt="Flowbite Logo" />
                </a>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img className="w-[24px]" style={{filter: 'invert(1)',}} src="https://img.icons8.com/fluency-systems-regular/256/home.png" alt="" />
                        <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img className="w-[24px]" style={{filter: 'invert(1)',}} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/256/external-tag-interface-kiranshastry-lineal-kiranshastry.png" alt="" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img className="w-[24px]" style={{filter: 'invert(1)',}} src="https://img.icons8.com/fluency-systems-regular/256/add-user-male.png" alt="" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Register Admin</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img className="w-[22px] ml-1" style={{filter: 'invert(1)',}} src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/256/external-online-account-logout-with-arrow-direction-mark-login-regular-tal-revivo.png" alt="" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>
        </>
    )
}