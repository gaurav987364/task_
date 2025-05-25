const OurPage = () => {
  return (
    <>
    <section className="relative w-full min-h-[100vh] bg-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
        {/* Large faded background text */}
        <h1 className="absolute bottom-0 left-4 sm:left-8 lg:left-20 text-[20vw] sm:text-[15vw] font-bold text-gray-100 z-0 pointer-events-none select-none">
            MISSION
        </h1>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe in serving quality services which can meet customer requirements.
                Our vision is to bring out the best in people, technology, and processes with
                top-notch quality. We build customer experience. Our mission is to place a consistent
                innovation to bring about an ultimate crest of triumph as our service.
            </p>
            </div>

           {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
            <img
                src="/ourpage_img.png" // Replace with your actual image path
                alt="Mission Illustration"
                className="w-[55%] max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
            </div>
        </div>
    </section>
    </>
  )
}

export default OurPage;