import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart'

const BannerWrapper = styled.div`
    background-color: black;
    color: white;
`;

const Cart = styled.button`
`;

function Banner(isAuthenticated) {
    const dispatch = useDispatch();
    typeof window !== "undefined" && dispatch(cartActions.getCartCookie({}))
    return (
        <BannerWrapper>
            <div className="section-margin">
                <a href="/cart"><Cart >Cart</Cart></a>
            </div>
        </BannerWrapper>
    )
}

export default Banner
