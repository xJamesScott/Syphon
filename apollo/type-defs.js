import { gql } from '@apollo/client'

export const typeDefs = gql`
  enum ProductType {
    earphones
    headphones
    speakers
  }

  type Cart {
    productId: String
    name: String
    price: Int
    productType: ProductType
    quantity: Int
  }


  type ImageDevices {
    desktop: String
    tablet: String
    mobile: String
  }

  type Item {
    name: String
    productId: String
    description: String
    price: Int
    quantity: Int
    productType: ProductType
    newProduct: Boolean
    features: String,
    inTheBox:  ImageDevices
    featureIMG: ImageDevices
    supportIMG1: ImageDevices
    supportIMG2: ImageDevices
    thumbnailIMG: ImageDevices
    alsoIMG: ImageDevices
    type: ProductType
  }

  type Name {
    firstName: String
    lastName: String
  }

  type User {
    name: Name
    email: String
    phone: String
    address: String
    zipCode: String
    city: String
    country: String
    emailVerified: Boolean
}
  
  type Query {
    prodtypes: [String],
    prodType(productType: String): Item,
    productId(productId: String): Item,
    all(not: String): [Item],
  }
`
