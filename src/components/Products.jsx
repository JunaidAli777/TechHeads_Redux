import { FaMinus, FaPlus, FaCartPlus } from "react-icons/fa6"
import { addToCart, handleQtyChange } from "../features/cartSlice"
import { useSelector, useDispatch } from "react-redux"
const Products = ({ products }) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const getItemQty = ((productId) => {
    const itemExists = cart.find(item => item.id === productId)
    if (itemExists) {
      return itemExists.quantity
    } else {
      return 0
    }
  })
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8"> Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => {
          const itemQty = getItemQty(product.id)
          return (
            <div key={product.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>

              {itemQty === 0 ? (
                <button
                  onClick={() => { dispatch(addToCart(product)) }}
                  className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Add to Cart <FaCartPlus className='inline ml-3' />
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">

                    <button
                      onClick={() => dispatch(handleQtyChange({id: product.id, newQty: itemQty - 1}))}
                      className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      <FaMinus className="inline" />
                    </button>

                    <span className="px-4 py-2 bg-gray-50 rounded-lg font-semibold min-w-[60px] text-center">
                      {itemQty}
                    </span>

                    <button
                      onClick={() => dispatch(handleQtyChange({id: product.id, newQty: itemQty + 1}))}
                      className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      <FaPlus className="inline" />
                    </button>

                  </div>
                  <p className="text-center text-sm text-gray-600">In Cart</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
