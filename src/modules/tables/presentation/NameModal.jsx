
//src/modules/tables/presentation/NameModal.jsx
export const NameModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-80 text-center border-t-8 border-[#b2d8b2]">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">¡Bienvenido!</h3>
        <p className="text-sm text-gray-500 mb-6">Por favor, introduce tu nombre para continuar</p>
        
        <input 
          id="customer-name-input"
          type="text" 
          placeholder="Tu nombre aquí..."
          className="w-full p-3 border-2 border-gray-100 rounded-xl focus:border-[#b2d8b2] outline-none mb-6 text-center"
        />

        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 text-gray-400 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={() => {
              const name = document.getElementById('customer-name-input').value;
              onConfirm(name);
            }}
            className="flex-1 py-3 bg-[#b2d8b2] text-white font-bold rounded-xl shadow-md hover:bg-[#9bc49b] transition-all"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};