import React, { useState } from 'react'
import styles from "./style.module.css"
// import dataGlasses from "./data.json"

function Glasses() {

  const [glassesUrl, setGlassesUrl] = useState("./img/v9.png");
  
  return (
    <div className={styles.background}>

      <h3 style={{ backgroundColor: 'rgba(0,0,0,.3)' }} className='text-center text-white p-3 '>TRY CLASSES APP ONLINE</h3>
      <div className='position: relative' >

        <img className={styles.style_imgModel} src="./img/model.jpg" alt="Model" />
        <img className={styles.style_imgProduct} src={glassesUrl} alt="" />
        <div>
          <h5>{glassesUrl.name}</h5>
          <p>{glassesUrl.desc}</p>
        </div>

      </div>

      <div className=' d-flex justify-content-center p-3  '>
        <span className="" onClick={() => setGlassesUrl("./img/v1.png")}>
          <img className={styles.style_imgItem} src="./img/g1.jpg" alt="" />
        </span>

        <span className=" " onClick={() => setGlassesUrl("./img/v2.png")}>
          <img className={styles.style_imgItem} src="./img/g2.jpg" alt="" />
        </span>

        <span className="  " onClick={() => setGlassesUrl("./img/v3.png")}>
          <img className={styles.style_imgItem} src="./img/g3.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v4.png")}>
          <img className={styles.style_imgItem} src="./img/g4.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v5.png")}>
          <img className={styles.style_imgItem} src="./img/g5.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v6.png")}>
          <img className={styles.style_imgItem} src="./img/g6.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v7.png")}>
          <img className={styles.style_imgItem} src="./img/g7.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v8.png")}>
          <img className={styles.style_imgItem} src="./img/g8.jpg" alt="" />
        </span>
        <span className="  " onClick={() => setGlassesUrl("./img/v9.png")}>
          <img className={styles.style_imgItem} src="./img/g9.jpg" alt="" />
        </span>
      </div>




    </div>


  )
}

export default Glasses
