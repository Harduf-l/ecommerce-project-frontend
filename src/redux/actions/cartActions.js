import { CHANGE_ITEMS } from "./types";

export const changeItems = (index, whatToDo) => {
  let number = 0;
  let cart;
  let currentArray = [];

  if (
    localStorage.getItem("cart") == null ||
    localStorage.getItem("cart") === []
  ) {
    currentArray = [];
  } else {
    currentArray = JSON.parse(localStorage.getItem("cart"));
  }

  switch (whatToDo) {
    case "minus":
      if (currentArray[index].quantity > 1) {
        currentArray[index].quantity = currentArray[index].quantity - 1;
      }
      localStorage.setItem("cart", JSON.stringify(currentArray));

      break;
    case "plus":
      currentArray[index].quantity = currentArray[index].quantity + 1;
      localStorage.setItem("cart", JSON.stringify(currentArray));
      break;
    case "remove":
      currentArray.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(currentArray));
      break;
    default:
      break;
  }

  if (
    localStorage.getItem("cart") == null ||
    localStorage.getItem("cart") === []
  ) {
    number = 0;
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    number = 0;

    for (let i = 0; i < cart.length; i++) {
      number = number + cart[i].quantity;
    }
  }

  return {
    type: CHANGE_ITEMS,
    quantity: number,
    reduxCart: cart,
  };
};
