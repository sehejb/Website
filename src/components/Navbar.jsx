
const Navbar = () => {
    const nav = ["Home", "Projects", "Resume", "Contact"];

    return (
        <div className="flex text-black text-2xl pt-5 pr-5 bg-black">
            <a href="www.google.com" className="ml-5 text-white">
                Sehej Brar
            </a>
            
            <ul className="flex w-2/5 ml-auto justify-between mr-5 text-white">
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
