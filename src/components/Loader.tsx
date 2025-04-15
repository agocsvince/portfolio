import React from 'react'

const Loader = ({className}: {className?: string}) => {
  return (
    <div className={`${className} w-full px-5 top-0 font-gothic absolute aspect-16/9 flex items-center justify-center bg-dark-primary/80 text-light-primary`}>
      <div className="relative flex flex-row border-2 sm:border-4 border-light-primary w-[85%] sm:w-[70%] text-center items-center justify-start">
        <div className="flex gap-1 justify-start p-1 sm:p-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
          key={index}
          className="w-2 h-4 sm:w-4 sm:h-8 bg-light-primary/50 animate-block-fade"
          style={{ animationDelay: `${index * 200}ms` }}
          />
        ))}
        </div>
        <div className="absolute w-full flex justify-center text-center text-sm sm:text-xl tracking-wider">
          <h1>Loading ...</h1>
        </div>
      </div>
    </div>
  )
}

export default Loader