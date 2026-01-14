import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import MemoryCard from "../components/MemoryCard";


const Home = () => {

  const [ isRateLimited, setIsRateLimited ] = useState(false);
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "http://localhost:5050/api/memories";
  
  useEffect(() => {
    const fetchMemories = async() => {
      try {
        const memos = await axios.get(api);
        const data = memos.data;
        // console.log(data);
        setMemories(data);
        setIsRateLimited(false);
      } catch(error) {
        console.log("Error fetching memories");
        if(error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load memories");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMemories();
  }, []); 

  return (
    <div className="min-h-screen ">
      <Navbar />
      
      {/* Rate Limited State */}
      {isRateLimited && <RateLimit />}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Loading State */}
        {loading && <Loading />}
        
        {!loading && memories.length === 0 && !isRateLimited && (
          <div className="flex flex-col items-center justify-center py-16 md:py-24">
            <div className="text-center max-w-md">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center opacity-20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                No Memories Yet
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6">
                Start capturing your precious moments by creating your first memory.
              </p>
              <a 
                href="/create"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Your First Memory
              </a>
            </div>
          </div>
        )}
        
        {memories.length > 0 && !isRateLimited && (
          <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {memories.map((memo) => (
                <MemoryCard key={memo._id} memo={memo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home