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
            <div className="section-margin">
                <a href="/cart"><Cart >Cart</Cart></a>
            </div>

        </BannerWrapper>
    )
}

export default Banner
