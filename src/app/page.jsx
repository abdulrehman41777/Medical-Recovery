
'use client'
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";


import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="border-2 border-[red] relative flex h-screen  flex-col items--center justify--between w-full"
    // style={{
    //   backgroundImage: `url('herobg01.avif')`,
    //   backgroundSize: "100% 100%",
    //   backgroundPosition: "center",
    // }}
    >

      {/*Header Section Start  */}
      <header className="bg-white shadow-md py-4 w-full relative flex justify-between">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            MedicalRecov
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-600 hover:text-red-600">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Product</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-[#FF685B] hover:text-red-600">Login</Link>
            <button className="bg-[#FF685B] text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center space-x-2">
              <span>JOIN US</span>
              <IoIosArrowRoundForward className="w-4 h-4" />

            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-red-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4 md:hidden z-20`}>
          <button
            className="text-gray-600 hover:text-red-600 p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col items-start space-y-4 py-4 pl-6">
            <Link href="#" className="text-gray-600 hover:text-red-600">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Product</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Contact</Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">Login</Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 flex items-center space-x-2">
              <span>JOIN US</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </header>
      {/*Header Section End */}
      <section className="bg-white py--20 ">


        <div className="border-2 border-[orange] h-auto w-full bg--gray-300 mb-[1rem] max-sm:w-full">
          <div className=" py-6 rounded-3xl mx-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">

              <div className="space-y-4">
                <h3 className="text-red-500 text-xl ml-4">Join Us</h3>
                <span className="text-[5rem] leading-none font-bold text-[#252B42]">A Great Place to  <br />Receive Care</span>
                <p className="text-gray-400 leading-6  text-[18px]">
                  Medical Recover is most focused in helping you <br />discover your most beautiful smile
                </p>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded">Get Quote Now</button>
                  <button className="px-4 py-2 font-semibold text-red-500 border border-red-500 rounded">Learn More</button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <img
                    src="bannerimg.png"
                    alt="App Preview 1"
                    // className=" transform rotate-6"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-orange-600 flex justify-center items-center h--screen w-full">
            {/* <div className="border-2 border-purple-600 grid gap-8 p-8 w-[60%] md:grid-cols-1 justify-center items-start mt-[-2rem] bg-white">
              <div className="grid gap-6 mt-8 md:mt-0 md:grid-cols-3">
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>



                  <h4 className=" text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>

                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>



                  <h4 className=" text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>

                  
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>



                  <h4 className=" text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>

           
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div> */}

            <div className="border-2 border-purple-600 grid gap-8 p-8 w-full md:w-[90%] lg:w-[60%] mx-auto md:grid-cols-1 justify-center items-start mt-[-2rem] bg-white">
              <div className="grid gap-6 mt-8 md:mt-0 md:grid-cols-1 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>
                  <h4 className="text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>
                  {/* Sliding bottom border on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* Card 2 */}
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>
                  <h4 className="text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>
                  {/* Sliding bottom border on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>
                {/* Card 3 */}
                <div className="p-6 text-start flex flex-col gap-5 justify-start items-start bg-white rounded-lg shadow-md hover:shadow-lg relative group">
                  <div className="bg-[#E74040] p-4 rounded-full text-2xl w-20 h-20 flex items-center justify-center mx--auto">
                    <FaHeartbeat className="text-white text-[2rem]" />
                  </div>
                  <h4 className="text-lg font-semibold">Online Appointment</h4>
                  <hr className="border border-[#E74040] w-[4rem] mt-2 mx--auto" />
                  <p className="text-gray-600">The gradual accumulation of information about atomic and small scale behaviour...</p>
                  {/* Sliding bottom border on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E74040] transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* <section class="bg-gray-100 py-16">
          <div class="container mx-auto flex justify-between items-center">
            <div class="bg-white p-8 rounded-md shadow-md flex flex-col items-center">
              <div class="bg-red-500 text-white rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Online Appoinment</h3>
              <p class="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
            <div class="bg-white p-8 rounded-md shadow-md flex flex-col items-center">
              <div class="bg-red-500 text-white rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Emergency Case</h3>
              <p class="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
            <div class="bg-white p-8 rounded-md shadow-md flex flex-col items-center">
              <div class="bg-red-500 text-white rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Cancer Care</h3>
              <p class="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
          </div>
        </section>

        <section class="bg-white py-16">
          <div class="container mx-auto flex justify-around items-center">
            <div class="text-center">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">15K</h2>
              <p class="text-gray-600">Happy Customers</p>
            </div>
            <div class="text-center">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">150K</h2>
              <p class="text-gray-600">Monthly Visitors</p>
            </div>
            <div class="text-center">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">15</h2>
              <p class="text-gray-600">Countries Worldwide</p>
            </div>
            <div class="text-center">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">100+</h2>
              <p class="text-gray-600">Top Partners</p>
            </div>
          </div>
        </section>

        <section class="bg-gray-100 py-20">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
            <p class="text-lg text-gray-600 mb-8">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            <button class="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600">Learn More</button>
          </div>
          <div class="container mx-auto mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white rounded-md shadow-md p-6">
                <img src="https://images.unsplash.com/photo-1522205320327-099baf6cc421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Expert 1" class="rounded-md mb-4" />
                <h3 class="text-xl font-bold text-gray-800 mb-2">Anindita Rahmawati</h3>
                <p class="text-gray-600 mb-4">WTA - SINGLES: Australia Open, hard</p>
                <div class="flex items-center space-x-2">
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md p-6">
                <img src="https://images.unsplash.com/photo-1522205320327-099baf6cc421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Expert 2" class="rounded-md mb-4" />
                <h3 class="text-xl font-bold text-gray-800 mb-2">Naomi Osaka</h3>
                <p class="text-gray-600 mb-4">WTA - SINGLES: Australia Open, hard</p>
                <div class="flex items-center space-x-2">
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-md shadow-md p-6">
                <img src="https://images.unsplash.com/photo-1522205320327-099baf6cc421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Expert 3" class="rounded-md mb-4" />
                <h3 class="text-xl font-bold text-gray-800 mb-2">Anindita Rahmawati</h3>
                <p class="text-gray-600 mb-4">WTA - SINGLES: Australia Open, hard</p>
                <div class="flex items-center space-x-2">
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="bg-gray-200 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}



    </main>
  );
}
