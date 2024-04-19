'use client'
import React from 'react';
import { useState } from 'react';

function PriceBoard() {
    const [services, setServices] = useState([
        { id: 1, name: "Corte Clásico", price: 15 },
        { id: 2, name: "Corte Moderno", price: 18 },
        { id: 3, name: "Arreglo de Barba", price: 10 },
        { id: 4, name: "Corte + Barba", price: 25 },
        { id: 5, name: "Corte de Niño", price: 12 }
    ]);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-zinc-900 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Tarifas de Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                    <div key={service.id} className="cursor-pointer bg-white text-black p-4 rounded-lg flex justify-between items-center transition duration-300 ease-in-out hover:bg-yellow-600">
                        <span className="text-lg">{service.name}</span>
                        <span className="font-semibold text-xl">${service.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PriceBoard;
