import React from 'react'
import style from './Section.module.css'
const Section = () => {
    return (
        <div className={style.main}>
            <div className="content">
                <div className={StyleSheet.para_heading}>
                    <h1 className={style.heading}>
                        Furniture Folio
                    </h1>
                    <p className={style.para}>
                    Certainly! Creating engaging and informative content for a furniture website is crucial to attract and retain customers. Here's a sample content outline that you can use as a starting point
                    </p>
                </div>
                <div className={style.btn_class}>
                    <button className={style.btn}>BUY NOW!</button>
                </div>
            </div>
            <div className={style.img}>
                <img src = "./images/chair1.png" alt = "chair"></img>
            </div>

        </div>
    )
}

export default Section