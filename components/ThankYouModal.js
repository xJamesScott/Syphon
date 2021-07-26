import styled from 'styled-components';
import Image from 'next/image';
import { Loader } from '../components/Loader'
import {
    ProductWrapper,
    Cost,
    SummaryTotals,
    PayButton
} from './CheckoutSummary';
import { theme, mq } from '../constants/theme';

const { colors } = theme;


export const ModalContainer = styled.div`
    background-color: white;
    position: fixed;
    top: 10rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 540px;
    width: 100%;
    margin: 2.4rem;
    > * {
        margin: 0;
    }
    border-radius: .5rem;
    overflow: hidden;
    .modal-wrap {
        padding: 4.8rem;
        width: 100%;
    }

    .total-summary {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 140px;
        > * {
        }

        
    }

    .summary-wrap {
        border-radius: .5rem;
        overflow: hidden;
        margin-bottom: 4.6rem;
    }

    .items-box {
        flex: 1 1 60%;
        background: ${colors.accent3};
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        
        padding: 2.4rem;

        .divider {
            /* transform: rotate(90deg); */
            margin: 1.2rem 0;
            flex: 0 0 1px;
            width: 100%;
            border-bottom: 1px solid;
            opacity: 15%;
        }

        .other-items {
            font-size: 1.2rem;
            font-weight: bold;
            letter-spacing: -.0021rem;
            opacity: 50%;
        }
        
        
        > * {
            margin: auto;
            flex: 1 1 100%;
        }
    }

    .total-box {
        flex: 1 1 40%;
        margin: 0;
        color: ${colors.accent1};
        background: ${colors.accent5};
        height: 100%;
        padding: 2.4rem;
        /* display: flex;
        flex-direction: column; */

        .total-wrapper {
        flex: 1 1 40%;
        height: 100%;
        color: ${colors.accent1};
        /* background: ${colors.accent5}; */
        text-align: center;
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        gap: .8rem;
        }
       
    }
        /* margin: auto; */

       > * {
            margin: 0;
            /* display: flex; */
            flex: 1 1 100%;
        }
    

    h2 {
        text-align: left;
        width: 90%;
        margin: 0;
       
        /* font */
        font-size: 3.2rem;
        line-height: 3.6rem;
        letter-spacing: .114rem;
    }

    p {
        margin: 0;
    }

    h5 { 
        margin: 0;
    }

    p.confirmation-msg {
        margin: 2.5rem 0;
    }
    
`;

export const ProductImage = styled(Image)`
    /* &.prod-img-ty {
        display: none;
    } */

    /* flex-grow: 0 !important; */
`;

export const CheckIcon = styled.div`
    justify-self: flex-start;
    align-self: flex-start;
    margin-bottom: 3.3rem;
`;

export const BG = styled.div`
    background-color: rgba(0, 0, 0, 0.3); // REPLACE
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
    z-index: 3;
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
                    <div className="modal-wrap">
                        <CheckIcon>
                            <Image
                                height={64}
                                width={64}
                                src="/media/placeholderIMG.png"
                            />
                        </CheckIcon>
                        <h2>THANK YOU<br />FOR YOUR ORDER</h2>
                        <p className="confirmation-msg">You will receive an email confirmation shortly.</p>
                        <div className="summary-wrap">
                            <div className="total-summary">

                                <div className="items-box">
                                    {
                                        cart ? cart.map((item, i) => {
                                            if (i = 1) {
                                                return (
                                                    <ProductWrapper
                                                        className="confirmation"
                                                    >
                                                        <div className="prod-img-ty">
                                                            <ProductImage
                                                                src="/media/placeholderIMG.png"
                                                                width={50}
                                                                height={50}
                                                            />
                                                        </div>
                                                        <div
                                                            className="name-quantity"
                                                        >
                                                            <h3>
                                                                {item.name}
                                                            </h3>
                                                            <h4>
                                                                ${item.price.toLocaleString('en')}
                                                            </h4>
                                                        </div>
                                                        <p>
                                                            x {item.quantity}
                                                        </p>
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
                                                <div class="divider" />
                                                <p className="other-items"> and {itemCount - 1} other item{itemCount - 1 > 1 ? "s" : null}</p>
                                            </>
                                            : null
                                    }
                                </div>
                                {/* <div className="total-box"></div> */}
                                <div className="total-box">
                                    <div className="total-wrapper">
                                        <SummaryTotals className="ty-cost">TOTAL</SummaryTotals>
                                        <Cost className="ty-cost">
                                            {`$ ${parseFloat(total.toFixed(2)).toLocaleString('en')}`}
                                        </Cost>
                                    </div>
                                </div>
                                {/* TODO - ENABLE A TAG TO REDIRECT 'BACK TO HOME' */}
                                {/* <a href="/"> */}
                                {/* </a> */}

                            </div>
                        </div>
                        <PayButton
                            onClick={() => setModal(false)} // TODO REMOVE; FOR TESTING ONLY
                        >
                            BACK TO HOME
                        </PayButton>
                    </div>
                </ModalContainer>
            </BG>
        </>
    )
}
