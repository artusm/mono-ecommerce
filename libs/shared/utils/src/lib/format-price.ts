export const formatPrice = (price: number) =>
  `${Math.max(price, 0).toFixed(2)}$`;
