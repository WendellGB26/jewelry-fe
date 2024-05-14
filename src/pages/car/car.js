import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa'; // Importa el icono de FontAwesome

function Car() {
  const carItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    console.log('CarItems from Store', carItems)
  }, [carItems]); // Agrega carItems a las dependencias del efecto para que se actualice cuando cambie

  return (
    <div className='px-32'>
      {carItems.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {carItems.map((item) => (
              <tr key={item.id}>
                <td className="flex justify-center"><img src={item.imageUrl} alt={item.name} className="w-20 h-auto" /></td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">₡ {item.price}</td>
                <td><FaTimes style={{color: "red"}} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay artículos en el carrito</p>
      )}
    </div>
  );
}

export default Car;
