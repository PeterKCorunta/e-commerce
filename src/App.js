import './App.css';

// App.js
import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import { ItemsReducer } from './Components/ItemsReducer';
import { cartItems } from './Components/cartItems';
import { useReducer, useState, useEffect} from 'react';
import { ItemContext } from './Components/ItemContext';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import { testimonialpics } from './Components/testimonialpics';
import RewindArrow from './Components/Icons/RewindArrow';

const App = () => {
   var mystyle = [];
  
  const [idquantity, setIdQuantity] = useState(1)
  //const [isVisible, setIsVisible] = useState(true)
  const [Itemlist, dispatch] = useReducer(ItemsReducer, cartItems)

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [currentVal, setCurrentVal] = useState(0);
  const [toggleSlide, setToggleSlide] = useState(true)
  const [newpics, setNewPics] = useState(testimonialpics)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // if (currentSlide>=testimonialpics.length-2 ){
        // setToggleSlide(n=>n=true)
        
        // setNewPics(prev=>([...prev, {id: currentSlide, pic: testimonialpics[currentVal].pic, desc:''}].filter(i=>{
        //   return i.id >= newpics.length-2})
        // ))
        

        
      //   setCurrentVal(n=>n+1)
      //   // const newarray = newpics.filter(i=>{return i.id >= 1})
      //   console.log(newpics)
      //   // setNewPics(newarray)


      // }

      

      // if (currentVal===5){
      //   setCurrentVal(n=>n=0)
      // }if (currentSlide===testimonialpics.length - 2){
      if (currentSlide===1){
          setToggleSlide(n=>n=true)
       }
       else if (currentSlide===testimonialpics.length - 2){
        setToggleSlide(n=>n=false)
     }
      if (toggleSlide===true){
        setCurrentSlide(n=>n+1);
        
      }else {
        setCurrentSlide(n=>n-1)
      }
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentSlide, toggleSlide]);

  const addItem = (itemNo, itemName, itemPrice, itemQuantity) => {

      dispatch({
          type:"addItem",
          items: Itemlist,
          id: itemNo++,
          name: itemName, dispatch,
          price: (itemPrice),
          quantity: itemQuantity,
      })

      setIdQuantity(n=>n=itemQuantity)

  }

  const removeItem = (itemNo, itemName, itemPrice, itemQuantity) => {
    
    dispatch({
        type:"removeItem",
        items: [...Itemlist],
        id: itemNo,
        name: itemName,
        price: (itemPrice),
        quantity: itemQuantity,
    })

    setIdQuantity(n=>n=itemQuantity)
}
   const delete_cart = (cart_name) =>{
      dispatch({
        type:"delete_cart",
        name: cart_name,
        items: [...Itemlist]
      })
   }

  const FastForwardArrow = () => {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 19 22 12 13 5 13 19"></polygon>
          <polygon points="2 19 11 12 2 5 2 19"></polygon>
        </svg>
      </div>
    );
  }

  
  return (
    <div className='App'>
      <Header />
      <main>
        <ItemContext.Provider value={Itemlist}>
          <ProductList removeItem={removeItem} addItem={addItem} Itemlist={Itemlist} />
          <ShoppingCart carts={Itemlist} id_quantity={idquantity} deleteCart={delete_cart} cartstyle={mystyle}/>
        </ItemContext.Provider>
      </main>
      <nav className='sliderNav'>
        <button onClick={()=> (currentSlide > 0) && setCurrentSlide(n=>n - 1)} className='btn'><RewindArrow /></button>
        <h3 className='slider-heading'>SLIDE {currentSlide+1} </h3>
        <button onClick={()=> (currentSlide < testimonialpics.length) &&  setCurrentSlide(n=>n + 1)} className='btn'><FastForwardArrow /></button>
      </nav>
      <div className='testimonial_container'>
      
        {/* <button>-</button> */}
            {newpics.map(testimonial=>{
            return <div key={testimonial.id} className={`slide_container`} style={ (currentSlide ) ? {transform: `translateX(${-100 * currentSlide}%)`, marginLeft: `(${100 * testimonialpics.length-currentSlide}%)`} : {transform: `translateX(${100 * currentSlide}%)`, marginLeft: `(${100 * testimonialpics.length-currentSlide}%)`}}>
                      <Testimonials key={testimonial.id} testimonial={testimonial} slidepic={testimonial.pic}/>
                   </div>})}
        {/* <button>+</button> */}
      </div>
      <Footer/>
    </div>
  );
};

export default App;
