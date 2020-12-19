export const people = [
  {
    id: 1,
    name: "정곤",
    age: 27,
    gender: "female",
  },
  {
    id: 2,
    name: "민수",
    age: 21,
    gender: "female",
  },
  {
    id: 3,
    name: "강현",
    age: 25,
    gender: "female",
  },
  {
    id: 4,
    name: "현철",
    age: 29,
    gender: "female",
  },
  {
    id: 5,
    name: "민준",
    age: 24,
    gender: "female",
  },
  {
    id: 6,
    name: "상현",
    age: 30,
    gender: "female",
  },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => person.id === id);
  return filterPeople[0];
};
