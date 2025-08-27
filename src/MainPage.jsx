// import { useState } from "react"

const MainPage = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* HEADER */}
      <header className="w-full bg-neutral-950 text-white">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-[60px]">
          {/* Logo */}
          <div className="flex items-center">
            <img src="src/assets/logo.svg" alt="Logo" className="h-[40px] w-auto" />
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className=" sm:hidden md:flex space-x-6 text-[16px] ">
            <a href="#home" className="hover:text-orange-700 font-medium">Home</a>
            <a href="#about" className="hover:text-orange-700 font-medium">About</a>
            <a href="#services" className="hover:text-orange-700 font-medium">Services</a>
            <a href="#portfolio" className="hover:text-orange-700 font-medium">Portfolio</a>
          </nav>

          {/* Mobile Menu Button */}
          {/* <div className="">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Mobile Nav Dropdown */}
        {/* {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 px-4 pb-4 space-y-2 text-white">
            <a href="#home" className="block py-2 text-white hover:text-orange-700">Home</a>
            <a href="#about" className="block py-2 text-white hover:text-orange-700">About</a>
            <a href="#services" className="block py-2 text-white hover:text-orange-700">Services</a>
            <a href="#portfolio" className="block py-2 text-white hover:text-orange-700">Portfolio</a>
          </div>
        )} */}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* Add your page content here */}
        <div className="main-content1 bg-[url(src/assets/hero_bg.jpeg)]  pt-[200px] min-h-[880px] static ">
          <div className=" mx-[105.5px] px-3  ">

            <div className="cs_herotitle text-white  text-[100px] font-semibold mb-[60px]">
              <h1 className="mb-[20px]">
                Creativity In
                <br />
                Our Blood Line
              </h1>

            </div>



            <div className="cs_info flex justify-between items-center w-full px-4">
              {/* Left Section */}
              <div className="flex items-center text-white font-['Open_Sans'] text-[16px]">
                <a
                  href="/#"
                  className="hover:underline decoration-orange-700 hover:text-orange-700"
                >
                  Get a Quote
                </a>
                <div className="ml-[15px] text-[24px] hover:text-orange-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Section */}
              <div className="cs_subtitle text-white  text-[18px]  max-w-[528px] ">
                We deliver best problem solving solution for our client and provide
                finest finishing product in present and upcoming future.
              </div>
            </div>

          </div>

        </div>
        <div className="main-content2 mx-[105.5px] px-[12px] bg-neutral-950  max-w-[1140px] rounded-lg -mt-[130px] absolute right-0 left-0">
          <div className="cs_funfact text-white   flex grid-cols-2 gap-2 items-start p-8  md:flex-row bg-[url(src/assets/funfact_shape_bg.svg)]  ">
            {/* Left Section */}
            <div className="cs_funfact-left mb-8 md:mb-0 md:mr-12">
              <h2 className="text-white text-[42px] font-bold mb-4">Our fun fact</h2>
              <p className="text-gray-300 text-[16px] max-w-[360px] leading-[1.75em]">
                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          

            {/* Right Section */}
            <div className="cs_funfact-right grid grid-cols-2 gap-x-12 gap-y-6 text-right">

              {/* 40K Clients */}
              <div className="flex items-center">
                <div className="text-white text-[42px] font-bold mr-3">40K</div>
                <div className="text-right">
                  <div className="text-orange-700 text-[18px] font-[800] -mt-[8px] -mb-[5px] ">+</div>
                  <p className="text-gray-300 text-[16px] min-w-42">Global Happy Clients</p>
                </div>
              </div>

              {/* 50K Projects */}
              <div className="flex items-center justify-end">
                <div className="text-white text-[42px] font-bold mr-3">50K</div>
                <div className="text-right">
                  <span className="text-orange-700 text-[18px] font-[800] -mt-[8px] -mb-[5px] ">+</span>
                  <p className="text-gray-300 text-[16px] min-w-38">Project Completed</p>
                </div>
              </div>

              {/* 245 Team Members */}
              <div className="flex items-center justify-end">
                <div className="text-white text-[42px] font-bold mr-3">245</div>
                <div className="text-right">
                  <span className="text-orange-700 text-[18px] font-[800] -mt-[8px] -mb-[5px] ">+</span>
                  <p className="text-gray-300 text-[16px] min-w-32">Team Members</p>
                </div>
              </div>

              {/* 550 Digital Products */}
              <div className="flex items-center justify-end">
                <div className="text-white text-[42px] font-bold mr-3">550</div>
                <div className="text-right">
                  <span className="text-orange-700 text-[18px]  -mt-[8px] -mb-[5px] font-[800] ">+</span>
                  <p className="text-gray-300 text-[16px] min-w-33">Digital Products</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full  bg-neutral-800 text-white">

        <div className="main-footer pt-[95px] pb-[35px] grid grid-cols-2 gap-2">
          <div className="container max-w-[1140px] ">
            <div className="row grid grid-cols-4 gap-4  ">
              <div className="col-1 px-[12px]">
                <div className="col1-item ">
                  <img src="src/assets/logo.svg" alt="Logo" className="h-auto " />
                  <p className="m-0 mt-[30px] max-w-[800px]">Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
                </div>
                <div className="cs_socialbtn flex justify-between mt-[25px] -mr-[7px] -mb-[7px]">
                  <div className="btn1 ">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--fa6-brands"
                        width="0.88em"
                        height="1em" viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z">
                        </path></svg>
                    </a>
                  </div>
                  <div className="btn2">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--fa6-brands" width="1em" height="1em"
                        viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253">
                        </path></svg>
                    </a>
                  </div>
                  <div className="btn3">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--fa6-brands"
                        width="1.13em" height="1em" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"></path></svg>
                    </a>
                  </div>
                  <div className="btn4">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--fa6-brands"
                        width="0.88em" height="1em" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1s21.16-47.06 47.06-47.06h47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06S448 171 448 196.9s-21.16 47.06-47.06 47.06h-47.06zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06S309 480 283.1 480s-47.06-21.16-47.06-47.06v-47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06s21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className=" mx-[105.5px] px-[12px] sm:flex-row justify-between items-center text-[16px]  " >
          {/* Left */}
           <div className="flex justify-between py-[20px] border-t-2 border-neutral-700">
          <div className="py-[4px] ">
            Coypright © 2025 Laralink.
          </div>

          {/* Right */}
          <div className="py-[4px]">
          <ul className="flex space-x-2 ">
            <li>
              <a href="#" className="hover:text-gray-300 ">Terms of Use</a>
            </li>
            |
            <br />
            <li>
              <a href="#" className="hover:text-gray-300 px-2">Privacy Policy</a>
            </li>
          </ul>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
