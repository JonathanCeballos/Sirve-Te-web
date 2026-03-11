
export const LoginModal = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const pass = e.target.pass.value;
    // Lógica simple para el ejemplo
    if (user === "admin" && pass === "1234") {
      onLogin();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[60]">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-80">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-700">Acceso Empleado</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input name="user" type="text" placeholder="Usuario" className="p-3 border rounded-xl outline-none focus:border-[#b2d8b2]" />
          <input name="pass" type="password" placeholder="Contraseña" className="p-3 border rounded-xl outline-none focus:border-[#b2d8b2]" />
          <div className="flex gap-2 mt-4">
            <button type="button" onClick={onClose} className="flex-1 py-2 text-gray-400">Cancelar</button>
            <button type="submit" className="flex-1 py-2 bg-[#b2d8b2] text-white rounded-xl font-bold">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};