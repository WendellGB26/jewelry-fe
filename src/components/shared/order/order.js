import React, { useState }  from "react";
import "./order.css"

function Order(){
    const [username, setUsername] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [direccion, setDireccion] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <div className={`h-full`}>
            <a className="text-textProduct text-bold pb-4">Informacion de Contacto</a>
            <div className="field py-1">
              <input className="input-field" placeholder="Email o Número Celular" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <a className="text-textProduct text-bold mb-4">Entrega</a>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="field">
                    <input className="input-field" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>    
                <div className="field p-2">
                    <input className="input-field" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>             
            </div>
            <div className="field py-1">
                <input className="input-field" placeholder="Empresa (Optional)" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
            </div>  
            <div className="field py-1">
                <input className="input-field" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </div>  
            <div className="field py-1">
                <input className="input-field" placeholder="Casa, apartamento, etc, (Optional)" value={apartamento} onChange={(e) => setApartamento(e.target.value)} />
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="field">
                    <input className="input-field" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                </div>    
                <div className="field p-2">
                    <input className="input-field" placeholder="Número de Cédula" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                </div>             
            </div>
            <div className="field p-2">
                <input className="input-field" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>   
        </div>
    );
};

export default Order;