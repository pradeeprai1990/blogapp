import React from 'react'
import Header from '../common/Header'
import { bloglist } from '../Data/BlogData'
import { Link } from 'react-router-dom'

export default function Home() {
  
 let finalBlog=bloglist.map((items,index)=>{
    return(
        <BlogCards details={items}  key={index}/>
    )
 })

  return (
    <div>
        <Header/>
        <h1 className='text-[30px] py-6 text-center font-bold'>Our Blogs</h1>
        <div className='max-w-[1320px] mx-auto py-7 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-[20px]'>
         
          {finalBlog}
           
        </div>
    </div>
  )
}


function BlogCards({details}){
    return(
        <div className='shadow-lg pb-3'>
        <img src={details.image}/>
        <h3 className='text-center py-[10px] bg-yellow-700 text-white'>
            {details.title}
        </h3>
        <Link to={`/blog-details/${details.id}`}>
        <button className='bg-[blue] text-white p-[5px] mx-auto block mt-3'>Read More</button>
        </Link>
    </div>
    )
}