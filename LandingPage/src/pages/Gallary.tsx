const Gallary = () => {
  return (
     <section className="bg-black text-white px-4 md:px-10 lg:px-20 py-16">
      <div className=' w-full flex items-center justify-center'>
        <span className=' text-center bg-[#6A41FB33] px-4 py-1 rounded-full'>Recently Created</span>
      </div>
      {/* === Heading === */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
        Create anything with{' '}
        <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          Optpdoce
        </span>{' '}
        AI
      </h2>

      {/* === Filters === */}
      <div className="flex justify-center gap-6 text-gray-300 text-sm md:text-base mb-10">
        {['All', 'Cartoon', 'Realistic', '3D'].map((label, i) => (
          <button
            key={i}
            className={`hover:text-white transition ${label === 'All' ? 'text-white font-semibold' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* === Custom Image Grid === */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[250px]">
        {/* Image 1 - Tall left */}
        <div className="row-span-2 col-span-1 overflow-hidden rounded-2xl">
          <img
            src="/sec3_1.png"
            alt="AI Generated 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/sec3_2.png"
            alt="AI Generated 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/sec3_3.png"
            alt="AI Generated 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Tall right */}
        <div className="row-span-2 col-span-1 overflow-hidden rounded-2xl">
          <img
            src="/sec3_4.png"
            alt="AI Generated 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 - Below image 2 and 3 */}
        <div className="col-span-2 overflow-hidden rounded-2xl">
          <img
            src="/sec3_5.png"
            alt="AI Generated 5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=' w-full flex items-center justify-center mt-5'>
        <span className=' text-center bg-gradient-to-r from-blue-500 to-orange-500 text-white px-5 py-1.5 rounded-full hover:from-blue-600 hover:to-orange-600'>Go to our AI gallary</span>
      </div>
    </section>
  )
}

export default Gallary;