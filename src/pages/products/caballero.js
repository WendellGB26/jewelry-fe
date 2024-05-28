import React, {useEffect, useState} from "react";
import { useLocation, useParams } from 'wouter';

import { getClocks } from '../../api/services/clockService';
import { getNecklaces } from '../../api/services/necklaceService';
import { getBracelets } from '../../api/services/bracaletService';
import { getRings } from '../../api/services/ringService';
import { getEarringss } from '../../api/services/earringService';

import ProductsTab from "../../components/tabmenu/ProductsTab";
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

function Caballero() {
  const [, navigate] = useLocation();
  const [products, setProducts] = useState([]);
  const { genero } = useParams();

  const handleTabChange = async (tabValue) => {
    let productsData;
    switch (tabValue) {
      case 'clocks':
        productsData = await getClocks(genero);
        break;
      case 'necklaces':
        productsData = await getNecklaces(genero);
        break;
      case 'bracelets':
        productsData = await getBracelets(genero);
        break;
      case 'rings':
        productsData = await getRings(genero);
        break;
      case 'earrings':
        productsData = await getEarringss(genero);
        break;
      default:
        console.error('TabValue no reconocido:', tabValue);
        return;
    }

    navigate(`/products/${genero}/${tabValue}`);
    setProducts(productsData);
  };

  useEffect(() => {
    const fetchClocks = async () => {
      try {
        const clocksData = await getClocks(genero);
        console.log('data', clocksData)
        setProducts(clocksData);
      } catch (error) {
        console.error('Error Fetching products', error);
      }
    };

    fetchClocks();
  }, [genero]);

  return (
    <div>
      <ProductsTab options={JSON.stringify(tabOptions)} onTabChange={handleTabChange} />
      <ProductList data={products} />
    </div>
  );
}

export default Caballero;