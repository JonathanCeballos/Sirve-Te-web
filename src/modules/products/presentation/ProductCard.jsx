
export const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center w-48 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-full h-32 bg-pastel-bg rounded-2xl mb-4 flex items-center justify-center text-4xl">
        {/* Aquí podrías poner una imagen, por ahora usaremos un emoji por categoría */}
        {product.category === 'café' ? '☕' : product.category === 'snack' ? '🥐' : '🥤'}
      </div>
      <h4 className="font-bold text-gray-700 text-lg">{product.name}</h4>
      <p className="text-[#b2d8b2] font-bold text-xl mb-4">${product.price}</p>
      
      <button 
        onClick={() => onAdd(product)}
        className="w-full py-2 bg-[#b2d8b2] text-white rounded-xl font-bold hover:bg-[#9bc49b] transition-colors"
      >
        Agregar
      </button>
    </div>
  );
};