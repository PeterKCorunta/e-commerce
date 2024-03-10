import React from 'react'

function Testimonials({testimonial, slidepic}) {
  return (
    <div className='slide'>
        <h3 className='slide_id'>{testimonial.id} - {testimonial.desc} - {testimonial.author}</h3>
        <div className='slide_content'>
            <img className='slide_pic' alt={`slide${testimonial.id}`} src={slidepic}></img>
            <h1 className='slide_desc'>{testimonial.desc}</h1>
        </div>
    </div>
  )
}

export default Testimonials