import AxiosInstance from "../Axios/AxiosInstance";
import React, { useState } from "react";

const Products = () => {
    let [data,setData]=useState({
        name : "",
        desc: "",
        review : "",
        price :""
    })
let {name,desc,review,price}=data
    let handleData=(e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        AxiosInstance.post("/products",data)
        alert("ADDED")
    }
  return (
    <div>
    <h1>PRODUCTS</h1>
    <form onSubmit={handleSubmit}>
        <label>PRODUCT NAME</label>
        <input name="name" onChange={handleData}/>
        <br/>
        <br/>
        <label>PRODUCT DESCRIPTION</label>
        <input name="desc" onChange={handleData}/>
        <br/>
        <br/>
        <label>PRODUCT REVIEW</label>
        <input name="review" onChange={handleData}/>
        <br/>
        <br/>
        <label>PRODUCT PRICE</label>
        <input name="price" onChange={handleData}/>
        <br/>
        <br/>
        <button>SUBMIT</button>
    </form>
    </div>
  )
}

export default Products