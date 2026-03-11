//dividir las lineas punteadas
//app/page.js
// app/page.js

"use client";
import { useState, useEffect } from 'react';
import './globals.css';
//--------------------------------------------------------------------------------------------------------------------
// --- COMPONENTES ---
import { TableCard } from '../src/modules/tables/presentation/TableCard';
import { NameModal } from '../src/modules/tables/presentation/NameModal';
import { ProductCard } from '../src/modules/products/presentation/ProductCard';
import { LoginModal } from '../src/modules/admin/presentation/LoginModal';
import { AdminDashboard } from '../src/modules/admin/presentation/AdminDashboard';

//______________________________________________________________________________________________________________________

// --- LÓGICA ---
import { occupyTable } from '../src/modules/tables/application/occupy-table.usecase';
import { TableStorageRepository } from '../src/modules/tables/infraestructure/local-storage.repository';

export default function Home() {
  const [view, setView] = useState('home');
  const [viewHistory, setViewHistory] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState("");
  const [cart, setCart] = useState([]);

 // ___________________________________________________________________________________________________________________
//aca se va a implementar el boton verde-gris
//ahorita es una matriz pero se cambiará la const por un enlace a supabase
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

  // 👉 Funciones para manejar historial de vistas
  const goToView = (nextView) => {
    setViewHistory((prev) => [...prev, view]);
    setView(nextView);
  };

  const goBack = () => {
    if (viewHistory.length > 0) {
      const lastView = viewHistory[viewHistory.length - 1];
      setViewHistory((prev) => prev.slice(0, -1));
      setView(lastView);
    } else {
      setView("home"); // fallback si no hay historial
    }
  };
  //---------------------------------------------------------------------------------------------------
  return (
    <main className="main-wrapper">
      <button onClick={() => setIsLoginOpen(true)} className="config-btn">⚙️</button>

      {view === 'home' && (
        <div className="hero-section">
          <h1 className="title">Hola! Bienvenido a ⛾ Sirve-te! 🍵 </h1>
          <h2 className="subtitle">*recordar implementar el botón de acceso a mesero</h2>

          <p className="subtitle">Coffee & Snacks Sirvete</p>

          <button onClick={() => goToView('tables')} className="btn-primary">Acceso Cliente</button>
        </div>
      )}


      
{/*implementar la tabla con el boton verde-gris*/}
      {view === 'tables' && (
        <div className="tables-section">
          <div className="flex justify-between items-center mb-4">
            <h2>Mesas disponibles</h2>
            <button
              onClick={goBack}
              className="px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Volver atrás"
            >
              🔙
            </button>
          </div>
          <div className="tables-grid">
            {mesas.map(mesa => (
              <TableCard
                key={mesa.id}
                table={mesa}
                onSelect={(mesaSeleccionada) => {
                  setSelectedTable(mesaSeleccionada);
                  goToView('nameModal'); // 👉 al dar clic, abre el modal
                }}
              />
            ))}
          </div>
        </div>
      )}

      {view === 'nameModal' && (
        <NameModal
          isOpen={true}
          onClose={goBack}
          onConfirm={(name) => {
            try {
              const updatedTable = occupyTable(selectedTable, name);
              const updatedMesas = mesas.map(m =>
                m.id === updatedTable.id ? updatedTable : m
              );
              setMesas(updatedMesas);
              TableStorageRepository.saveTables(updatedMesas);
              setCurrentCustomer(name);
              goToView('products'); // 👉 después de confirmar, pasa al catálogo
            } catch (error) {
              alert(error.message);
            }
          }}
        />
      )}
    </main>
  );
}
//las lineas punteadas probablemente se cambien a archivos mas pequeños