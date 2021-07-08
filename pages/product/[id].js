// import { headphones } from '../utils/testSyphonCart';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { Loader } from '../../components/Loader'
import { Spinner } from '@chakra-ui/react';


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
            // fallback: false,
            fallback: true,
        }
    } catch (error) {
        return error
    }
}

export const getStaticProps = async (context) => {
    // return {
    //     redirect: {
    //         destination: process.env.AUTH_APP_URL,
    //         permanent: false,
    //     },
    // }

    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productId&productId=${context.params.id}`);


        if (!res.data.productId) {
            return {
                redirect: {
                    destination: process.env.AUTH_APP_URL,
                    permanent: false,
                },
            }
        }


        return {
            props: { product: res.data }
        }


    } catch (error) {

        // return error
        return {
            redirect: {
                destination: process.env.AUTH_APP_URL,
                permanent: false,
            },
        }


    }
}
const ProductInfo = ({ product }) => {
    const router = useRouter()

    if (typeof window === 'undefined') {
        if (router.query.post?.startsWith('redir')) {
            console.log(router)
            throw new Error('render should not occur for redirect')
        }
    }

    if (typeof window !== 'undefined' && !window.initialHref) {
        window.initialHref = window.location.href
    }

    if (router.isFallback) return <p style={{ "height": "100vh", "width": "100vw", "font-size": "100px" }}>
        Loading
        <Spinner size="xl" />
    </p>

    console.log(product)
    return (
        <>
            <Spinner size="xl" />
            <div>
                Name: {product.name}
            </div>
            <div>
                Name: {product.name}
            </div>
            <div>
                Name: {product.name}
            </div>
            <div>
                Name: {product.name}
            </div>
        </>
    )
}

export default ProductInfo;