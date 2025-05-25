import React from 'react'

const WWD = () => {
  return (
    <>
      <div className='mt-5 bg-white relative w-full min-h-screen'>
       <section className="relative w-full bg-white py-20 px-4 sm:px-8 lg:px-20 text-center overflow-hidden">
          {/* Background Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-[15vw] font-bold text-gray-100 z-0 pointer-events-none select-none whitespace-nowrap leading-none">
            WHAT WE DO
          </h1>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              What do we do to be remembered for?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
              To connect smart actions and execute them with laser-like focus is our success mantra.
              Exploring client’s business for online exposure is an ultimately worthy goal for us.
              We want to be a voice of client’s success.
            </p>
            <button className="px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 transition">
              GET IN TOUCH
            </button>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative w-full bg-white py-20 px-4 sm:px-8 lg:px-20">
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

            {/* Timeline Steps */}
            {[
              {
                title: 'LET’S HAVE A COFFEE:',
                description: 'Initiate a meeting to understand the requirements and goals of the client.',
                position: 'right',
                number: '01',
              },
              {
                title: 'PLAN FOR THE SUCCESS:',
                description: 'We analyze, design, develop and test the whole project with eagle vision.',
                position: 'left',
                number: '02',
              },
              {
                title: 'QUALITY SOLUTIONS:',
                description: 'For us, the quality solution is what brings clients success & exposure together.',
                position: 'right',
                number: '03',
              },
              {
                title: 'YOUR DREAMOUR GOAL:',
                description: 'We discover & innovate your dream with a look & feel, experience.',
                position: 'left',
                number: '04',
              }
            ].map((step, index) => (
              <div key={index} className="mb-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  {step.position === 'left' && (
                    <>
                      <div className="md:w-1/2 text-right md:pr-10">
                        <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                      </div>
                       <div className={`absolute top-[-30%] left-[55%] transform -translate-x-1/2 mt-4`}>
                        <p className="text-7xl text-gray-200 font-bold select-none">{step.number}</p>
                      </div>
                      <div className="md:w-1/2"></div>
                    </>
                  )}

                  {step.position === 'right' && (
                    <>
                      <div className="md:w-1/2"></div>
                        <div className={`absolute top-[-25%] left-[45%] transform -translate-x-1/2 mt-4`}>
                        <p className="text-7xl text-gray-200 font-bold select-none">{step.number}</p>
                      </div>
                      <div className="md:w-1/2 text-left md:pl-10">
                        <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-orange-400 to-pink-500 shadow-md z-10"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default WWD;
