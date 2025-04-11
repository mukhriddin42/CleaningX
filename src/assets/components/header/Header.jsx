function Header() {
    return (
        <div className="">
            <nav className="w-[1240px] border-[2px] border-green-600 mx-auto px-[20px] py-[20px] flex justify-between">
                <div className="flex gap-[25px]">
                    <a href="#">Cleaning X</a>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Articles</a>
                    <a href="#">Contact</a>
                </div>
                <div className="flex gap-[25px]">
                    <a href="#">Cart(0)</a>
                    <a href="#">Get free quote</a>
                </div>
            </nav>
        </div>
    )
}

export default Header