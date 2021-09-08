import { people, getById } from './db.js';

const resolvers = {
    Query: {
        people: () => people 
    }
};

export default resolvers;