import styled from 'styled-components'

export const Links = styled("a")`
  
    transition: all 300ms ease-out;
    text-decoration: none;
    color: #333;
    border-bottom: 2px solid #1a91db;
    &:hover {
        text-decoration: none;
        color: #1a91db;
        border-bottom-color: transparent;
    }
`