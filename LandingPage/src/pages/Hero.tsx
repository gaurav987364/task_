import { HiMenu } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className="h-[80vh] max-sm:h-[100vh] bg-black text-white relative overflow-hidden">
      {/* Geometric line patterns in background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="0" r="550" fill="none" stroke="rgb(232, 230, 237)" strokeWidth="2" strokeDasharray="10,5" transform="translate(500,-50)" />
          <circle cx="200" cy="0" r="350" fill="none" stroke="rgb(232, 230, 237)" strokeWidth="2" strokeDasharray="10,5" transform="translate(500,-50)" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4">
        <div className="flex items-center">
          <HiMenu size={32} className="text-white text-2xl mr-4" />
        </div>

        <div className="flex items-center">
          <div className="bg-white text-black rounded-full px-4 py-2 flex items-center">
            <div className="w-6 h-6 bg-black rounded-full mr-2 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-sm sm:text-base">optodoce</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button className="bg-white px-4 sm:px-5 py-1.5 rounded-full text-black transition-colors font-semibold text-sm sm:text-base">
            Log in
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 sm:px-5 py-1.5 rounded-full hover:from-blue-600 hover:to-orange-600 transition-colors font-semibold text-sm sm:text-base">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6">
        {/* Left AI Brain Image Placeholder */}
        <div className="absolute left-4 sm:left-10 md:left-20 top-1/2 transform -translate-y-1/2">
          <div className="w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-46 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-10 sm:opacity-80 flex items-center justify-center overflow-hidden">
            <img src="/hero1.png" alt="left_image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Cyborg Image Placeholder */}
        <div className="absolute right-4 sm:right-10 md:right-20 top-[60%] transform -translate-y-1/2">
          <div className="w-32 sm:w-40 md:w-44 h-44 sm:h-56 md:h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 opacity-10 sm:opacity-80 flex items-center justify-center overflow-hidden">
            <img src="/hero2.jpg" alt="right_image" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Best AI Content Platform</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-orange-500 bg-clip-text text-transparent font-normal">
              Image Generate
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-tight">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>

          {/* Search/Generate Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 px-4">
            <div className="bg-gray-800 rounded-full flex items-center w-full max-w-2xl px-4 py-2">
              <input
                type="text"
                placeholder="An Astronaut riding a horse on Mars, HD"
                className="bg-transparent text-white placeholder-gray-400 w-full outline-none px-2 py-2 text-sm sm:text-base"
              />
              <button className="bg-gradient-to-r from-blue-500 via-blue-700 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-200">
                Generate Now
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-semibold">
            <span className="text-gray-300 font-medium text-lg sm:text-xl">Popular tags:</span>
            {["Creative", "Sport", "Animation", "Fantasy"].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
