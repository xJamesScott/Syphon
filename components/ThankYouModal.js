import styled from 'styled-components';
import Image from 'next/image';
import {Loader} from '../components/Loader'
import {
    ProductWrapper,
    Cost,
    SummaryTotals,
    PayButton
} from './CheckoutSummary';


export const ModalContainer = styled.div`
    background-color: white;
    /* position: fixed; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .total-summary {
        display: flex;
        justify-content: center;
        align-items: center;
        > * {
            padding: 2rem;
        }
    }

    .items-box {
        * {
            margin: 0;
        }
    }
`;

export const CheckIcon = styled.div`

`;

export const BG = styled.div`
    background-color: rgba(0, 0, 0, 0.3); // REPLACE
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;




export default function ThankYouModal({
    items,
    setModal, // TODO - REMOVE; FOR TESTING ONLY
    cart,
    total
}) {

    const itemCount = cart.length
    // cart && console.log({ "modal cart": cart[0].name })
    return (
        <>
            <BG >
                <ModalContainer>
                    <CheckIcon>
                        <Image
                            height={25}
                            width={25}
                            src="/media/placeholderIMG.png"
                        />
                    </CheckIcon>
                    <h2>THANK YOU FOR YOUR ORDER</h2>
                    <p>You will receive an email confirmation shortly.</p>
                    <div className="total-summary">
                        <div className="items-box">
                            {
                                cart ? cart.map((item, i) => {
                                    if (i = 1) {
                                        return (
                                            <ProductWrapper
                                                className="confirmation"
                                            >
                                                <div
                                                    className="name-quantity"
                                                >
                                                    <h3>
                                                        {item.name}
                                                    </h3>
                                                    <p>
                                                        x {item.quantity}
                                                    </p>
                                                </div>
                                                <h4>
                                                    ${item.price.toLocaleString('en')}
                                                </h4>


                                            </ProductWrapper>
                                        )
                                    }

                                })
                                    : <Loader />
                            }
                            {
                                // itemCount - 1 > 1 ? // TODO: ENABLE AFTER TESTING
                                itemCount - 1 > -1 ? // TODO: DISABLE AFTER TESTING
                                    <>
                                        <hr />
                                        <p> and {itemCount - 1} other item{itemCount - 1 > 1 ? "s" : null}</p>
                                    </>
                                    : null
                            }

                        </div>

                        <div className="total-box">
                            <SummaryTotals>TOTAL</SummaryTotals>
                            <Cost>
                                {`$ ${parseFloat(total.toFixed(2)).toLocaleString('en')}`}
                            </Cost>
                        </div>
                        {/* TODO - ENABLE A TAG TO REDIRECT 'BACK TO HOME' */}
                        {/* <a href="/"> */}

                        {/* </a> */}
                    </div>
                    <PayButton
                        onClick={() => setModal(false)} // TODO REMOVE; FOR TESTING ONLY
                    >
                        BACK TO HOME
                    </PayButton>
                </ModalContainer>
            </BG>
        </>
    )
}
