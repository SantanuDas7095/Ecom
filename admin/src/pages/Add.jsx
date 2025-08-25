import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const numberInputOnWheelPreventChange = (e) => {
  // Prevent the input value change
  e.target.blur()

  // Prevent the page/container scrolling
  e.stopPropagation()

  // Refocus immediately, on the next tick (after the current function is done)
  setTimeout(() => {
  e.target.focus()
  }, 0)
}

const Add = ({token}) => {

  const [image1 , setImage1] = useState(false)
  const [image2 , setImage2] = useState(false)
  const [image3 , setImage3] = useState(false)
  const [image4 , setImage4] = useState(false)

  const [name , setName] = useState("");
  const [description , setDescription] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState("Weaving");
  const [state , setState] = useState("Tripura");
  const [bestseller , setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("state",state)
      formData.append("bestseller",bestseller)

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + '/api/product/add', formData,{headers:{token}})
      
      if (response.data.success) {

        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')

      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3' >

      <div>

        <p className='mb-2' >Upload Image</p>
        <div className='flex gap-2' >

          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={ (e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={ (e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={ (e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className='w-20'  src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={ (e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>

        </div>

      </div>

      <div className='w-full' >
        <p className='mb-2' >Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type Here' required />
      </div>

      <div className='w-full' >
        <p className='mb-2' >Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type Here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8' >

        <div>

          <p className='mb-2'>Product Category</p>

          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Weaving">Weaving</option>
            <option value="Bamboo">Bamboo</option>
            <option value="Cane">Cane</option>
            <option value="Pottery">Pottery</option>
            <option value="Terracotta">Terracotta</option>
            <option value="Wood_Carving">Wood Carving</option>
          </select>

        </div>

        <div>

          <p className='mb-2'>Product State</p>

          <select onChange={(e) => setState(e.target.value)} className='w-full px-3 py-2'>
            <option value="ArunachalPradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tripura">Tripura</option>
          </select>

        </div>

        <div>

          <p className='mb-2'>Product Price</p>
          <input onWheel={numberInputOnWheelPreventChange} onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ' type="Number" placeholder="Price" ></input>

        </div>

      </div>

      <div className='flex gap-2 mt-2' >
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} value={name} type="checkbox" id='bestseller' />
        <label className=' cursor-pointer ' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white' >ADD</button>

    </form>

  )
}

export default Add
