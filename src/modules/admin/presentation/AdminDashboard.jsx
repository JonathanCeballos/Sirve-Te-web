//src/modules/admin/presentation/AdminDasboard.jsx

export const AdminDashboard = ({ orders, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto animate-in zoom-in duration-300">
      {/* Cabecera del Panel */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-black text-gray-800">Panel de Control</h2>
          <p className="text-gray-400 font-medium">Gestión de pedidos en tiempo real</p>
        </div>
        <button 
          onClick={onBack} 
          className="bg-red-50 text-red-400 px-6 py-2 rounded-xl font-bold hover:bg-red-100 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
      
      {/* Listado de Pedidos */}
      <div className="grid gap-6">
        {orders.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-20 text-center border-4 border-dashed border-gray-100">
            <p className="text-2xl font-bold text-gray-300 italic">No hay pedidos pendientes...</p>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Info del Cliente y Mesa */}
              <div className="flex gap-6 items-center">
                <div className="bg-[#b2d8b2] text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black">
                  {order.mesa}
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-700">{order.cliente}</h4>
                  <p className="text-gray-400 text-sm">Pedido a las: {order.fecha}</p>
                </div>
              </div>

              {/* Lista de Productos (Aquí estaba el error corregido) */}
              <div className="flex-1 px-6 border-x border-gray-50">
                <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">Productos</p>
                <div className="flex flex-wrap gap-2">
                  {order.items.map((item, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-50 px-3 py-1 rounded-lg text-sm font-medium text-gray-500"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Total y Acción */}
              <div className="text-right">
                <p className="text-2xl font-black text-[#b2d8b2]">${order.total}.00</p>
                <button className="text-xs font-bold text-gray-400 hover:text-green-500 uppercase tracking-tighter mt-2 transition-colors">
                  Marcar como listo ✓
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};