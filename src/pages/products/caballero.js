import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { Parallax } from "react-parallax";
import ProductsTab from "../../components/tabmenu/ProductsTab";

import relojTest1 from "../../assets/Test Productos//TestReloj1.png"
import relojTest2 from "../../assets/Test Productos//TestReloj2.png"
import relojTest3 from "../../assets/Test Productos/TestReloj3.png"

const tabOptions = [
  { 
      id: 1, 
      link: "Relojs", 
  },
  { 
      id: 2, 
      link: "Collares", 
  },
  { 
      id: 3, 
      link: "Bracaletes", 
  },
  { 
      id: 4, 
      link: "Aretes", 
  },
]

function Caballero() {
  const [selectedOptions, setSelectedOptions] = useState('Shirts');
  const [productsList, setProductsList] = useState([]);
  const page = useSelector((state) => state.page);

  const handleTabChange = (tabValue) => {
      setSelectedOptions(tabValue)
  };

  useEffect(() => {
      document.documentElement.style.setProperty('--columns', `repeat(${5}, 1fr)`);
      const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/products');
            if (!response.ok) {
              throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            const data = await response.json();
            console.log('products', data);
            setProductsList(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div>
      <ProductsTab 
          options={JSON.stringify(tabOptions)} 
          onTabChange={handleTabChange}
      />
      <Parallax strength={500}>
        <div
          style={{
            height: "100vh",
            backgroundImage: "linear-gradient(to bottom, #2c5364, #203a43, #0f2027)", // Gradiente de negro a blanco
            backgroundSize: "100% 100vh", // Tamaño del gradiente
            textAlign: "center",
            paddingTop: "30px"
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex w-full md:w-2/4 mb-5 md:mb-0 md:pr-20 justify-center content-center">
              <img src={relojTest1} alt="relojTest" className="w-3/5" />
            </div>
            <div className="flex justify-center items-center w-full md:w-2/4">
              <div className="text-center">
                Content
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100vh",
            backgroundImage: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", // Gradiente de blanco a negro
            backgroundSize: "100% 100vh", // Tamaño del gradiente
            textAlign: "center",
            paddingTop: "30px"
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex w-full md:w-2/4 mb-5 md:mb-0 md:pr-20 justify-center content-center">
              <img src={relojTest2} alt="relojTest" className="w-2/4" />
            </div>
            <div className="flex justify-center items-center w-full md:w-2/4">
              <div className="text-center">
                Content
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100vh",
            backgroundImage: "linear-gradient(to bottom,  #2c5364, #203a43, #0f2027)", // Gradiente de blanco a negro
            backgroundSize: "100% 100vh", // Tamaño del gradiente
            textAlign: "center",
            paddingTop: "30px"
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex w-full md:w-2/4 mb-5 md:mb-0 md:pr-20 justify-center content-center">
              <img src={relojTest3} alt="relojTest" className="w-2/4" />
            </div>
            <div className="flex justify-center items-center w-full md:w-2/4">
              <div className="text-center">
                Content
              </div>
            </div>
          </div>
        </div>
      </Parallax>      
    </div>

  );
}

export default Caballero;