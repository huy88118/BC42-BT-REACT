import React from 'react'
import Carditem from './Carditem'

function Card() {
  return (
   <section className="pt-4">
  <div className="container px-lg-5">
    <div className="row gx-lg-5">
    <Carditem/>
     <Carditem/>
      <Carditem/>
    <Carditem/>
     <Carditem/>
     <Carditem/>
    </div>
  </div>
</section>

  )
}

export default Card