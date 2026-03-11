"use client";
import { useState, useEffect } from 'react';
import './globals.css'; 

// --- COMPONENTES (Rutas relativas directas) ---
import { TableCard } from '../src/modules/tables/presentation/TableCard';
import { NameModal } from '../src/modules/tables/presentation/NameModal';
import { ProductCard } from '../src/modules/products/presentation/ProductCard';
import { LoginModal } from '../src/modules/admin/presentation/LoginModal';
import { AdminDashboard } from '../src/modules/admin/presentation/AdminDashboard';

// --- LÓGICA (Asegúrate de que el nombre del archivo coincida con el disco) ---
import { occupyTable } from '../src/modules/tables/application/occupy-table.usecase';
import { TableStorageRepository } from '../src/modules/tables/infraestructure/local-storage.repository';

export default function Home() {
  const [view, setView] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState("");
  const [cart, setCart] = useState([]);
  
  const [mesas, setMesas] = useState([
    { id: 1, number: "1", isOccupied: false },
    { id: 2, number: "2", isOccupied: false },
    { id: 3, number: "3", isOccupied: false },
    { id: 4, number: "4", isOccupied: false },
  ]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    try {
      if (TableStorageRepository && typeof TableStorageRepository.getTables === 'function') {
        const savedTables = TableStorageRepository.getTables();
        const savedOrders = TableStorageRepository.getOrders();
        if (savedTables) setMesas(savedTables);
        if (savedOrders) setAllOrders(savedOrders);
      }
    } catch (e) {
      console.error("Error al cargar datos:", e);
    }
  }, []);

  return (
    <main className="main-wrapper">
      <button onClick={() => setIsLoginOpen(true)} className="config-btn">⚙️</button>
      <div className="hero-section">
        <h1 className="title">Sirve-té</h1>
        <p className="subtitle">⛾ Coffee & Snacks 🍵 </p>
        <button onClick={() => setView('tables')} className="btn-primary">Acceso Cliente</button>
      </div>
    </main>
  );
}