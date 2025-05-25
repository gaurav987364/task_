import { BsStars } from 'react-icons/bs';

const SectionThree = () => {
  return (
   <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 p-6 md:p-12 lg:p-20">
      {/* === Left Image Section === */}
     <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] lg:w-1/2 rounded-[32px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#a78bfa] to-[#c084fc] rounded-[32px] z-0" />

      {/* PNG image overlay */}
      <img
        src="/women.png"
        alt="AI Woman"
        className="absolute inset-0 w-full h-full object-cover rounded-[32px] z-10 opacity-90"
      />
    </div>


      {/* === Right Content Section === */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
        {/* Label */}
        <span className="bg-purple-100 text-purple-700 text-xs font-medium px-4 py-1 rounded-full mb-4">
          Introduce optpdoce AI
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 w-[75%]">
          Unlocking the Power of <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-orange-500 bg-clip-text text-transparent">AI for a Smarter </span> Future
        </h1>

        {/* Image Gallery */}
        <div className="flex items-center gap-3 mb-6">
          {[1, 2, 3].map((item) => (
            <img
              key={item}
              src={`/gal${item}.png`}
              alt="Gallery thumbnail"
              className="w-26 h-26 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* CTA & Description */}
        <div className="flex items-start gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Try Now
          </button>

          <div className="flex items-start gap-2 text-sm text-gray-600 max-w-xs">
            <BsStars size={60} className="text-purple-500 mt-1" />
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree;