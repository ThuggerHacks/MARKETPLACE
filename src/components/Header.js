import './style/style.css';


const Header = () => {

    return (
        <div className="header-container">
            <div className="profile">
                <span className="email-data"><strong>{sessionStorage.email}</strong></span>
            </div>
        </div>
    );
}

export default Header;