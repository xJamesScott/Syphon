import styled from 'styled-components';
import Image from 'next/image';


const FooterContainer = styled.div`

`;

const FooterLogo = styled(Image)`

`;

const NavRow = styled.div`

`;

const NavLinks = styled.div`

`;

const DataRow = styled.div`
    p {

    }
`;

const SocialWrapper = styled.div`

`;

const SocailIcon = style(Image)`

`;

const CopyRightRow = styled.div`

`;


export default function Footer() {
    return (
        <FooterContainer>
            <NavRow>
                <FooterLogo
                    src="/media/placeholderIMG.png" // get from server link
                    width={143}
                    height={25}
                />
                <NavLinks>
                    <a href="#">HOME</a>
                    <a href="#">HEADPHONES</a>
                    <a href="#">SPEAKERS</a>
                    <a href="#">EARPHONES</a>
                </NavLinks>
            </NavRow>

            <DataRow>
                <p>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <SocialWrapper>
                    <SocailIcon
                        // FACEBOOK
                        src="/media/placeholderIMG.png" // get from server link
                        width={24}
                        height={24}
                    />
                    <SocailIcon
                        // TWITTER
                        src="/media/placeholderIMG.png" // get from server link
                        width={24}
                        height={24}
                    />
                    <SocailIcon
                        // INSTAGRAM
                        src="/media/placeholderIMG.png" // get from server link
                        width={24}
                        height={24}
                    />
                </SocialWrapper>
            </DataRow>

            <CopyRightRow>
                <p>
                    Copyright {new Date().getFullYear}. All Rights Reserved
                </p>
            </CopyRightRow>
        </FooterContainer>
    )
}