export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      console.log({ id: 1, name: 'John Smith', status: 'cached' })
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
  },
}
