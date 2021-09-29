import Item from '../models/Item';

export const resolvers = {
  Query: {
    prodtypes(_parent, _args, _context, _info) {
      const types = Item.distinct("productType")
      return types
    },
    prodType(_parent, _args, _context, _info) {
      const models = Item.find({ productType: productType });
      return models;
    },
    all(_parent, _args, _context, _info) {
      const item = Item.find();
      // console.log(item.mongooseCollection)
      // return item;
      return item;
    },
    
  },
}
