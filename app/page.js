"use client";
import { useState, useEffect } from 'react';
import './globals.css'; 

// --- COMPONENTES (Rutas relativas directas) ---
import { TableCard } from '../src/modules/tables/presentation/TableCard';
import { NameModal } from '../src/modules/tables/presentation/NameModal';
import { ProductCard } from '../src/modules/products/presentation/ProductCard';
import { LoginModal } from '../src/modules/admin/presentation/LoginModal';
import { AdminDashboard } from '../src/modules/admin/presentation/AdminDashboard';

// --- LÓGICA ---
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
<<<<<<< HEAD
      <div className="hero-section">
        <h1 className="title">Sirve-té</h1>
        <p className="subtitle">⛾ Coffee & Snacks 🍵 </p>
        <button onClick={() => setView('tables')} className="btn-primary">Acceso Cliente</button>
      </div>
=======

      {view === 'home' && (
        <div className="hero-section">
          <h1 className="title">Hola! Bienvenido a Sirve-te!</h1>
          <p className="subtitle">Coffee & Snacks Sirvete</p>
          <button onClick={() => setView('tables')} className="btn-primary">INICIAR</button>
        </div>
      )}

      {view === 'tables' && (
        <div className="tables-section">
          <h2>Mesas disponibles</h2>
          <div className="tables-grid">
            {mesas.map(mesa => (
              <TableCard 
                key={mesa.id} 
                table={mesa} 
                onSelect={(mesaSeleccionada) => {
                  setSelectedTable(mesaSeleccionada);
                  setView('nameModal'); // 👉 al dar clic, abre el modal
                }} 
              />
            ))}
          </div>
        </div>
      )}

      {view === 'nameModal' && (
        <NameModal 
          isOpen={true} 
          onClose={() => setView('tables')} 
          onConfirm={(name) => {
            try {
              const updatedTable = occupyTable(selectedTable, name);
              const updatedMesas = mesas.map(m =>
                m.id === updatedTable.id ? updatedTable : m
              );
              setMesas(updatedMesas);
              TableStorageRepository.saveTables(updatedMesas);
              setCurrentCustomer(name);
              setView('products'); // 👉 después de confirmar, pasa al catálogo
            } catch (error) {
              alert(error.message);
            }
          }} 
        />
      )}
>>>>>>> 1cecd4bff1d9c38e1b22969063e16f1cd9f5188d
    </main>
  );
}
