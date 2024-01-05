import React,{useState} from 'react'
import {useEffect} from 'react'
 
import Loading from './Loading'
import Product from './Product'
function Cart() {
    const [product,setProduct]=useState([])
useEffect(
    ()=>{
     fetch('https://fakestoreapi.com/products')
     .then((res)=>res.json())
     .then(data=>setProduct(data))
        

    },[]
)

  return (
    <div className='container m-auto text-center'>
    <h1 style={{color:'#6f42c1'}}>Fake Store Api Cart</h1>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {product.length===0 ?
    <Loading /> 
    :product.map((item,index)=>{
return <Product key={index} item={item}/>
    })
    }
    </div>
    </div>
  )
}

export default Cart