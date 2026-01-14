import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              Memory <span className="text-purple-200">HUB</span>
            </h3>
          </div>

          {/* Create Button */}
          <div>
            <Link 
              to={"/create"}
              className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 md:px-6 md:py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-purple-50 active:scale-95"
            >
              <PlusIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">Create</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;