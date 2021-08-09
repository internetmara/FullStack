export const getDispensaries = () => $.ajax({
  url: '/api/dispensaries',
});

export const getDispensary = (dispensaryId) => $.ajax({
  url: `/api/dispensaries/${dispensaryId}`,
});
