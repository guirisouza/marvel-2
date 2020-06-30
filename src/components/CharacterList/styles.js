import styled from 'styled-components'

const StyledMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;

    .character-search {
        margin: 30px;
        display: flex;
        background: white;
        border-radius: 15px;
        padding: 5px;
        -webkit-box-shadow: -1px -1px 37px 17px rgba(237,29,36,0.53);
        -moz-box-shadow: -1px -1px 37px 17px rgba(237,29,36,0.53);
        box-shadow: -1px -1px 37px 17px rgba(237,29,36,0.53);
        
        input {
            border: 0;
            font-family: 'Open Sans', sans-serif;
            outline:none;
            background: transparent;
            ::placeholder {
                color:black;
            }
        }
    }
`

const StyledCardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-area: content;
    max-width: 1200px;
    margin: 0 auto;
`

const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 77vh;
    

    :after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
  

`

export {StyledMainContainer , StyledCardListContainer, StyledLoader}