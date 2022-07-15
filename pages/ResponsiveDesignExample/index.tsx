import React from "react";
import { responsiveDesignImages } from "../../assets";
import Image from "next/image";
function index() {
  return (
    <div className="">
      <div className=" container  mx-auto flex flex-row justify-between items-center py-6 shadow-sm">
        <div className="text-3xl font-bold text-darkBlue">Manage</div>
        <div className="hidden  flex-row justify-evenly space-x-5 text-md md:flex">
          <p className="hover:text-darkGrayishBlue">Pricing</p>
          <p className="hover:text-darkGrayishBlue">Product</p>
          <p className="hover:text-darkGrayishBlue">About Us</p>
          <p className="hover:text-darkGrayishBlue">Carrer</p>
          <p className="hover:text-darkGrayishBlue">Community</p>
        </div>
        <div>
          <button className=" hidden px-6 p-3 pt-2 bg-brightRed rounded-full text-sm text-white md:block">
            Get Started
          </button>
        </div>
      </div>

      <section id="intro">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {" "}
          <div className="flex flex-col md:w-1/2  mb-32 space-y-10">
            <h1 className="max-w-md font-bold text-darkBlue text-4xl text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className=" max-w-sm text-darkGrayishBlue text-center md:text-left ">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex pt-2 justify-center md:justify-start">
              <button className="  px-6 p-3 pt-2 bg-brightRed rounded-full text-sm text-white ">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={responsiveDesignImages.Introsvg} />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 mb-20 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonals">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-20 mb-20">
          <h3 className=" text-4xl font-bold text-center">
            What's Different About Manage?
          </h3>
          <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6 ">
            <div className=" flex flex-col md:w-1/3 ">
              <div className="flex flex-col items-center  bg-veryLightGray px-10 py-5 space-y-4">
                <span className="w-16 -mt-12">
                  <Image src={responsiveDesignImages.AvatarAnisha} />
                </span>
                <h3 className="text-xl font-bold">Anisha Ali</h3>
                <p className="max-w-2-sm text-darkGrayishBlue ">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:w-1/3">
              <div className="flex flex-col items-center  bg-veryLightGray px-10 py-5 space-y-4">
                <span className="w-16 -mt-12">
                  <Image src={responsiveDesignImages.AvatarAnisha} />
                </span>
                <h3 className="text-xl font-bold">Anisha Ali</h3>
                <p className="max-w-2-sm text-darkGrayishBlue ">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:w-1/3">
              <div className="flex flex-col items-center  bg-veryLightGray px-10 py-5 space-y-4">
                <span className="w-16 -mt-12">
                  <Image src={responsiveDesignImages.AvatarAnisha} />
                </span>
                <h3 className="text-xl font-bold">Anisha Ali</h3>
                <p className="max-w-2-sm text-darkGrayishBlue ">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className=" hidden px-6 p-3 pt-2 bg-brightRed rounded-full text-sm text-white md:block">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="bg-brightRed flex flex-col md:flex-row  py-16 items-center w-full px-10 justify-between">
          <h1 className="   text-5xl text-center text-white font-bold md:text-4xl md:max-w-xl  md:text-left  ">
            Simplify how your team works today
          </h1>
          <div>
            <button className="  px-6 p-3 pt-2 text-brightRed rounded-full text-md bg-white  hover:bg-veryDarkBlue hover:text-brightRed ">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="bg-veryDarkBlue">
          <div className="flex flex-col-reverse md:flex-row justify-between py-10 text-white mx-12">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col  md:items-start">
              <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
              </div>
              <div>
                <Image
                  width={192}
                  height={32}
                  src={responsiveDesignImages.WhiteLogo}
                />
              </div>

              <div className="  flex justify-center  space-x-4 ">
                <a href="" className="">
                  <Image
                    width={32}
                    height={32}
                    src={responsiveDesignImages.FBLogo}
                  />
                </a>
                <a href="">
                  <Image
                    width={32}
                    height={32}
                    src={responsiveDesignImages.YTLogo}
                  />
                </a>

                <a href="">
                  <Image
                    width={32}
                    height={32}
                    src={responsiveDesignImages.PinLogo}
                  />
                </a>
                <a href="">
                  <Image
                    width={32}
                    height={32}
                    src={responsiveDesignImages.TwitterLogo}
                  />
                </a>
                <a href="">
                  <Image
                    width={32}
                    height={32}
                    src={responsiveDesignImages.InstaLogo}
                  />
                </a>
              </div>
            </div>
            <div> links</div>
            <div>form</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
