import headerLogo from "../../assets/icons/header-icon.png"

function Footer(){
    return (
        <div className="mt-[300px]">
            <div className="w-[1220px] mx-auto px-[20px] py-[20px] flex justify-between items-center">
                <a className="text-[#211F54] tracking-wide font-[500]  text-[22px] flex items-center gap-[5px] " href="#"><img src={headerLogo} alt="" />Cleaning X</a>
                <p className="text-[18px] text-[#6E7191]">Copyright © Cleaning X | Designed by <span className="underline text-[#0075FF]" >BRIX Templates</span> - Powered by <span className="underline text-[#0075FF]">Webflow</span> - <span className="underline text-[#0075FF]">Licenses</span></p>
            </div>
        </div>
    )
}

export default Footer