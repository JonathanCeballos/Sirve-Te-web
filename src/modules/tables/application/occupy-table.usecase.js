//src/modules/tables/application/occupy-table.usecase.js
// Esta función contiene la lógica de negocio pura
export const occupyTable = (table, name) => {
    if (!name || name.trim() === "") {
        throw new Error("El nombre es requerido para ocupar la mesa");
    }
    return {
        ...table,
        isOccupied: true,
        customerName: name
    };
};