export const loadCart = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const getCart = localStorage.getItem("cartState");
    return getCart ? JSON.parse(getCart) : undefined;
  } catch (error) {
    console.error("Load cart state failed", error);
    return undefined;
  }
};

export const saveCart = (state) => {
  try {
    const setCart = JSON.stringify(state);
    localStorage.setItem("cartState", setCart);
  } catch (error) {
    console.error("save cart state failed", error);
  }
};
