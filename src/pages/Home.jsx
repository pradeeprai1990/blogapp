import React from 'react'
import Header from '../common/Header'
import { bloglist } from '../Data/BlogData'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  
 let finalBlog=bloglist.map((items,index)=>{
    return(
        <BlogCards details={items}  key={index}/>
    )
 })

 let showToast=()=>{
  toast.warning("Wow so easy!");
 }

 let homeSlidersettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  autoplay:true,
  autoplaySpeed:1500,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};




  return (
    <div>
        

     


        <Header/>

        <div className='max-w-[1320px] mx-auto'>
            <Slider {...homeSlidersettings}>
            {finalBlog}
            
            </Slider>
        </div>


        <button onClick={showToast}>Show</button>
        <h1 className='text-[30px] py-6 text-center font-bold'>Our Blogs</h1>
        <div className='max-w-[1320px] mx-auto py-7 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-[20px]'>
         
          {finalBlog}
           
        </div>

        <ToastContainer />

      

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