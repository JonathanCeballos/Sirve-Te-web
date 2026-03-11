//src/modules/tables/infraestructure/local-storage.repository.js

export const TableStorageRepository = {
  // Guardar el estado actual de todas las mesas
  saveTables: (tables) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sirve_te_tables", JSON.stringify(tables));
    }
  },

  // Obtener las mesas guardadas
  getTables: () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sirve_te_tables");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  },

  // Guardar un nuevo pedido en el historial
  saveOrder: (order) => {
    if (typeof window !== "undefined") {
      const currentOrders = JSON.parse(localStorage.getItem("sirve_te_orders") || "[]");
      currentOrders.push(order);
      localStorage.setItem("sirve_te_orders", JSON.stringify(currentOrders));
    }
  },

  // Obtener todos los pedidos para el administrador
  getOrders: () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("sirve_te_orders") || "[]");
    }
    return [];
  },

  // Limpiar todo (útil para el admin si quiere reiniciar el día)
  clearAll: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("sirve_te_tables");
      localStorage.removeItem("sirve_te_orders");
    }
  }
};