import { useEffect, useState } from "react";
import Header from "./components/Header"
import axios from "axios"
import Card from "./components/Card";

function App() {

  const [product,setProduct] = useState([]);

  const fetchData = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    setProduct(data)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <div className="card-component" style={{display:"flex", flexWrap:"wrap"}}>
      {
        product.map((item) => (
          <Card key={item.id} item={item}/>
        ))
      }
      </div>
    </>
  )
}

export default App;
