import * as React from 'react';
import { ReactNode, useCallback, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
};

interface CartState {
  items: any[];
  showDrawer: boolean;
  addItemToCart: Function;
  clearCart: Function;
  openDrawer: Function;
  hideDrawer: Function;
};

export const CartContext = React.createContext<CartState | undefined>(undefined);

const initialState: any = {
  items: [],
  showDrawer: false,
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const addItemToCart = (product) => {
    const items = [...cart.items, product];
    setCart({ showDrawer: true, items });
    window?.localStorage?.setItem("cart_items", JSON.stringify(items));
  }

  const openDrawer = () => {
    setCart((cState) => ({ ...cState, showDrawer: true }));
  };

  const hideDrawer = () => {
    setCart((cState) => ({ ...cState, showDrawer: false }));
  };

  const clearCart = () => {
    setCart((cState) => ({ ...cState, items: []}));
    window?.localStorage?.removeItem("cart_items");
  };

  useEffect(() => {
    let items: any = window?.localStorage?.getItem("cart_items");
    if (items) {
      items = JSON.parse(items);
    } else {
      items = [];
    }
    if (items?.length) {
      setCart((cState) => ({ ...cState, items }));
    }
  }, []);

  return (
    <CartContext.Provider value={{...cart, addItemToCart, clearCart, openDrawer, hideDrawer }}>
      {children}
    </CartContext.Provider>);
  };

export default CartProvider;