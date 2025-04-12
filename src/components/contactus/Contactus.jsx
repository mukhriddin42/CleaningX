import phoneLogo from "../../assets/icons/phone-logo.png";

function Contactus(){
    return (
        <div className="border-1 border-red-500">
            <div className="w-[1220px] mx-auto px-[20px] py-[20px]">
                <h1 className="text-[44px] font-[500] text-[#211F54]">Contact us</h1>
                <div className="flex items-start gap-[20px]">
                    <div className="border-1 border-red-500 pr-[30px] py-[30px] w-[50%] ">
                        <p className="text-[18px] text-[#6E7191] leading-[30px] w-[50%]">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                        <div className="inline-block flex gap-[25px] items-center cursor-pointer mt-[15px] ">
                            <div className="flex items-center gap-[15px] hover:scale-105 duration-300  px-[10px] rounded-[14px] shadow-sm">
                                <img className="w-[65px]" src={phoneLogo} alt="" />
                                <div>
                                    <span className="text-[#6E7191]">Call us now</span>
                                    <h3 className="text-[18px] text-[#211F54] font-[500]">(414) 567 - 2109</h3>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-[24px] text-[#211F54] font-[600] pt-[15px]">Not convinced yet?</h1>
                        <p className="text-[18px] text-[#6E7191] leading-[30px] w-[50%] pt-[15px]">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                        <a className="mt-[15px] text-[#211F54] bg-[#fff] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:bg-[#0075FF] hover:text-[#fff] hover:scale-105 duration-300 ml-[10px] shadow-sm" href="">Browse our packages</a>
                    </div>
                    <form className="border-1 pl-[30px] py-[30px] w-[50%]" action="">
                        <div className="flex">
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Full name</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Phone number</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Address</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Email</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="email" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Requested service</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[18px] text-[#211F54]" htmlFor="">Day of service</label>
                                <input className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" type="email" />
                            </div>
                        </div>
                        <div>
                            <p className="text-[18px] text-[#211F54]">Add note</p>
                            <textarea className="border-1 border-[#211F54] rounded-[16px] px-[8px] py-[12px]" name="" id=""></textarea>
                        </div>
                        <button className="text-[#fff] bg-[#0075FF] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300 mr-[10px]">Submit message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus