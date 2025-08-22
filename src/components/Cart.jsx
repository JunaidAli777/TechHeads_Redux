import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaPlus, FaMinus, FaTrash, FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { handleQtyChange, emptyCart, removeFromCart } from "../features/cartSlice"

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const [showDeleteItemConfirmation, setShowDeleteItemConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showEmptyCartConfirmation, setShowEmptyCartConfirmation] = useState(false);
  const dispatch = useDispatch();
  
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteItemConfirmation(true);
  };

  const confirmDelete = () => {
        if (itemToDelete) {
            dispatch(removeFromCart(itemToDelete.id));
        }
        setShowDeleteItemConfirmation(false);
        setItemToDelete(null);
    };

    const cancelDelete = () => {
        setShowDeleteItemConfirmation(false);
        setItemToDelete(null);
    };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        <div className='py-12'>
          <FaCartShopping className="text-6xl text-gray-400 mb-4 inline" />
          <p className="text-xl text-gray-500 mb-6">Your cart is empty</p>
          <Link
            to="/products"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      <div className='flex justify-end'>
        <button
          onClick={() => setShowEmptyCartConfirmation(true)}
          className="text-red-600 cursor-pointer">
          Remove all items X
        </button>
      </div>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="bg-white border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(handleQtyChange({ id: item.id, newQty: item.quantity - 1 }))}
                  className="cursor-pointer p-1 hover:bg-gray-100 rounded"
                >
                  <FaMinus />
                </button>
                <span className="px-3 py-1 border rounded">{item.quantity}</span>
                <button
                  onClick={() => dispatch(handleQtyChange({ id: item.id, newQty: item.quantity + 1 }))}
                  className="cursor-pointer p-1 hover:bg-gray-100 rounded"
                >
                  <FaPlus />
                </button>
              </div>

              <p className="font-semibold w-20 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleDeleteClick(item)}
                className="cursor-pointer p-2 text-red-500 hover:bg-red-50 rounded"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold text-blue-600">
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          Proceed to Checkout
        </button>
      </div>

      {/* Delete item Confirmation Model */}
      {showDeleteItemConfirmation && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-4">Remove Item</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove "{itemToDelete?.name}" from your cart?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={cancelDelete}
                className="flex-1 px-4 py-2 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>

          </div>

        </div>
      )}

      {/* empty cart confirmation */}
      {showEmptyCartConfirmation && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-4">Clear Cart</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to clear the cart?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowEmptyCartConfirmation(false)}
                className="flex-1 px-4 py-2 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => dispatch(emptyCart())}
                className="flex-1 px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
