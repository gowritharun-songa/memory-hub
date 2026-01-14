import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/utils.js"

const MemoryCard = ({memo}) => {
  return (
    <div className="group">
      <Link to={`/memory/${memo._id}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 cursor-pointer">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
            {memo.title}
          </h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {memo.content}
          </p>
          
          {/* Card Actions Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {/* Date */}
            <span className="text-xs md:text-sm text-gray-500 font-medium">
              {/* {memo.createdAt} */}
              {formatDate(new Date(memo.createdAt))}
            </span>
            
            <div className="flex items-center gap-2">
              <button 
                className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Edit memory"
              >
                <PenSquareIcon className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <button 
                className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Delete memory"
              >
                <Trash2Icon className="w-4 h-4 md:w-5 md:h-5"/>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MemoryCard