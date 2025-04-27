const Navbar = () => {
    const nav = ["Home", "Projects", "About Me", "Contact"];

    return (
        <div className="flex text-black text-2xl p-5 bg-black">
        <a href="www.google.com" className="ml-5 text-white">
            Sehej Brar
        </a>
        
        <ul className="flex w-[750px] ml-auto justify-between mr-5 text-white">
            {nav.map((item) => (
                <li
                    key={item}>
                    {item}
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Navbar;
