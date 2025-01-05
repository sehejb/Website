const Navbar = () => {
    const nav = ["Home", "Projects", "About Me", "Contact"];

    return (
        <div>
            {nav.map((item) => (
                <div
                    key={item}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
