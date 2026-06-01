
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

const Carts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setItems(data);
  }, []);

  const updateStorage = (updated) => {
    setItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new StorageEvent('storage', { key: 'cartProducts' }));
  };

  const handleRemove = (id) => {
    const ok = window.confirm('Are you sure you want to remove this item?');
    if (!ok) return;
    updateStorage(items.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    updateStorage(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    updateStorage(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-primary mb-2">Your cart is empty!</h2>
        <p className="text-secondary mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="bg-brand text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-primary mb-8">My Cart ({items.length})</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-primary truncate">{item.title}</h3>
                <p className="text-brand font-bold text-lg mt-1">${item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  <FiTrash2 className="text-xl" />
                </button>
                <p className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <Link to="/shop" className="inline-flex items-center gap-2 text-brand font-medium hover:underline mt-2">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <h3 className="text-lg font-bold text-primary mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-secondary">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span className="font-medium text-primary">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Discount</span>
                <span className="font-medium text-green-500">-$0.00</span>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-brand">${total.toFixed(2)}</span>
            </div>

            {/* Coupon */}
            <div className="mt-6 flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand"
              />
              <button className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                Apply
              </button>
            </div>

            <button className="w-full mt-4 bg-brand text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Carts;