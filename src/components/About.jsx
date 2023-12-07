import React from 'react'

export default function About(props) {
  return (
    <>
         <div className="py-2 px-4 mx-auto w-screen h-[1000px]" style={props.myStyle}> 
         <div className='w-fit absolute top-28'>
          <h2 className="mb-4 text-4xl font-extrabold text-center"> 
              About Us 
          </h2> 
          <p className="mb-4 font-light text-left sm:text-xl"> 
          We are a team of passionate developers dedicated to creating high-quality software solutions. We love what we do and are always looking for opportunities to learn and grow. 
          </p> 
          <p className="mb-4 font-light text-left sm:text-xl"> 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia omnis facilis cupiditate repellendus ea illo amet id praesentium hic quibusdam ad cumque necessitatibus autem excepturi soluta animi, unde blanditiis veritatis eveniet commodi!          </p> 
          <p className="mb-4 font-light text-left sm:text-xl"> 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique error exercitationem officia tempora incidunt enim cupiditate obcaecati ipsam, accusantium esse distinctio voluptatibus, soluta nisi quos voluptates necessitatibus odio modi porro inventore adipisci corrupti repellendus harum eos! Corrupti porro velit autem aspernatur?          </p> 
         </div>
      </div> 
    </>
  )
}
