import React from 'react'
import aboutImage1 from "../../assets/images/about-image-1.png"
import aboutImage2 from "../../assets/images/about-image-2.png"
import aboutImage3 from "../../assets/images/about-image-3.png"

function About() {
  return (
    <div className="py-[20px]">
        <div className="w-[1240px] mx-auto px-[20px] py-[20px]">
            <h1 className="text-[44px] font-[500] text-[#211F54] text-center">About us</h1>
            <p className="text-[20px] text-[#6E7191] text-center w-[50%] mx-auto">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            <div className="flex items-center gap-[20px] py-[35px]">
                <div className="flex flex-col items-center gap-[15px]">
                    <img className="w-[200px] h-[200px]" src={aboutImage1} alt="" />
                    <h3 className="text-[24px] text-[#211F54] font-[700] text-center">1. Schedule online</h3>
                    <p className="text-[18px] text-[#6E7191] text-center">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                </div>
                <div className=" flex flex-col items-center gap-[15px]">
                    <img className="w-[200px] h-[200px]" src={aboutImage2} alt="" />
                    <h3 className="text-[24px] text-[#211F54] font-[700] text-center">2. Pay online easily</h3>
                    <p className="text-[18px] text-[#6E7191] text-center">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                </div>
                <div className="flex flex-col items-center gap-[15px]">
                    <img className="w-[200px] h-[200px] text-center" src={aboutImage3} alt="" />
                    <h3 className="text-[24px] text-[#211F54] font-[700] text-center">3. Get your house cleaned</h3>
                    <p className="text-[18px] text-[#6E7191] text-center">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                </div>
            </div>
            <div className="text-center">
                <a className="text-[#fff] bg-[#0075FF] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300 mr-[10px]" href="">Get a free quote</a>
                <a className="text-[#211F54] bg-[#fff] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300 ml-[10px] shadow-sm" href="">Explore services</a>
            </div>
        </div>
    </div>
  )
}

export default About