const GridSection = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* === Left Section === */}
        <div className="space-y-8 order-2 lg:order-1">

        {/* Fantasy Island Image */}
        <div className="rounded-3xl overflow-hidden bg-gray-800">
            <div className="w-full h-64 sm:h-80 lg:h-[420px] bg-gradient-to-br from-blue-600 via-teal-500 to-orange-400 flex items-center justify-center overflow-hidden">
            <img src="/sec2_1.png" alt="1_image" className=' w-full h-full object-cover'/>
            </div>
        </div>

        {/* Text Content + Button + Stats */}
        <div className="space-y-8">
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
            We're passionate about empowering creatives with the tools they need to{' '}
            <span className="text-gradient-to-r from-purple-400 via-pink-400 to-orange-300 font-semibold">bring their vision</span>{' '}
            to life that's why we've developed
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-5 py-3 hover:from-blue-600 hover:to-orange-600  rounded-full font-semibold text-sm sm:text-base transition-all">
                Get Started
            </button>
            <div>
                <div className="text-3xl sm:text-4xl font-bold">100k+</div>
                <div className="text-gray-400 text-sm sm:text-base">Happy Customer</div>
            </div>
            </div>
        </div>
        </div>

        {/* === Right Section === */}
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2 h-full">

            {/* AI Cat Portrait */}
            <div className="rounded-3xl overflow-hidden">
                <div className="w-full h-40 sm:h-48 lg:h-[180px] xl:h-[300px] bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 flex items-center justify-center overflow-hidden">
                <img src="/sec2_2.png" alt="2_image" className=' w-full h-full object-cover'/>
                </div>
            </div>

            {/* Element Circle */}
            <div className="rounded-3xl overflow-hidden">
                <div className="w-full h-40 sm:h-48 lg:h-[180px] xl:h-[300px] bg-gradient-to-br from-orange-500 via-blue-500 to-teal-400 flex items-center justify-center overflow-hidden">
                <img src="/sec2_3.png" alt="3_image" className=' w-full h-full object-cover'/>
                </div>
            </div>

            {/* Cyberpunk Character (spans 2 columns) */}
            <div className="col-span-2 rounded-3xl overflow-hidden">
                <div className="w-full h-48 sm:h-56 lg:h-[250px] xl:h-[280px] bg-gradient-to-br from-teal-600 via-blue-600 to-purple-500 flex items-center justify-center overflow-hidden">
                <img src="/sec2_4.png" alt="4_image" className=' w-full h-full object-cover'/>
                </div>
            </div>

            </div>
    </div>
    </div>
  )
}

export default GridSection;