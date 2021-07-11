import styled from 'styled-components';
import Image from 'next/image';


const FooterContainer = styled.footer`
    flex-direction: column;
`;

const FooterLogo = styled(Image)`

`;

const NavRow = styled.div`
    display: flex;
`;

const NavLinks = styled.div`
    display: flex;
`;

const DataRow = styled.div`
    display: flex;
    p {

    }
`;

const SocialWrapper = styled.div`
    display: flex;
`;

const SocailIcon = styled(Image)`

`;

const CopyRightRow = styled.div`

`;

export default function Footer() {

    const date = new Date()

    return (
        <FooterContainer className="section-margin">
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
                    Syphon is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
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
                    Copyright {date.getFullYear()}. All Rights Reserved
                </p>
            </CopyRightRow>
        </FooterContainer>
    )
}