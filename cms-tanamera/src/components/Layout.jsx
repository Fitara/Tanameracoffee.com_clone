import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <Search />
            <Sidebar />
            <Outlet />
        </>
    )
}