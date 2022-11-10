import styled from "styled-components";

export const FavoritesContainer = styled.div`
    padding: 16px;

    h2{
        font-size: 19px;
    }

    div{
        display: flex;
        gap: 24px;
        padding: 20px 20px;
    }

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }
    
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`