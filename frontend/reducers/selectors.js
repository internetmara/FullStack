export const selectDispensary = ({ dispensaries }, dispensaryId) => {
  return dispensaries[dispensaryId];
};

export const asArray = ({ dispensaries }) => (
  Object.keys(dispensaries).map(key => dispensaries[key])
);


export const selectOrder = ({ orders }, orderId) => {
  return orders[orderId];
};

export const asOrdersArray = ({ orders }) => (
  Object.keys(orders).map(key => orders[key])
);