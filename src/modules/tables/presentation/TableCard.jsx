export const TableCard = ({ mesa, onSelect }) => {
    const colorClass = mesa.isOccupied 
        ? "bg-[#ffb3b3] border-[#f5c6cb]" 
        : "bg-[#b2d8b2] border-[#c3e6cb]";

    return (
        <div 
            onClick={() => !mesa.isOccupied && onSelect(mesa)}
            className={`${colorClass} w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-2 shadow-sm cursor-pointer transition-transform hover:scale-105`}
        >
            <span className="text-xl font-bold text-gray-700">Mesa {mesa.number}</span>
            <span className="text-xs text-gray-600">
                {mesa.isOccupied ? `Ocupada por: ${mesa.customerName}` : "Disponible"}
            </span>
        </div>
    );
};
