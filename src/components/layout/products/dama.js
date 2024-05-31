import React, {useEffect, useState} from "react";
import ProductsTab from "../../components/tabmenu/ProductsTab";
import { getClocks } from '../../api/services/clockService';
import { getNecklaces } from '../../api/services/necklaceService';
import { getBracelets } from '../../api/services/bracaletService';
import { getRings } from '../../api/services/ringService';
import { getEarringss } from '../../api/services/earringService';

import ProductList from "../../components/productList/ProductList"

const tabOptions = [
  { 
    id: 1, 
    link: "Relojs",
    value: "clocks" 
  },
  { 
    id: 2, 
    link: "Collares",
    value: "necklaces" 
  },
  { 
    id: 3, 
    link: "Bracaletes", 
    value: "bracelets"
  },
  { 
    id: 4, 
    link: "Anillos", 
    value: "rings"
  },
  { 
    id: 5, 
    link: "Aretes", 
    value: "earrings"
  },
]

function Dama() {
  const [products, setProducts] = useState(null);

  const handleTabChange = async (tabValue) => {
    let productsData;
    if (tabValue === 'clocks') {
      productsData = await getClocks();
    } else if (tabValue === 'necklaces') {
      productsData = await getNecklaces();
    } else if (tabValue === 'bracelets') {
      productsData = await getBracelets();
    } else if (tabValue === 'rings') {
      productsData = await getRings();
    } else if (tabValue === 'earrings') {
      productsData = await getEarringss();
    } else {
      console.error('TabValue no reconocido:', tabValue);
      return;
    }
  
    setProducts(productsData);
  };

  useEffect(() => {
    const fetchCLocks = async () => {
      try {
        const clocksData = await getClocks();
        setProducts(clocksData);
      } catch (error) {
        // Manejar errores
      }
    };

    fetchCLocks();
  }, []);

  return (
    <div>
      <ProductsTab 
          options={JSON.stringify(tabOptions)} 
          onTabChange={handleTabChange}
      />
      <ProductList data={products}/>
    </div>
  );
}

export default Dama;