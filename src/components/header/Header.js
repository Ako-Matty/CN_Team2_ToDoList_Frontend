import "./Header.css";

const Header = ({user}) => {
    return (
        <div className="header-container">
            <h1>To Do Or Not To Do, App Is The Question</h1>
            {user ? <p>{user.username} Is Logged In </p> : null }
        </div>
    )
};

export default Header;