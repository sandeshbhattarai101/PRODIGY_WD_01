import React from 'react'

export default function Home(props) {
  return (
    <>
    <div className="mainContainer w-screen h-[1000px] " style={props.myStyle}>
    <div className="subContainer overflow-x-hidden w-screen grid grid-cols-3 gap-x-28 justify-around absolute top-56  ">
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80  bg-[url('../../public/images/mountain1.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 shadow hover:shadow-2xl " style={{transition: '0.8s'}} ></div>
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80   bg-[url('../../public/images/mountain2.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 " style={{transition: '0.8s'}} ></div>
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80  bg-[url('../../public/images/mountain3.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 " style={{transition: '0.8s'}} ></div>
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80  bg-[url('../../public/images/mountain4.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 " style={{transition: '0.8s'}} ></div>
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80   bg-[url('../../public/images/mountain5.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 " style={{transition: '0.8s'}} ></div>
    <div className="images w-40 hover:w-48 h-60 hover:h-72 md:w-60 md-hover:w-64 md:h-80   bg-[url('../../public/images/mountain6.jpg')] bg- bg-center bg-no-repeat rounded-3xl m-10 " style={{transition: '0.8s'}} ></div>

   </div>
        

    </div>
    
    </>
  )
}
