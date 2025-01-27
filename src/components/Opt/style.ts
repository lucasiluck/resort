import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    li{
        font-size: 14px;
        font-weight: 700;
    }

    :last-child{
        margin-right: 1.75rem;
    }
`