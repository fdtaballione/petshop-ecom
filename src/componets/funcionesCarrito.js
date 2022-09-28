import axios from "axios";

export const PROD_URL = "http://localhost:5000/productos",
  CARRITO_URL = "http://localhost:5000/carrito",
  COMPRA_URL = "http://localhost:5000/compra";

export const TYPES = {
  READ_STATE: "READ_STATE",
  ADD_TO_CARD: "ADD_TO_CARD",
  UPDATE_ITEM: "UPDATE_ITEM",
  REMOVE_ALL_PRODUCTS: "REMOVE_ALL_PRODUCTS",
  CLEAR_CART: "CLEAR CART",
  CONFIRM_PAY: "CONFIRM_PAY",
};

export const carritoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        productos: action.payload[0],
        carrito: action.payload[1],
        compra: action.payload[2],
      };
    }
    case TYPES.ADD_TO_CARD: {
      const { newItem } = action.payload;
      return { ...state, carrito: [...state.carrito, newItem] };
    }

    case TYPES.UPDATE_ITEM: {
      const { newItem } = action.payload;
      return {
        ...state,
        carrito: state.carrito.map((prod) =>
          prod.id === newItem.id ? newItem : prod
        ),
      };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      const { id } = action.payload;
      return {
        ...state,
        carrito: state.carrito.filter((prod) => prod.id !== id),
      };
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        carrito: [],
      };
    }
    default:
      return state;
  }
};

export const nuevoProdACarrito = async (item) => {
  let options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(item),
  };

  let res = await axios(CARRITO_URL, options);
  let prod = await res.data;
  console.log(res);
  console.log(prod);
};

export const modificaProductoEnCarrito = async (item) => {
  let endPoint = CARRITO_URL + "/" + item.id;
  let options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(item),
  };
  let res = await axios(endPoint, options);
  //let prod = await res.data;
};

export const eliminaProductoEnCarrito = async (id) => {
  let endPoint = CARRITO_URL + "/" + id;
  let options = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  };
  let res = await axios(endPoint, options);
  let prod = await res.data;
};

export const actualizarCompra = async (item) => {
  let endPoint = COMPRA_URL + "/" + item.id;
  let options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(item),
  };
  let res = await axios(endPoint, options);
  //let prod = await res.data;
};

export const updateState = async (dispatch) => {
  const PROD_URL = "http://localhost:5000/productos",
    CARRITO_URL = "http://localhost:5000/carrito",
    COMPRA_URL = "http://localhost:5000/compra";

  const resProd = await axios.get(PROD_URL),
    resCarr = await axios.get(CARRITO_URL),
    resCompra = await axios.get(COMPRA_URL);

  const listaProd = await resProd.data,
    listaCarrito = await resCarr.data,
    listaCompra = await resCompra.data;

  dispatch({
    type: TYPES.READ_STATE,
    payload: [listaProd, listaCarrito, listaCompra],
  });
};
