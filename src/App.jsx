import Layout from "./Layout"
import Home from "./components/home"
import Products from "./components/products"
import AboutUs from "./components/aboutus"
import Cart from "./components/Cart"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { store } from "./app/store"
import { Provider } from "react-redux"

const products = [
  { id: 1, name: 'Laptop', price: 999, image: 'laptop.webp' },
  { id: 2, name: 'Smartphone', price: 699, image: 'smartphone.webp' },
  { id: 3, name: 'Headphones', price: 199, image: 'headphone.jpg' },
  { id: 4, name: 'Tablet', price: 399, image: 'tablet.jpg' },
  { id: 5, name: 'Watch', price: 299, image: 'watch.avif' },
  { id: 6, name: 'Camera', price: 799, image: 'camera.jpg' }
];

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="products" element={<Products products={products} />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
