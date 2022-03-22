const cars = [
    {
      id: 1,
      name: 'Mitsubishi Pajero',
      price: 500000,
      photo: 'image-1.png',
      startRent: '2022-03-02',
      finishRent: '2022-03-02',
      createdRent: '2022-03-25',
      updatedRent: '2022-03-30',
    },
  ];
  
  module.exports = {
    findAll: () => Promise.resolve(cars),
    create: ({
      name, price, photo, startRent, finishRent, createdRent, updatedRent,
    }) => {
      const idStart = cars.length > 0 ? cars[cars.length - 1].id : 0;
      const id = idStart + 1;
      const car = {
        id,
        name,
        price,
        photo,
        startRent,
        finishRent,
        createdRent,
        updatedRent,
      };
      cars.push(car);
      return Promise.resolve(car);
    },
    deleteCarById: (id) => {
      cars.splice(cars.findIndex((car) => car.id == id), 1);
      return Promise.resolve(`Car with ${id} deleted`);
    },
    findOne: (id) => Promise.resolve(cars[cars.findIndex((car) => car.id == id)]),
    editById: ({
      id, name, price, photo, startRent, finishRent, createdRent, updatedRent,
    }) => {
      const car = {
        id,
        name,
        price,
        photo,
        startRent,
        finishRent,
        createdRent,
        updatedRent,
      };
      cars[id - 1] = car;
      return Promise.resolve(car);
    },
  };
  