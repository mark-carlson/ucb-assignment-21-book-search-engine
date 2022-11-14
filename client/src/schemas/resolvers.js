const { User, Book } = require('../models');

const resolvers = {
    Query: { // REVISIT: unsure as to whether the relationship b/n users and books is properly established
        users: async () => {
            return await User.find({}).populate('books').populate({
                path: 'books',
            });
        },
        books: async () => {
            return await Book.find({}).populate('users');
        },
        book: async (parent, args) => {
            return await User.findbyId(args.id).populate('users');
        },
    },

// Define the functions that will fulfill the mutations

Mutation: { // REVISIT: unsure if the variables in mutation are correctly established
        addUser: async (parent, { name, userCount}) => {

            // Create and return the new School object
            return await User.create({ name, userCount });
        },
    },
};

module.exports = resolvers;

