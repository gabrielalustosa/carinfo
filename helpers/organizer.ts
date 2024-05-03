const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const brands = new Set(oldData.map((od: any) => od.brand));

  brands.forEach((a: any) => {
    newData.push({
      title: a,
      data: oldData.filter((od: any) => od.brand == a),
    });
  });

  return newData;
};

export default convertData;
