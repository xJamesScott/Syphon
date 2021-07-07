// import { headphones } from '../utils/testSyphonCart';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';


export const getStaticPaths = async () => {
    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=all`);
        const paths = res.data.map((product) => {
            return {
                params: {
                    id: product.productId
                }
            }
        });
        return {
            paths,
            fallback: false,
        }
    } catch (error) {
        console.log("res try error")
    }
}

export const getStaticProps = async (context) => {
    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productId&productId=${context.params.id}`);
        return {
            props: { product: res.data }
        }
    } catch (error) {
        return error
    }
}
const ProductInfo = ({ product }) => {
    console.log(product)
    return (
        <div>
            Name: {product.name}
        </div>
    )
}

export default ProductInfo;