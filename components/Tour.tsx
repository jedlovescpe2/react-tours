import { useState } from "react";

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeTour
}: {
  id:string;
  name: string;
  info: string;
  image: string; 
  price: string;
  removeTour: (id:string)=>void
}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <li className="single-tour">
      <img className="img" width={400} src={image} alt={name} />
      <p className="tour-price">{price}</p>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {!isToggle ? info.substring(0, 100) + '... ' : info}<br/>
          <button className="info-btn" onClick={()=>(setIsToggle(!isToggle))}>{isToggle ? ' Show Less' : ' Read More'}</button>
        </p>
        <button className="btn btn-block delete-btn" type="button" onClick={()=>removeTour(id)}>
          remove tour
        </button>
      </div>
    </li>
  );
};
export default Tour;
