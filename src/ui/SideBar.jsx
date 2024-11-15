import styled from "styled-components";
import Logo from "./Logo"
import MainNav from "./MainNav"

const StyledSideBar =styled.aside`
        background-color: var(--color-grey-0);
        padding: 1.2rem 4.8rem;
        border-bottom: 1px solid var(--color-grey-100);
        grid-row: 1/-1;
        display: flex;
        flex-direction: column;
        gap: 5.2rem;
`

function SideBar() {
    return (
    <StyledSideBar>
        <Logo />
        <MainNav />
    </StyledSideBar>
)
}

export default SideBar;