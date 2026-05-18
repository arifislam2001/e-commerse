import React, { useEffect, useState } from 'react'

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
    const updated = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateStorage(updated);
  };

  const handleDecrease = (id) => {
    const updated = items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateStorage(updated);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Cart ({items.length})</h2>

      {items.map(item => (
        <div key={item.id} className="flex items-center gap-4 border-b py-4">
          <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-blue-600 font-bold">${item.price}</p>

            {/* Quantity control */}
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => handleDecrease(item.id)}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                −
              </button>
              <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
          </div>

          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500 font-semibold border border-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Carts;