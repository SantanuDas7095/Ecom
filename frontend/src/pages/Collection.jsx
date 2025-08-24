import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [state,setState] = useState([]);
  const [sortType,setSortType] = useState('relevant')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {

      setCategory(prev=> prev.filter(item => item !== e.target.value))

    }

    else{

      setCategory(prev => [...prev,e.target.value])

    }

  }

  const toggleState = (e) => {

    if (state.includes(e.target.value)) {

      setState(prev=> prev.filter(item => item !== e.target.value))

    }

    else{

      setState(prev => [...prev,e.target.value])

    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    if (category.length > 0) {

      productsCopy = productsCopy.filter(item => category.includes(item.category));
      
    }
    
    if (state.length > 0) {

      productsCopy = productsCopy.filter(item => state.includes(item.state));
      
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy =filterProducts.slice();

    switch (sortType) {

      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

        case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;

        default:
          applyFilter();
          break;

    }

  }

  useEffect(()=>{

    applyFilter();

  },[category,state,search,showSearch,products])

  useEffect(()=>{

    sortProduct();

  },[sortType])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Option */}

      <div className='min-w-60'>

        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS

        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=''/>

        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 tex-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light '>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Weaving'} onChange={toggleCategory}/> Weaving
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bamboo'} onChange={toggleCategory}/> Bamboo
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Cane'} onChange={toggleCategory}/> Cane
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Pottery'} onChange={toggleCategory}/> Pottery
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Terracotta'} onChange={toggleCategory}/> Terracotta
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wood_Carving'} onChange={toggleCategory}/> Wood Carving
            </p>

          </div>

        </div>

        {/* States Filter */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 tex-sm font-medium'>STATES</p>

          <div className='flex flex-col gap-2 text-sm font-light '>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Arunachal_Pradesh'} onChange={toggleState}/> Arunachal Pradesh
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Assam'} onChange={toggleState}/> Assam
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Manipur'} onChange={toggleState}/> Manipur
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Meghalaya'} onChange={toggleState}/> Meghalaya
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mizoram'} onChange={toggleState}/> Mizoram
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Nagaland'} onChange={toggleState}/> Nagaland
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sikkim'} onChange={toggleState}/> Sikkim
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Tripura'} onChange={toggleState}/> Tripura
            </p>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'ALL'} text2={'COLLECTIONS'}/>

          {/* Product Sort */}

          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' >

            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>

          </select>

        </div>

        {/* Map Product */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {
            filterProducts.map((item,index)=>(

              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>

            ))
          }



        </div>

      </div>
      
    </div>

  )
}

export default Collection
