import "./Header.scss"
import { Nav } from "../Nav/Nav"
import { UiButton } from "../UiButton/Button"

export const Header = () => { 
    return (
        <header className="header">
            <img src="logo.svg" alt="logo" className="logo" />
            <Nav />
            <UiButton />
        </header>
    )
}