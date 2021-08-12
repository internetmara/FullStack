export const selectDispensary = ({ dispensaries }, dispensaryId) => {
  return dispensaries[dispensaryId];
};

export const selectProduct = ({ products }, productId) => {
  return products[productId];
};

export const selectSession = ({ sessions }, sessionId) => {
  return sessions[sessionId];
};


export const asDispensariesArray = ({ dispensaries }) => (
  Object.keys(dispensaries).map(key => dispensaries[key])
);

export const asProductsArray = ({ products }) => (
  Object.keys(products).map(key => products[key])
);

export const selectProductsInOrder = (orders, products) => {
  let ordersArray = Object.values(orders);
  let orderProductIds = ordersArray.map(order => (
    order.product_id
  ))

  let productsArray = Object.values(products);
  let productIds = productsArray.filter(product =>
    orderProductIds.includes(product.id)
  )
  return productIds;
}