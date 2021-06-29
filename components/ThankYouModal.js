import styled from 'styled-components';
import Image from 'next/image';
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
    setModal // TODO - REMOVE; FOR TESTING ONLY
}) {
    console.log({ setModal: setModal })
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
                            <ProductWrapper>
                                <h3>
                                    {/* first item name */}
                                </h3>
                                <h4>
                                    {/* first item price */}
                                </h4>
                                <p>
                                    {/* first item quanitity */}
                                </p>
                                {
                                    // if more than one item in state display below
                                    <>
                                        <hr />
                                        <p> and {/* number of items from cart*/} other item(s)</p>
                                    </>
                                }
                            </ProductWrapper>
                        </div>
                        <div className="total-box">
                            <SummaryTotals>TOTAL</SummaryTotals>
                            <Cost>
                                {/* total cost */}
                            </Cost>
                        </div>
                        {/* TODO - ENABLE A TAG TO REDIRECT 'BACK TO HOME' */}
                        {/* <a href="/"> */}
                        <PayButton
                            onClick={() => setModal(false)} // TODO REMOVE; FOR TESTING ONLY
                        >
                            BACK TO HOME
                        </PayButton>
                        {/* </a> */}
                    </div>
                </ModalContainer>
            </BG>
        </>
    )
}
