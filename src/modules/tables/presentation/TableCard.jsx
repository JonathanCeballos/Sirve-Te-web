
//src/modules/tables/presentation/TableCard.jsx

export const TableCard = ({ table, onSelect }) => {
    // Clases dinámicas para el color pastel (Verde si libre, Rojo si ocupada)
    const colorClass = table.isOccupied 
        ? "bg-[#ffb3b3] border-[#f5c6cb]" // Rojo pastel
        : "bg-[#b2d8b2] border-[#c3e6cb]"; // Verde pastel

    return (
        <div 
            onClick={() => !table.isOccupied && onSelect(table)}
            className={`${colorClass} w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-2 shadow-sm cursor-pointer transition-transform hover:scale-105`}
        >
            <span className="text-xl font-bold text-gray-700">Mesa {table.number}</span>
            <span className="text-xs text-gray-600">
                {table.isOccupied ? `Ocupada por: ${table.customerName}` : "Disponible"}
            </span>
        </div>
    );
};
