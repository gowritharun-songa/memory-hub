import { ZapIcon } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-4 flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 transform hover:scale-105 transition-transform duration-300">
          {/* Icon Container */}
          <div className="flex justify-center mb-6">
            <div className="bg-linear-to-br from-purple-500 to-blue-500 rounded-full p-4 shadow-lg animate-pulse">
              <ZapIcon className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              Rate Limit Reached
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-sm md:text-base text-gray-500 bg-purple-50 rounded-lg px-4 py-3 border border-purple-100">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;