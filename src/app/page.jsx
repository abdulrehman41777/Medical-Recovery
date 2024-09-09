
'use client'
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { RiStethoscopeFill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import { RxCrossCircled } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import gsap from 'gsap';




import { useEffect, useState } from "react";

export default function Home() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const testimonials = [
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },
    {
      testimonial: "The team at BAMFER come to the table with an incredible amount of knowledge and experience. The staff were extremely professional, and I couldn't be happier with the service that I received.",
      image: "/testimonial-01.png",
      name: "Sarah Albert",
      position: "Designer",
    },

  ];
  useEffect(() => {
    // Ensure GSAP is loaded before running the animation
    if (gsap) {
      gsap.to("#box", {
        duration: 10,
        rotation: 360,
        // delay: 1,
        // transformOrigin: "50% 50%",
        repeat: -1,
        ease: 'linear'

      });

    }
  }, []);



  return (

    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="bg-white shadow-md py-4 w-full sticky top-0 z-50 flex justify-between">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">MedicalRecov</div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-600 hover:text-[#FF685B]">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF685B]">Product</Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF685B]">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF685B]">Contact</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-[#FF685B] hover:text-red-600 transition-transform transform hover:scale-105">Login</Link>
            <button className="bg-[#FF685B] text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center space-x-2 transition-transform transform hover:scale-105">
              <span>JOIN US</span>
              <IoIosArrowRoundForward className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-red-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >

            <BiMenuAltRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4 md:hidden z-20`}>
          <button className="text-gray-600 hover:text-red-600 p-4" onClick={() => setMobileMenuOpen(false)}>

            <RxCrossCircled className="w-6 h-6" />
          </button>
          <nav className="flex flex-col items-start space-y-4 py-4 pl-6">
            <Link href="#" className="text-gray-600 hover:text-red-600">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Product</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Login</Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105  hover:bg-red-600 flex items-center space-x-2">
              <span>JOIN US</span>
              <IoIosArrowRoundForward className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">

        {/*Header Section End */}
        <section className="bg-white py--20 ">
          <div className="border--2 border-[orange] h-auto w-full bg--gray-300 mb-[1rem] max-sm:w-full">
            <div className="py-6 rounded-3xl mx-5">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">

                <div className="space-y-4 px-4 md:px-6 lg:px-8">
                  <h3 className="text-[#FF685B] text-lg md:text-xl lg:text-2xl ml-2 md:ml-4">Join Us</h3>
                  <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-none font-bold text-[#252B42]">
                    A Great Place to <br />
                    Receive Care
                  </span>
                  <p className="text-gray-400 leading-6 text-sm md:text-base lg:text-lg">
                    Medical Recover is most focused on helping you <br />
                    discover your most beautiful smile
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-6 md:px-8 py-2 font-normal text-white bg-red-500 rounded w-full sm:w-auto transition-transform transform hover:scale-105 hover:bg-red-600">
                      Get Quote Now
                    </button>
                    <button className="px-6 md:px-8 py-2 font-normal text-red-500 border border-red-500 rounded w-full sm:w-auto transition-transform transform hover:scale-105 hover:text-white hover:bg-red-500">
                      Learn More
                    </button>
                  </div>
                </div>



                <div className="border--2 border-purple-900 w-full flex justify-center items-center relative">
                  <img
                    id="box"

                    src="/line_1.png" alt="img" className="h-[80%] md:h-[30.5rem] absolute " />
                  <img src="homebanner.png" alt="img.png" className="h-full z-10" />
                </div>
              </div>
            </div>

            <div className="border--2 border-orange-600 flex justify-center items-center h--screen w-full">


              <div className="border--2 border-purple-600 grid gap-8 p-8 w-full md:w-[90%] lg:w-[60%] mx-auto md:grid-cols-1 justify-center items-start mt-[-2rem] bg-white">
                <div className="grid gap-6 mt-8 md:mt-0 md:grid-cols-1 lg:grid-cols-3">

                  <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                    <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                      <FaHeartbeat className="text-white text-[2rem]" />
                    </div>
                    <h4 className="text-lg font-semibold">Online Appointment</h4>
                    <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                    <p className="text-gray-500 font-normal text-[16px] leading-5">The gradual accumulation of information about atomic and small scale behaviour...</p>

                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                    <div className="bg-[#FF55BB] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                      <RiStethoscopeFill className="text-white text-[2rem]" />
                    </div>
                    <h4 className="text-lg font-semibold">Online Appointment</h4>
                    <hr className="border border-[#FF55BB] w-[4rem] mt-2 mx--auto" />
                    <p className="text-gray-500 font-normal text-[16px] leading-5">The gradual accumulation of information about atomic and small scale behaviour...</p>
                    {/* Sliding bottom border on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#FF55BB] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  {/* Card 3 */}
                  <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                    <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                      <FaNotesMedical className="text-white text-[2rem]" />
                    </div>
                    <h4 className="text-lg font-semibold">Online Appointment</h4>
                    <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                    <p className="text-gray-500 font-normal text-[16px] leading-5">The gradual accumulation of information about atomic and small scale behaviour...</p>
                    {/* Sliding bottom border on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className={`sec_2 border--2 border-red-900 w-full py-8`}>
          <div className="flex justify-center items-center">

            <div className="border--2 border-orange-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] max-w-7xl">
              <div className="border--2 border-green-900 w-full h-auto flex flex-col justify-center items-center py-4">
                <span className="text-[#FF685B] text-3xl md:text-6xl lg:text-5xl font-medium">
                  <CountUp end={15} duration={3} suffix="K" />
                </span>
                <p className="font-semibold mt-2 text-[#27356C] text-sm md:text-base lg:text-lg">Happy Customers</p>
              </div>

              <div className="border--2 border-green-900 w-full h-auto flex flex-col justify-center items-center py-4">
                <span className="text-[#FF685B] text-3xl md:text-6xl lg:text-5xl font-medium">
                  <CountUp end={15} duration={3} suffix="K" />
                </span>
                <p className="font-semibold mt-2 text-[#27356C] text-sm md:text-base lg:text-lg">Monthly Visitors</p>
              </div>

              <div className="border--2 border-green-900 w-full h-auto flex flex-col justify-center items-center py-4">
                <span className="text-[#FF685B] text-3xl md:text-6xl lg:text-5xl font-medium">
                  <CountUp end={15} duration={3} suffix="+" />
                </span>
                <p className="font-semibold mt-2 text-[#27356C] text-sm md:text-base lg:text-lg">Countries Worldwide</p>
              </div>

              <div className="border--2 border-green-900 w-full h-auto flex flex-col justify-center items-center py-4">
                <span className="text-[#FF685B] text-3xl md:text-6xl lg:text-5xl font-medium">
                  <CountUp end={100} duration={3} suffix="+" />
                </span>
                <p className="font-semibold mt-2 text-[#27356C] text-sm md:text-base lg:text-lg">Pharmacies</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-10 rounded-3xl mx-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
              <div className="space-y-4 flex  flex-col  gap-5">
                <hr className="border border-[#E74040] w-[10rem]  h-[0.5rem] bg-[#E74040] mt-2 mx--auto" />              <span className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-none font-bold text-[#252B42]">
                  Meet Our Experts
                </span>
                <p className="text-gray-400 leading-6 text-[16px] md:text-[18px]">
                  Medical Recover is most focused in helping you <br />
                  discover your most beautiful smile
                </p>
                <div className="flex space-x-4">

                  {/* <button className="px-6 md:px-10 py-2 font-normal text-red-500 border border-red-500 rounded w-full sm:w-auto transition-transform transform hover:scale-105 hover:text-white hover:bg-red-500">
                    Learn More <IoIosArrowRoundForward className="w-4 h-4" />
                  </button> */}
                  <button className="hover:bg-[#FF685B] text-[#FF685B] border border-[#FF685B] hover:text-white px-4 py-2  transition-transform transform hover:scale-105   flex items-center space-x-2">
                    <span>Learn More</span>
                    <IoIosArrowRoundForward className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="about.png"
                    alt="App Preview 1"
                    className="w-full h-full   max-md:h-[30rem] lg:h--[50rem] object-cover"
                  />
                </div>
              </div> */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-full">
                  <img
                    src="about.png"
                    alt="App Preview 1"
                    className="w-full h-auto max-h-[30rem] lg:max-h-[50rem] object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="bg-[#e7f9f9] py-12">
          <div className="container mx-auto text-start px-3">
            <h3 className="text-orange-600 text-lg font-semibold mb-2">Practice Advice</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Department</h2>
            <p className="text-gray-500 mb-10 font-semibold leading-5 text-[16px]">
              Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
            </p>

            {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="relative">
                <img src="/path-to-image1.jpg" alt="Quick Examination" class="w-full h-48 object-cover"/>
                  <span class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold">Sale</span>
                  <div class="absolute bottom-4 left-4 flex space-x-2">
                    <button class="bg-white p-2 rounded-full shadow-md"><i class="fa fa-heart text-gray-600"></i></button>
                    <button class="bg-white p-2 rounded-full shadow-md"><i class="fa fa-search text-gray-600"></i></button>
                    <button class="bg-white p-2 rounded-full shadow-md"><i class="fa fa-cart-plus text-gray-600"></i></button>
                  </div>
              </div>
              <div class="p-6">
                <h4 class="text-red-500 font-semibold mb-2">Painless procedures</h4>
                <h3 class="text-2xl font-bold mb-2">Quick examination</h3>
                <p class="text-gray-500 mb-4">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <i class="fa fa-star text-yellow-400 mr-1"></i>
                    <span class="text-gray-600 text-sm font-semibold">4.9</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fa fa-shopping-cart text-gray-400 mr-1"></i>
                    <span class="text-gray-600 text-sm">15 Sales</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <span class="line-through text-gray-400">$16.48</span>
                    <span class="text-green-500 font-bold ml-2">$6.48</span>
                  </div>
                  <button class="bg-red-500 text-white px-4 py-2 rounded-lg">Learn More</button>
                </div>
              </div>
            </div>
           
          </div> */}
            <div className="bg--[#e0f4f6] py-10">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src="BOX01.png  " alt="Quick examination" className="w-full h-[25rem] object-cover" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">Sale</span>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 bg--white p-2 rounded-full ">
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><CiHeart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><BsCart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><FaEye /></button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mt-2">
                      <h4 className="text-red-500 text- font-semibold text-start"> Painless procedures</h4>
                      <span className="bg-[#26335D] text-white px-2 py-2 rounded-full text-sm  flex justify-center items-center gap-2"><IoMdStar className="flex  text-[#FFCE31]  text-xl" />
                        4.9</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <h3 className="text-xl   font-bold">Quick examination</h3>
                    </div>
                    <p className="text-gray-500 font-normal mt-2 text-start text-[18px] leading-6">We focus on ergonomics and meeting <br />you where you work. It's only a<br /> keystroke away.</p>
                    <div className="flex items-center space-x-2 mt-4">
                      <LuDownload className="fas fa-shopping-bag text-gray-600 text-xl" />
                      <span className="text-gray-500 font-extrabold text-md ">15 Sales</span>
                    </div>
                    <div className="flex gap-2 justify--between items-center mt-4">
                      <span className="line-through font-semibold text-gray-400">$16.48</span>
                      <span className="text-green-600 font-semibold">$6.48</span>
                    </div>
                    <button className="bg-transparent text-[#FF685B] border border-[#FF685B] px-6 py-3 rounded-full hover:bg-green-600 hover:text-white flex items-center space-x-2 mt-3 ">
                      <span className="text-[18px]">Learn More</span>
                      <IoIosArrowRoundForward className="w-4 h-4" />

                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src="BOX01.png  " alt="Quick examination" className="w-full h-[25rem] object-cover" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">Sale</span>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 bg--white p-2 rounded-full ">
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><CiHeart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><BsCart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><FaEye /></button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mt-2">
                      <h4 className="text-red-500 text- font-semibold text-start"> Painless procedures</h4>
                      <span className="bg-[#26335D] text-white px-2 py-2 rounded-full text-sm  flex justify-center items-center gap-2"><IoMdStar className="flex  text-[#FFCE31]  text-xl" />
                        4.9</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <h3 className="text-xl   font-bold">Quick examination</h3>
                    </div>
                    <p className="text-gray-500 mb-10 font-semibold leading-5 text-[16px]">We focus on ergonomics and meeting <br />you where you work. It's only a<br /> keystroke away.</p>
                    <div className="flex items-center space-x-2 mt-4">
                      <LuDownload className="fas fa-shopping-bag text-gray-600 text-xl" />
                      <span className="text-gray-500 font-extrabold text-md ">15 Sales</span>
                    </div>
                    <div className="flex gap-2 justify--between items-center mt-4">
                      <span className="line-through font-semibold text-gray-400">$16.48</span>
                      <span className="text-green-600 font-semibold">$6.48</span>
                    </div>
                    <button className="bg-transparent text-[#FF685B] border border-[#FF685B] px-6 py-3 rounded-full hover:bg-green-600 hover:text-white flex items-center space-x-2 mt-3 ">
                      <span className="text-[18px]">Learn More</span>
                      <IoIosArrowRoundForward className="w-4 h-4" />

                    </button>
                  </div>
                </div>


                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src="BOX01.png  " alt="Quick examination" className="w-full h-[25rem] object-cover" />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">Sale</span>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 bg--white p-2 rounded-full ">
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><CiHeart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><BsCart /></button>
                      <button className="text-black bg-white p-2 rounded-full hover:text-red-500 text-[1.5rem]"><FaEye /></button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mt-2">
                      <h4 className="text-red-500 text- font-semibold text-start"> Painless procedures</h4>
                      <span className="bg-[#26335D] text-white px-2 py-2 rounded-full text-sm  flex justify-center items-center gap-2"><IoMdStar className="flex  text-[#FFCE31]  text-xl" />
                        4.9</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <h3 className="text-xl   font-bold">Quick examination</h3>
                    </div>
                    <p className="text-gray-500 font-normal mt-2 text-start text-[18px] leading-6">We focus on ergonomics and meeting <br />you where you work. It's only a<br /> keystroke away.</p>
                    <div className="flex items-center space-x-2 mt-4">
                      <LuDownload className="fas fa-shopping-bag text-gray-600 text-xl" />
                      <span className="text-gray-500 font-extrabold text-md ">15 Sales</span>
                    </div>
                    <div className="flex gap-2 justify--between items-center mt-4">
                      <span className="line-through font-semibold text-gray-400">$16.48</span>
                      <span className="text-green-600 font-semibold">$6.48</span>
                    </div>
                    <button className="bg-transparent text-[#FF685B] border border-[#FF685B] px-6 py-3 rounded-full hover:bg-green-600 hover:text-white flex items-center space-x-2 mt-3 ">
                      <span className="text-[18px]">Learn More</span>
                      <IoIosArrowRoundForward className="w-4 h-4" />

                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="bg0-[#e7f9f9] py-12 px-3">
          <div className="container mx-auto text-start">
            <h3 className="text-orange-600 text-lg font-semibold mb-2">Practice Advice</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading Medicine</h2>
            <p className="text-gray-500 mb-10 font-semibold leading-5 text-[16px]">
              Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
            </p>


            <div className="bg--[#e0f4f6] py-10">
              <div className="border--2 border-red-800 container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 px-6">
                <div className="lg:col-span-2">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}

                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    freeMode={true}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper"
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="border border-[#FF685B] bg-white p--4 shadow-xl h--[15rem] relative max-sm:pb-10 p-10">
                          <div className="flex items-center mb-4 ">
                            {Array(5).fill(0).map((_, i) => (
                              <IoMdStar key={i} className="h-5 w-5 text-yellow-500" />
                            ))}
                          </div>
                          <p className="text-gray-500 font-normal mt-2 text-start text-[18px] leading-6">
                            {testimonial.testimonial}
                          </p>
                          <div className="flex items-center mt-4 relative">
                            <Image
                              src={testimonial.image}
                              className="rounded-full h-18 w-18 md:h-18 md:w-18 border-2 border-white"
                              alt={testimonial.name}
                              width={64}
                              height={64}
                            />
                            <div className="ml-4">
                              <div className="text-[#FF685B] text-lg font-semibold mb-">{testimonial.name}</div>
                              <div className="text-sm text-black font-semibold">{testimonial.position}</div>
                            </div>
                          </div>

                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section className="bg--[#e7f9f9] py-12 px-3">
          <div className="container mx-auto text-start">
            <h3 className="text-orange-600 text-lg font-semibold mb-2">Practice Advice</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading Medicine</h2>
            <p className="text-gray-500 mb-10 font-semibold leading-5 text-[16px]">
              Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
            </p>


            <div className="bg--[#e0f4f6] py-10">
              <div className="border--2 border-red-800 container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 px-6">

                <div className="container mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="relative">
                        <img src="team01.png" alt="Julian Jameson" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900">Julian Jameson</h3>
                        <p className="text-gray-500 mb-4">Profession</p>
                        <div className="flex justify-center space-x-4">
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaFacebook />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaInstagram />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaTwitter />
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="relative">
                        <img src="team01.png" alt="Julian Jameson" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900">Julian Jameson</h3>
                        <p className="text-gray-500 mb-4">Profession</p>
                        <div className="flex justify-center space-x-4">
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaFacebook />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaInstagram />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaTwitter />
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="relative">
                        <img src="team01.png" alt="Julian Jameson" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900">Julian Jameson</h3>
                        <p className="text-gray-500 mb-4">Profession</p>
                        <div className="flex justify-center space-x-4">
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaFacebook />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaInstagram />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaTwitter />
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="relative">
                        <img src="team01.png" alt="Julian Jameson" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900">Julian Jameson</h3>
                        <p className="text-gray-500 mb-4">Profession</p>
                        <div className="flex justify-center space-x-4">
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaFacebook />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaInstagram />
                          </Link>
                          <Link href="#" className="text-red-500 text-3xl transition transform hover:text-red-700 hover:scale-110 duration-300 ease-in-out">
                            <FaTwitter />
                          </Link>
                        </div>

                      </div>
                    </div>







                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="flex justify-center items-center min--h-screen bg--gray-100 py-10">
          <div className="w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] px-6 py-8 bg-white rounded-md text-center">
            <p className="text-sm text-red-500 font-semibold uppercase mb-2">Newsletter</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Join Us</h1>
            <p className="text-gray-500 mb-10 font-normal leading-6 text-[22px]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <form className="flex flex-col md:flex-row items-center justify-center gap--3 max-sm:gap-2">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-4 border border-gray-300 rounded--md md:rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400" required />
              <button type="submit" className="px-6 py-4 bg-red-500 text-white font-semibold rounded--md md:rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <footer className="border--2 border-red-900 mb-8 w-[80%] mx-auto flex flex-col justify-center items-center bg-white py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-11 gap-5 w-full">
            <ul className="border--2 border-green-900 w-full flex flex-col items-start gap-3">
              <li className="text-lg font-bold text-[#252B42]">Company Info</li>
              <li className="text-base font-medium text-[#737373]">About Us</li>
              <li className="text-base font-medium text-[#737373]">Career</li>
              <li className="text-base font-medium text-[#737373]">We are hiring</li>
              <li className="text-base font-medium text-[#737373]">Blog</li>
            </ul>
            <ul className="border--2 border-green-900 w-full flex flex-col items-start gap-3">
              <li className="text-lg font-bold text-[#252B42]">Features</li>
              <li className="text-base font-medium text-[#737373]">Business Marketing</li>
              <li className="text-base font-medium text-[#737373]">User Analytics</li>
              <li className="text-base font-medium text-[#737373]">Live Chat</li>
              <li className="text-base font-medium text-[#737373]">Unlimited Support</li>
            </ul>
            <ul className="border--2 border-green-900 w-full flex flex-col items-start gap-3">
              <li className="text-lg font-bold text-[#252B42]">Resources</li>
              <li className="text-base font-medium text-[#737373]">iOS & Android</li>
              <li className="text-base font-medium text-[#737373]">Watch a Demo</li>
              <li className="text-base font-medium text-[#737373]">Customers</li>
              <li className="text-base font-medium text-[#737373]">API</li>
            </ul>
            <ul className="border--2 border-green-900 w-full flex flex-col items-start gap-3">
              <li className="text-lg font-bold text-[#252B42]">Get In Touch</li>
              <li className="text-base font-medium text-[#737373] flex items-center">
                <MdLocalPhone className="text-xl text-[#FF685B] mr-2" /> (480) 555-0103
              </li>
              <li className="text-base font-medium text-[#737373] flex items-center">
                <FaLocationDot className="text-2xl text-[#FF685B] mr-2" /> 4517 Washington Ave. Manchester, Kentucky 39495
              </li>
              <li className="text-base font-medium text-[#737373] flex items-center">
                <IoMailSharp className="text-xl text-[#FF685B] mr-2" /> debra.holt@example.com
              </li>
            </ul>
          </div>
          <div className="border--2 border-green-900 w-full py-2 flex items-center justify-between">
            <p className="text-[#737373] font-semibold">Digital RX | All Right Reserved</p>
            <div className="flex gap-2">
              <FaFacebook className="text-lg text-[#FF685B]" />
              <FaInstagram className="text-lg text-[#FF685B]" />
              <FaTwitter className="text-lg text-[#FF685B]" />
            </div>
          </div>
        </footer>

      </main>

    </div>
  );
}
