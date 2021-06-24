import styled from "styled-components"

const BannerWrapper = styled.div`
    background-color: black;
    color: white;
`;

const Cart = styled.button`
`;

function Banner(isAuthenticated) {
    return (
        <BannerWrapper>
            <a href="/cart"><Cart >Cart</Cart></a>
        </BannerWrapper>
    )
}

export default Banner
