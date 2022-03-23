const car = [
  {
    "nama": "Toyota Innova",
    "category": "MPV",
    "price": 650000,
    "start_rent": "2022-03-21T09:14:37.72219Z",
    "finish_rent": "2022-03-21T09:14:37.72219Z",
    "createdAt": "2022-03-21T09:14:37.72219Z",
    "updatedAt": "2022-03-21T09:14:37.72219Z",
    "id": "10000001"
  },
  {
      "nama": "Toyota Avanza",
      "category": "MPV",
      "price": 350000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000002"
    },
    {
      "nama": "Toyota Alphard",
      "category": "MPV",
      "price": 1500000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000003"
    },
    {
      "nama": "Toyota Camry",
      "category": "Sedan",
      "price": 1500000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000004"
    },
    {
      "nama": "Toyota Rush",
      "category": "SUV",
      "price": 500000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000005"
    },
    {
      "nama": "Toyota Fortuner",
      "category": "SUV",
      "price": 1200000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000006"
    },
    {
      "nama": "Toyota Yaris",
      "category": "City Car",
      "price": 650000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000007"
    },
    {
      "nama": "Toyota Raize",
      "category": "City Car",
      "price": 500000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000008"
    },
    {
      "nama": "Toyota Agya",
      "category": "LCGC",
      "price": 350000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000009"
    },
    {
      "nama": "Toyota Calya",
      "category": "LCGC",
      "price": 350000,
      "start_rent": "2022-03-21T09:14:37.72219Z",
      "finish_rent": "2022-03-21T09:14:37.72219Z",
      "createdAt": "2022-03-21T09:14:37.72219Z",
      "updatedAt": "2022-03-21T09:14:37.72219Z",
      "id": "10000010"
    }
];

module.exports = {
  findAll: () => Promise.resolve(car),
  create: ({nama,category,price,start_rent,finish_rent,createdAt,updatedAt}) => {
    const id = car[car.length - 1].id + 1;
    const car = {id,nama,category,price,start_rent,finish_rent,createdAt,updatedAt};
    car.push(car);
    return Promise.resolve(car);
  }
};
