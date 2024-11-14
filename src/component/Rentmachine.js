import React, { useEffect, useState } from 'react';
import Machine from './Machine';
import Shimmer from './Shimmer';

function Rentmachine() {
    const [apidata, setApidata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            let response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=zrcgXwaWs-J50KgECNlQX5gGL-MfYJeNQCKN90yDE_Blfqz8kUBdvy-JOtAB-wB3TzS4s9kaeZNP0pQ0RQJOWsStrbxtgPGNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI1Jfb1BbXuHmSwyR_wUHYxHDVrmgmrUEVvqBQHDzz8n5WLhM4HffEsG-xw0uq_9h8e6xgTS1IdrsF3p4iFiIaVv2vfflnhW_tz9Jw9Md8uu&lib=Mv5NaPw7DIHF-w8rVSgu9uepRp-CHXuYL');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            let json = await response.json();
            setApidata(json.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    const addToCart = (machine) => {
        setCart((prevCart) => [...prevCart, machine]);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseInt(item['vehicle-price'].split(' ')[0], 10);
            return total + price;
        }, 0);
    };

    const filterMachines = (category) => {
        if (!searchQuery) return apidata[category];
        
        return apidata[category].filter(machine => 
            machine['vehicle-name'].toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Shimmer/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relative min-h-screen">
            {/* Search Bar */}
            <div className="sticky top-[78px] z-10 bg-white shadow-md p-4 mb-6">
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search machines..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button 
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                            onClick={() => setSearchQuery('')}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content section */}
            <div className={`transition-all duration-300 ${cart.length > 0 ? 'mr-[25%]' : ''}`}>
                {apidata &&
                    Object.keys(apidata).map((category) => {
                        const filteredMachines = filterMachines(category);
                        if (filteredMachines.length === 0) return null;

                        return (
                            <div key={category}>
                                <h2 className="text-6xl text-center mt-[75px]">{category}</h2>
                                <div className="flex flex-wrap gap-6 px-4 justify-center">
                                    {filteredMachines.map((machine) => (
                                        <Machine 
                                            key={machine.id} 
                                            data={machine} 
                                            onAddToCart={addToCart} 
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* Cart Section */}
            <div 
                className={`fixed top-[78px] right-0 w-1/4 bg-gray-300 p-4 h-[calc(100vh-78px)] overflow-y-auto transition-transform duration-300 ${
                    cart.length > 0 ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="sticky top-0 bg-gray-300 pb-4">
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                </div>
                <ul className="mb-20">
                    {cart.map((item, index) => (
                        <li key={index} className="mb-2 border-b pb-2 flex justify-between items-center">
                            <span>{item['vehicle-name']} - {item['vehicle-price']}</span>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                aria-label={`Remove ${item['vehicle-name']} from cart`}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="sticky bottom-0 bg-gray-300 pt-4">
                    <div className="font-bold bg-slate-300 p-3 rounded-lg">
                        Total Price: ₹{calculateTotalPrice()} per day
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rentmachine;