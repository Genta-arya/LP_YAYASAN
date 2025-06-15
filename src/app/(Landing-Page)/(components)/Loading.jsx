import React from 'react'

const Loading = () => {
  return (
 <>
        {" "}
        <div className="w-full flex flex-col items-center justify-center  h-screen">
          <div className="w-1/2 h-2 bg-green-300 rounded-full overflow-hidden relative">
            <div className="absolute h-full bg-green-600 rounded-full animate-progress w-1/3"></div>
          </div>
          <p className="mt-4 text-green-700 font-semibold text-sm">
            Tunggu sebentar...
          </p>

          {/* Animation CSS */}
          <style jsx>{`
            @keyframes progress {
              0% {
                left: -33%;
              }
              50% {
                left: 50%;
              }
              100% {
                left: 100%;
              }
            }
            .animate-progress {
              animation: progress 1.5s infinite ease-in-out;
            }
          `}</style>
        </div>
      </>
  )
}

export default Loading