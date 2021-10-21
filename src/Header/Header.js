import "./Header.scss"

function Header() {
    return (
        <header>
            <div className="header-left">
                MyFace
            </div>
            <div className="header-right">
                <ul>
                    <li>Posts</li>
                    <li>Users</li>
                    <li>Create Post</li>
                    <li>Create New User</li>
                </ul>

            </div>
        </header>
    );
}

export default Header;