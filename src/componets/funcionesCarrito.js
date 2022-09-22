export const productos = [
  {
    id: 1,
    nombre: "Alimento Balanceado Vital Balance",
    descripcion:
      "Bolsa de 20 kg para razas medianas con alto contenido proteico",
    precio: 7800,
    imagen: "Prod01.jpg",
  },
  {
    id: 2,
    nombre: "Alimento Balanceado Royal Canin",
    descripcion:
      "Bolsa de 10 kg para razas Pequeñas con alto contenido proteico",
    precio: 4500,
    imagen: "Prod02.jpg",
  },
  {
    id: 3,
    nombre: "Alimento Balanceado Excelent",
    descripcion:
      "Bolsa de 10 kg para razas Pequeñas con alto contenido proteico",
    precio: 4500,
    imagen: "Prod03.jpg",
  },
];

export const TYPES = {
  ADD_TO_CARD: "ADD_TO_CARD",
  REMOVE_ONE_PRODUCT: "REMOVE_ONE_PRODUCT",
  REMOVE_ALL_PRODUCTS: "REMOVE_ALL_PRODUCTS",
  CLEAR_CART: "CLEAR CART",
};

export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CARD: {
      const { id, cantidad } = action.payload;
      let newItem = productos.find((producto) => producto.id === id);
      newItem = { ...newItem, cantidad: cantidad };

      const itemInCart = state.find((prod) => prod.id === id);

      return itemInCart
        ? state.map((prod) =>
            prod.id !== id
              ? prod
              : { ...prod, cantidad: prod.cantidad + cantidad }
          )
        : [...state, newItem];
    }

    case TYPES.REMOVE_ONE_PRODUCT: {
      const { id } = action.payload;
      const itemInCart = state.find((prod) => prod.id === id);

      return state.map((prod) =>
        prod.id !== id ? prod : { ...prod, cantidad: prod.cantidad - 1 }
      );
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      const { id } = action.payload;
      return state.filter((prod) => prod.id !== id);
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
