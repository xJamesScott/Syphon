import { gql } from '@apollo/client'




export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  enum ProductType {
    earphones
    headphones
    speakers
  }

  type Cart {
    productId: String
    name: String
    price: Number
    productType: ProductType
    quantity: Number
  }

  type Item {
    name: String
    productId: String
    description: String
    price: Number
    quantity: Number
    productType: ProductType
    newProduct: Boolean
    features: String
    inTheBox: Array
    featureIMG: Object
    supportIMG1: Object
    supportIMG2: Object
    thumbnailIMG: Object
    alsoIMG: Object
    type: Object
  }

  type Query {
    viewer: User
  }
`
