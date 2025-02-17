import "./Nav.scss"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Careers</a></li>
            </ul>
        </nav>
    )
 }