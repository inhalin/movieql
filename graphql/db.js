export const people = [
    {
        id: 1,
        name: "kimin",
        age: 29,
        gender: "female"
    },
    {
        id: 2,
        name: "inhalin",
        age: 30,
        gender: "female"
    }
];

export const getById = id => {
    const filterdPeople = people.filter(person => id === person.id );
    return filterdPeople[0];
}
