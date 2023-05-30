import Tour from "./Tour";

const Tours = ({
  tours,
  removeTour
}: {
  tours: {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  }[], removeTour:(int:string)=>void
}) => {


  // const [tours, setTours] = useState(data)

 

  if(!tours) return <div className="alert alert-danger">No tour loaded.</div>

  return (

    (tours && <section>

      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"/>
      </div>
      
      <ul className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour.bind(this)}/>;
        })}
      </ul>

    </section>)

    )
};
export default Tours;
