import { footerType, linkType } from '@/helpers/types'
import React from 'react'

const Footer = ({data}: {data: footerType}) => {
  return (
    <footer className='row-start-3 flex flex-col gap-3 flex-wrap 
    items-center justify-center bg-dark-primary text-dark-text py-5 text-sm sm:text-base'>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 text-center'>
        {data.links.map((link: linkType) => { 

          return <a href={link.url} target='_blank' className='opacity-70 hover:opacity-100 underline' key={link.id}>{link.title}</a>})}
      </div>
      <span className='opacity-70'>© 2025. All rights reserved.</span>
    </footer>
  )
}

export default Footer