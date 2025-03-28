import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto flex flex-col gap-4'>{children}</div>
  )
}

export default Container