import styled from 'styled-components'
import Link from 'next/link'

// export const StyledLink = styled(Link).attrs(({ styles }) => {
//     return { styles };
// })`
export const StyledLink = styled.a`
    :hover {
        color: blue;
    }
`;


export const Link2 = styled(StyledLink)`
    color: blue;
`;


const LinkBody = styled.a`

`;

export default function LinkStyled({ href }) {
    return (
        <Link href={href} passHref>
            <LinkBody />
        </Link>
    )
}


