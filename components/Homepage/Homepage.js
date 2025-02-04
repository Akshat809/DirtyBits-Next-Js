import Image from "next/image";
import ms from "../../public/ms.png";
import cal from "../../public/calendar.png";
import hero from "../../public/hero.png";
import SmoothList from "react-smooth-list";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import { ArrowForward, Check } from "@mui/icons-material";
import { MdLeaderboard } from "react-icons/md";
import { GiLightningShield } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

import Feature from "../Feature";

export default function Homepage() {
  return (
    <>
      <div class="relative space-y-8 container p-10 mx-auto max-w-screen-xl flex-col justify-center items-center">
        <Zoom>
          <div className="absolute hidden md:block opacity-70 top-[10rem] right-[30rem]">
            <Image
              src={ms}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="absolute hidden md:block  opacity-70 top-[10rem] right-[4rem]">
            <Image
              src={cal}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </Zoom>
        <div class="container px-4 sm:px-8 xl:px-20 mx-auto md:h-[1100px] h-[650px]">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start  md:items-center mt-[10rem]">
            <div class="hero-text col-span-6 ">
              <SmoothList>
                <h1 class="text-4xl md:text-5xl lg:text-5xl max-w-xl text-white leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
                  Welcome to DirtyBits
                </h1>
              </SmoothList>
              <SmoothList>
                <span className="block text-white font-light xl:block mt-5 text-xl md:text-4xl tracking-wider">
                  Be a Coder with us.
                </span>
              </SmoothList>
              <SmoothList>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  First, solve the problem. Then, write the code.
                </p>
              </SmoothList>
              <SmoothList>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/problemset"
                      className="w-full flexContainer  px-8 py-3 border border-transparent text-base   rounded-full font-semibold text-black bg-white hover:opacity-70 hover:text-black md:py-4 md:text-lg md:px-10 shadow-xl shadow-white/20 transition-all ease-in-out duration-400 active:ring-4 active:ring-white/50"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </SmoothList>
            </div>

            <div class="hero-image col-span-6 md:block hidden">
              <Zoom>
                <div className="">
                  <Image
                    className="cartoon"
                    src={hero}
                    alt="hero section image"
                    width={600}
                    height={700}
                    priority
                    placeholder="blur"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <div className="w-full mt-[20rem] h-full md:h-[1200px] ">
          <div className="space-y-16">
            <div className="lg:text-center space-y-16">
              <h2 className="text-base lg:text-4xl text-center text-custom-indigo font-semibold tracking-wide uppercase">
                Online Coding Platform
              </h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-2xl text-center uppercase">
                Platform To Enhance Your Skills
              </p>
              <p className="mt-4 max-w-2xl lg:text-xl text-base text-center text-gray-500 lg:mx-auto">
                SOME FEATURES
              </p>
            </div>
            {/* <div className="flex lg:flex-row lg:justify-center lg:items-center lg:space-x-20"> */}
            <div className="grid lg:grid-cols-3 space-y-9 grid-rows-3 lg:space-y-0 justify-evenly">
              <Zoom>
                <div>
                  <Feature
                    name="Fast Judge Server"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                    colorString="from-indigo-500 via-purple-500 to-pink-500"
                    icon={<GiLightningShield />}
                    borderColor="border-[#BF50D6]"
                  />
                </div>
              </Zoom>

              <Zoom>
                <div>
                  <Feature
                    name="Create your Blog"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                    icon={<FaBlog />}
                    colorString="from-orange-700 via-orange-600 to-pink-400"
                    borderColor="border-[#EF6458]"
                  />
                </div>
              </Zoom>
              <Zoom>
                <div>
                  <Feature
                    name="Leaderboard"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                    icon={<MdLeaderboard />}
                    colorString="from-green-400 via-green-500 to-lime-300"
                    borderColor="border-[#7EDF61]"
                  />
                </div>
              </Zoom>
              <Zoom>
                <div>
                  <Feature
                    name="Add Problems"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                    icon={<FiLayers />}
                    colorString="from-indigo-600 via-indigo-500 to-sky-300"
                    borderColor="border-custom-indigo"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="py-12 h-[700px]">
          <div className="">
            <section class=" mx-auto px-4 sm:px-6 lg:px-4 py-12 space-y-20">
              <div class="text-center pb-12">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white capitalize">
                  Check our Awesome{" "}
                  <span className="text-custom-indigo">team</span>
                </h1>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Fade bottom>
                  <div class="bg-custom-indigo  rounded-lg shadow-lg flex md:p-12 p-5 flex-col justify-center items-center">
                    <div class="mb-8">
                      <img
                        class="object-center object-cover rounded-full h-36 w-36"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="photo"
                      />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-white font-bold mb-2">
                        Dany Bailey
                      </p>
                      <p class="text-base text-black font-extrabold">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div class="bg-custom-indigo  rounded-lg shadow-lg md:p-12 p-5 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <img
                        class="object-center object-cover rounded-full h-36 w-36"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="photo"
                      />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-white font-bold mb-2">
                        Lucy Carter
                      </p>
                      <p class="text-base text-black font-extrabold">
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div class="bg-custom-indigo  rounded-lg shadow-lg md:p-12 p-5 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <img
                        class="object-center object-cover rounded-full h-36 w-36"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                        alt="photo"
                      />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-white font-bold mb-2">
                        Jade Bradley
                      </p>
                      <p class="text-base text-black font-extrabold">Dev Ops</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </section>
          </div>
        </div>

        <div className="hidden lg:block bg-red-600">
          <body className="font-sans">
            <div className="min-h-screen flex justify-center items-center">
              <div>
                <Fade bottom>
                  <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                      <span className="text-custom-indigo tracking-wide font-bold md:text-4xl lg:text-5xl">
                        Flexible{" "}
                      </span>
                      <span className="text-white font-bold">Plans</span>
                    </h1>
                    <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                      Choose a plan that works best for you.
                      <br />
                    </p>
                  </div>
                </Fade>
                <Zoom>
                  <div className="pt-24 flex lg:flex-row">
                    <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl opacity-50 cursor-not-allowed">
                      <h1 className="text-black font-semibold text-2xl">
                        Basic
                      </h1>
                      <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">Rs. </span>
                        <span className="text-3xl font-semibold">0</span>
                        <span className="text-gray-400 font-medium">
                          / user
                        </span>
                      </p>
                      <hr className="mt-4 border-1" />
                      <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            User Profile{" "}
                            <span className="text-black">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            Add Problems{" "}
                            <span className="text-black">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            <span className="text-black">Dashboard</span> access
                          </span>
                        </p>

                        <a href="#" className="cursor-not-allowed">
                          <p className="w-full py-4 bg-custom-indigo mt-8 rounded-xl text-white">
                            <span className="font-medium">Choose Plan</span>
                            <span className="pl-2 material-icons align-middle text-sm">
                              <ArrowForward />
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                      <h1 className="text-white font-semibold text-2xl">
                        Startup
                      </h1>
                      <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">Rs </span>
                        <span className="text-3xl font-semibold">1</span>
                        <span className="text-gray-400 font-medium">
                          / user
                        </span>
                      </p>
                      <hr className="mt-4 border-1 border-gray-600" />
                      <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            User Profile{" "}
                            <span className="text-white">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            Add Problems{" "}
                            <span className="text-white">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            <span className="text-white">Dashboard</span> access
                          </span>
                        </p>

                        <a href="#" className="">
                          <p className="w-full py-4 bg-custom-indigo mt-8 rounded-xl text-white">
                            <span className="font-medium">Choose Plan</span>
                            <span className="pl-2 material-icons align-middle text-sm">
                              <ArrowForward />
                            </span>
                          </p>
                        </a>
                      </div>
                      <div className="absolute top-4 right-4">
                        <p className="bg-indigo-800 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                          Popular
                        </p>
                      </div>
                    </div>
                    <div className="w-96 p-8 opacity-50 bg-white text-center rounded-3xl pl-16 shadow-xl cursor-not-allowed">
                      <h1 className="text-black font-semibold text-2xl">
                        Enterprise
                      </h1>
                      <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">Rs </span>
                        <span className="text-3xl font-semibold">0</span>
                        <span className="text-gray-400 font-medium">
                          / user
                        </span>
                      </p>
                      <hr className="mt-4 border-1" />
                      <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            User Profile{" "}
                            <span className="text-black">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            Add Problems{" "}
                            <span className="text-black">access</span>
                          </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          <span className="material-icons align-middle">
                            <Check />
                          </span>
                          <span className="pl-2">
                            <span className="text-black">Dashboard</span> access
                          </span>
                        </p>

                        <a href="#" className="cursor-not-allowed">
                          <p className="w-full py-4 bg-custom-indigo mt-8 rounded-xl text-white">
                            <span className="font-medium">Choose Plan</span>
                            <span className="pl-2 material-icons align-middle text-sm">
                              <ArrowForward />
                            </span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
}
