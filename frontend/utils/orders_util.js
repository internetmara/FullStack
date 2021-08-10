export const getOrders = () => $.ajax({
  url: '/api/orders',
});

export const getOrder = (orderId) => $.ajax({
  url: `/api/orders/${orderId}`,
});
