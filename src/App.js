import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/home';
import { Products } from './components/Clothes/products';
import { ProductDetails } from './components/Clothes/ProductDetails';
import { Cart } from './components/Clothes/Cart';
import { Checkout } from './components/Clothes/Checkout';

function App() {


  const imgs=[
    'https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10425.jpg?w=360&t=st=1692215095~exp=1692215695~hmac=be92c98b9521372762fb126900be12bad21af4d8328c1f3dfc55dc1257e6de43',
    'https://img.freepik.com/free-photo/full-length-photo-elegant-stylish-woman-wearing-stylish-pantsuit-against-beige-wall_291650-1533.jpg?w=360&t=st=1692215175~exp=1692215775~hmac=4780097d43d9f8e6f26c211f9e36b72d13f12d74f93e033a8116d8bd63833e33',
    'https://img.freepik.com/free-photo/full-length-portrait-cute-woman-gray-wall_231208-5553.jpg?w=360&t=st=1692215232~exp=1692215832~hmac=346eea071d2256676b19cf445c22f295008cb6d95829718172d6aa776ced00fe',
    'https://img.freepik.com/free-photo/stylish-young-teen-girl_155003-2280.jpg?w=360&t=st=1692215277~exp=1692215877~hmac=8ed3fa5382bbd7843559bb6586576f487ef147af26795919e1d7abab85b80397',
    'https://img.freepik.com/free-photo/full-length-modern-young-european-brunette-girl-casual-clothes-posing-purple-background-lifestyle-female-beauty-concept_197531-31663.jpg?w=360&t=st=1692215358~exp=1692215958~hmac=b74da290bb26ef8c78d8d2f0543b5691422ea21964fb146a2fdf46ceece403ef',
    'https://img.freepik.com/free-photo/woman-blue-shirt-pants-with-hat-casual-wear-fashion-full-body_53876-102839.jpg?w=360&t=st=1692215389~exp=1692215989~hmac=65f45cf05eb10e85f9468006a35751adcc4bb3d711caa0ef435a31ef9a62307c',
    'https://img.freepik.com/free-photo/woman-model-posing-floral-long-dress-apparel_53876-98210.jpg?w=360&t=st=1692215442~exp=1692216042~hmac=1dab24ff3a931f21f59116c1237d8f99ba7650ed9718017e5ed720ae5a314f6c',
    'https://img.freepik.com/free-photo/beautiful-woman-wearing-co-ord-outfits-full-body-shot_53876-126950.jpg?w=360&t=st=1692215571~exp=1692216171~hmac=ef6d40b131ffe51c4d6427196375224cad3d52f1ddf8abaafb02985202e861f4',
    'https://img.freepik.com/free-photo/beautiful-fashion-woman-posing-with-elegant-suit_1328-3307.jpg?w=360&t=st=1689376225~exp=1689376825~hmac=a5a7dfc8c3f0e67c1e23cb1443cbc751efb8b0ec89d09c47e632f04ac89d2565',
    'https://img.freepik.com/free-photo/vertical-image-fashionable-confident-young-european-woman-with-dark-hair-combed-back-posing-wearing-elegant-brown-trousers-oversize-white-shirt-keeping-her-hands-pockets_343059-3149.jpg?w=360&t=st=1689376578~exp=1689377178~hmac=74076bbcfdc00eecfca32f959a161d23a2ad407a67a931d8670c3587d19f8c9b',
    'https://img.freepik.com/free-photo/young-positive-woman-looking_171337-11952.jpg?w=360&t=st=1689376600~exp=1689377200~hmac=e90d0f600d6240613823710d0e1c45f5ae4f625fd7b51f27ae81dfe36336dcbc',
    'https://img.freepik.com/free-photo/woman-model-posing-floral-long-dress-apparel_53876-98211.jpg?w=360&t=st=1689376659~exp=1689377259~hmac=b51d4336e888bb56f46ed9720ea24d6f32e126ae29ef60d9f621522cb965fa7a',
    'https://img.freepik.com/free-photo/summer-portrait-cheerful-red-haired-lady-fashionable-outfit-having-fun-pink_273443-4440.jpg?w=360&t=st=1692132770~exp=1692133370~hmac=5408e1c876b32d2e5588df5db1f1b244d3ad91b882b368dce8c8d8f4f8953fdd',
    'https://img.freepik.com/free-photo/stylish-young-brunette-female-model-red-dress_132075-7593.jpg?w=360&t=st=1692131262~exp=1692131862~hmac=a9e1cdd78385dbbc22d463b71c513ca6bc3bc7aa6ff5a8eeca93d5e4f517f7a8',
    'https://img.freepik.com/free-photo/graceful-fashion-model-trendy-hat-autumn-white-jacket-posing_273443-3847.jpg?w=360&t=st=1692131286~exp=1692131886~hmac=1da86def0272bf09ec93249cfded0ee1b9ab34cdaec51b904cdd81207c6b5009',
    'https://img.freepik.com/free-photo/stylish-woman-black-long-sleeve-tee-beige-slacks-casual-wear-fashion-full-body_53876-102857.jpg?w=360&t=st=1692131346~exp=1692131946~hmac=069aaf7b653b35d37dba9b66723e45e9261cb836d2ce20af845ab5a2c048372b',

  ]

  const details=[
    'cotton dress' ,
    'set',
    'jeans jumbsuit',
    'oversized shirt',
    'cotton hoodei',
    'cittan shmeise',
    'cotton sleeveless dress' ,
    'satan set',
    'coat',
    'oversized white shirt',
    'tank top',
    'cotton dress',
    'blouse',
    'cardigan',
    'dress',
    'sleeve top'
  ]
  const prices=[
  '1000',
  '600',
  '800',
  ' 1200',
    ' 900',
    ' 800',
    ' 1000',
    ' 750',
    ' 860',
    ' 990',
    ' 700',
    '1200',
    '500',
    '600',
    '900',
  '630',



  ]


  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  const addToCart = (imageUrl,detail,price) => {

    // Create a copy of the current cart
    const updatedCart = [...cart];
  
 
  // Check if the product URL is already in the cart
  const existingProductIndex = updatedCart.findIndex((item) => item.imageUrl === imageUrl);

  if (existingProductIndex === -1) {
    // If the product is not in the cart, add it with additional data
    updatedCart.push({ imageUrl, detail, price });
  }
    // Update the cart state with the new cart array
    setCart(updatedCart);


    //save on localstorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const clearCart = () => {
    // Clear the cart data from localStorage
    localStorage.removeItem('cart');
  
    // Clear the cart state
    setCart([]);
  };
  
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
  
    // Iterate through the cart and sum up the prices
    cart.forEach((item) => {
      totalPrice += parseFloat(item.price);
    });
  
    // Update the total price state
    setTotalPrice(totalPrice);
  }, [cart]);
  

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home count={cart.length}/>} />
        <Route path="/women" element={<Products imgs={imgs} count={cart.length} details={details} prices={prices}/>} />
    <Route path="/details" element={<ProductDetails addToCart={addToCart} count={cart.length}/>} />
    <Route path='/cart' element={<Cart count={cart.length} cart={cart} addToCart={addToCart} clearCart={clearCart} totalPrice={totalPrice}/>}/>
    <Route path='/checkout' element={<Checkout count={cart.length} cart={cart} totalPrice={totalPrice}/>} />
      </Routes>
    </Router>
  );
}

export default App;
