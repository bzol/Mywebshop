import React from 'react'
import { Img } from './image_style';

const Image = (props) => {
  
  const image_loc = "/static/images/" + props.image;
  return (
    <div>
      {console.log(props.image)}
      <Img src={image_loc}/>
    </div>
  )
}
export default Image
