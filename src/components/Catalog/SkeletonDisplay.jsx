import Skeleton from 'react-loading-skeleton';
import React from 'react'

let SkeletonDisplay = ({foodContent}) => {

return(

<div className="container row col-lg-4 col-md-6 col-10 p-3">

    <div className="col-6">

    <Skeleton height={35} />

    <Skeleton circle  height={55}  width={55}/> 

      <Skeleton className="col-6"/>
      <Skeleton  className="col-6" />
      <Skeleton  className="col-6" />
    </div>

    <div className="col-6">

    <Skeleton style={{height: "120px", objectFit: "cover", borderRadius: "20px", marginTop: "20px"}}/>

    </div>


</div>


  )
}

export default SkeletonDisplay;