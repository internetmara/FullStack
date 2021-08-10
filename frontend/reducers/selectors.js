export const selectDispensary = ({ dispensaries }, dispensaryId) => {
  return dispensaries[dispensaryId];
};

export const selectProduct = ({ products }, productId) => {
  return products[productId];
};

export const selectOrder = ({ orders }, orderId) => {
  return orders[orderId];
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

export const asOrdersArray = ({ orders }) => (
  Object.keys(orders).map(key => orders[key])
);
