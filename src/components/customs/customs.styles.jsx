import styled from 'styled-components'

import Link from 'next/link'

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
	background-color: tan;
	color: white;

	&:hover {
		cursor: pointer;
		background-color: black;
		color: tan;
	}

	@media (max-width: 768px) {
		cursor: pointer;
	}
`

export const StyledImage = styled.div``
