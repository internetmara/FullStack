export const selectDispensary = ({ dispensaries }, dispensaryId) => {
  return dispensaries[dispensaryId];
};

export const asArray = ({ dispensaries }) => (
  Object.keys(dispensaries).map(key => dispensaries[key])
);
