import styled from 'styled-components';

import Link from 'next/link';


export const StyledLink = styled(Link)`
    li {
        padding: 1rem 0;
    }

    &:hover {
        cursor: pointer;
        color: tan;
    }
`

export const StyledIcon = styled.div`
    &:hover {
        cursor: pointer;
        background-color: tan;
        color: white;
    }

    @media (max-width: 768px) {
        cursor: pointer;
        background-color: tan;
        color: white !important;
    }
`

export const StyledImage = styled.div`
`