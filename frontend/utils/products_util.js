export const getProducts = () => $.ajax({
  url: '/api/products',
});

export const getProduct = (productId) => $.ajax({
  url: `/api/products/${productId}`,
});
