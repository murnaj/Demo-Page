import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainPage from './MainPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
 
   <div className=''>

    <Routes>
          <Route path="mainpage" element={<MainPage />} />   
        </Routes>

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

   </div>
   </>
  )
}

export default App