export function calculateTotalCartPrice(filteredToys, toysQunatity) {
  const totalCartPrice = filteredToys.reduce((acc, toy) => {
    // Find the quantity of the current toy based on its id
    const toyQuantity =
      toysQunatity.find((item) => item.id === toy.id)?.quantity || 0;
    return acc + toy.price * toyQuantity;
  }, 0);
  return totalCartPrice;
}
