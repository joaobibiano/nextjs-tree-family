const timeout = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 1000));
};

export const getTrees = async () => {
  await timeout();

  return [
    {
      id: 1,
      name: "Oliveira",
    },
    {
      id: 2,
      name: "Pau Brasil",
    },
    {
      id: 3,
      name: "Eucalipto",
    },
  ];
};
