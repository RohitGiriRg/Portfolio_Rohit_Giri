import React, { useState } from 'react'
import { ShimmerButton,ShimmerText, ShimmerTable,ShimmerCircularImage, ShimmerTitle, ShimmerSectionHeader, ShimmerSimpleGallery, ShimmerPostList, ShimmerCategoryItem } from "react-shimmer-effects";
import "./ShimmerEffect.styles.css";
import useDarkMode from '@fisch0920/use-dark-mode';

const ShimmerEffect = () => {
  //  const [darkmodestate, setDarkmodesate] = useState(false);
  //  const darkMode = useDarkMode(false);
  // const handleDarkmode = () => {

  //       if(darkmodestate){

  //           setDarkmodesate(false);
  //       }else{
  //           setDarkmodesate(true);
  //       }

  //   }
  return (
            <>
                 
                    <div className='shimmerCard' >
                      <ShimmerButton size='lg' rounded  /> 
                       <ShimmerText line={3} size='lg' rounded />
                         <div className="d sub-heading-dark">
                            <ShimmerButton size='md' rounded  />
                            <ShimmerButton size='md' rounded  />  
                          </div>                        
                    </div>

                    <div className="shimmerCircle">

                        <ShimmerCircularImage size={290}  center/>
                    </div>
                       <div></div>

</>
                 
  )
}

export default ShimmerEffect
