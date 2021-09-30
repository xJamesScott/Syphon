import Item from '../models/Item';

export const resolvers = {
  Query: {
    prodtypes(_parent, _args, _context, _info) {
      const types = Item.distinct("productType")
      return types
    },
    prodType(_parent, _args, _context, _info) {
      const models = Item.find({ productType: _args.productType });
      return models;
    },
    all(_parent, _args, _context, _info) {
      if (_args.not) {
        const item = Item.find({ productId: { $ne: _args.not } });
        return item;
      } else {
        const item = Item.find();
        return item;
      }
    },  
    productId(_parent, _args, _context, _info) {
        const item = Item.findOne({ productId: _args.productId });
        return item;
    }
  },
}
