import AxiosInstance from "../Axios/AxiosInstance";
import React, { useEffect, useState } from "react";

const View = () => {

    let [data,setData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
         let data =await AxiosInstance.get("/products")
         setData(data.data )
        }
        fetchData()
    })
  return (
    <div>
        <h1>PRODUCT DETAILS</h1>
        {data.map((x,i)=>{
            return(
                <div key={i}>
                    <h1>{x.name}</h1>
                    <p>{x.desc}</p>
                    <p>{x.review}</p>
                    <h3>{x.price}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default View