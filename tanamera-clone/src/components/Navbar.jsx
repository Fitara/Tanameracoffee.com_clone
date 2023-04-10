export default function Navbar() {
    return (
        <>
          <div className="navbar bg-base-100">
            <div className="navbar-start ml-10">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-sm btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                  </ul>
                </div>
              </div>
              <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">
                  <img className="w-[200px]" src="https://tanameracoffee.com/wp-content/uploads/2020/11/logo.png" alt="" />
                </a>
              </div>
              <div className="navbar-end mr-10">
                <button className="btn btn-sm btn-ghost btn-circle">
                  <div className="indicator w-[20px]">
                    <img src="https://img.icons8.com/ios-filled/256/search.png" alt="" />
                    <span className="indicator-item"></span>
                  </div>
                </button>
                <button className="btn btn-sm btn-ghost btn-circle">
                  <div className="indicator w-[20px]">
                    <img src="https://img.icons8.com/fluency-systems-regular/256/shopping-bag.png" alt="" />
                    <span className="indicator-item"></span>
                  </div>
                </button>
                <button className="btn btn-sm btn-ghost btn-circle">
                  <div className="indicator w-[20px]">
                    <img src="https://img.icons8.com/ios/256/geography.png" alt="" />
                    <span className="indicator-item"></span>
                  </div>
                </button>
                <button className="btn btn-sm btn-ghost btn-circle">
                  <div className="indicator w-[24px]">
                    <img src="https://img.icons8.com/external-ios-line-2px-amoghdesign/256/external-account-multimedia-line-30px-ios-line-2px-amoghdesign.png" alt="" />
                    <span className="indicator-item"></span>
                  </div>
                </button>
              </div>
          </div>
        </>
    )
}