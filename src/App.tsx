const url = 'https://course-api.com/react-tours-project';

import { useEffect, useState } from 'react';
import Tours from '../components/Tours';
import './index.css'
import Loading from '../components/Loading';



const App = () => {

  const [tours, setTours] = useState<any[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchTours = async() => {
    setIsLoading(true)
    try {
      const response = await fetch(url)

      if(!response.ok){
        setIsError(true)
        setIsLoading(false)
        return
      }

      const tours = await response.json();
      setTours(tours)
      
    } catch (error:any) {
      setIsError(true)
      throw new Error(error.message)
    }
    setIsLoading(false)
  }
  
  useEffect(()=>{
    fetchTours()
  },[])

  if(isLoading){
    return (
      <main><Loading/></main>
    )
  }

  if(tours.length===0){
    return (
      <main>
        <div className="title">
          <h2 style={{ marginBottom: '1rem' }}>no tours left</h2>
          
          <button className="btn" onClick={()=>fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  const removeTour = (id:string) => {
    const updatedTours = tours.filter(tour => tour.id !== id)
    setTours(updatedTours);
  }


  if(isError) return <div className="alert alert-danger">Error occured.</div>

  return  (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
};

export default App;
