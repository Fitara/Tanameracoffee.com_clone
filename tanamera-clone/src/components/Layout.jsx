import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom"
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            <div className="p-2">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}