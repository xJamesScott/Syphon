import styled from 'styled-components';
import Image from 'next/image';
import { ProductWrapper, Cost, SummaryTotals } from './CheckoutSummary';


export const ModalContainer = styled.div`

`;

export const CheckIcon = styled.div`

`;




export default function ThankYouModal() {
    return (
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
            </div>
        </ModalContainer>
    )
}
