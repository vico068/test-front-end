

export const formatToTable = (items = []) => {
  return items.map((item, index) => ({
    key: `${index}`,
    ...item,
  }));
};
