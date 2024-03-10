import React from 'react'

function AccordionGuide({guideItem}) {
  return (
    <ol className='accordionGuide'>
        {guideItem.answer.map(i=>{
            return <li><h4>{i.tip}</h4></li>
        })} 
    </ol>
  )
}

export default AccordionGuide