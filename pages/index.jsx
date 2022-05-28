import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/Images/background.png')] bg-cover">
        <div className="nav">
          <h4 className="font-bold">KEMI ANIKULAPO</h4>
          <ul className="flex items-center">
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Works</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <img className="ml-8" src="/Images/darkmood.svg" alt="" />
          </ul>
        </div>
        <div className="main1 mt-24">
          <div className="sub1-main2">
            <span className="sub1-main1">
              <h1 className="text-4xl font-bold text-gray-800">Hi</h1>
              <img className="ml-1" src="/Images/hand.svg" alt="" />
            </span>
            <span>
              <h1 className="text-4xl font-bold text-gray-800">
                I'm Kemi Anikulapo
              </h1>
            </span>
            <span>
              <p className="p1 font-serif">
                Passionate di bidang Frontend Dev dan UI/UX Design. Suka
                membangun antarmuka website yang fast-performace dan well-design
                menggunakan teknologi-teknologi terbaru.
              </p>
            </span>
            <span className="flex">
              <button className="button1">
                Let’s work together
                <img className="ml-3" src="/Images/arrowup-right.svg" alt="" />
              </button>
              <button className="button2">
                See some of my works
                <img className="ml-3" src="/Images/arrow-down.svg" alt="" />
              </button>
            </span>
          </div>
          <img
            className="rounded-3xl grow-0 border-white w-96 h-96"
            src="/Images/avater.png"
            alt=""
          />
        </div>
      </div>
      <div className="container1 ">
        <div className="flex flex-col">
          <p className="text-base">ABOUT ME</p>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            A bit about me.
          </h1>
          <p className="p2 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet
            nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi
            amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet
            sagittis non.
            <br /> Pharetra purus quam mauris malesuada etiam nullam. Ultrices
            nec in massa consequat erat iaculis leo.
          </p>
          <div className="flex mt-7 ">
            <div className="flex flex-col">
              <p className="text-gray-800 text-lg  font-bold mb-2 font-serif">
                Language
              </p>
              <div className="ml-2">
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">HTML</p>
                </div>
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">CSS</p>
                </div>
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">JAVASCRIPT</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-16">
              <p className="text-gray-800 text-lg  font-bold mb-2 font-serif">
                Technologies
              </p>
              <div className="ml-2">
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">REACT</p>
                </div>
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">NODE</p>
                </div>
                <div className="flex">
                  <img src="/Images/greaterthan.svg" alt="" />
                  <p className="p3">EXPRESS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="w-9/12 m-auto">
          <p className="">FEATURED PROJECTS</p>
          <div className="flex items-center mb-10">
            <span className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800	">
                Stuff I've Worked On
              </h1>
              <img className="ml-12 mr-52" src="/Images/message.svg" alt="" />
            </span>
            <span className="flex m-auto">
              <img
                className=" mr-4 p-2 rounded-lg border border-gray-300"
                src="/Images/arrowleft.svg"
                alt=""
              />
              <img
                className="p-2 rounded-lg border border-gray-300"
                src="/Images/arrowright.svg"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex w-9/12 m-auto pb-52">
            <div className="cards">
              <div className="inner">
                <div className="flex justify-center">
                  <img
                    className="mt-28"
                    src="/Images/project-image.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project-details">
                <p className="font-bold mt-6 text-xl">Project Title</p>
                <p className="text-base mt-3">
                  Fill your project brief here. It can be the outcome of the
                  project, or some success metrics, or a cheesy tagline.
                </p>
                <div className="flex items-center w-50 mt-3 text-xs">
                  <p className="p5">Mobile App</p>
                  <p className="p5 ml-2 mr-2">Website</p>
                  <p className="p5">SaaS</p>
                </div>
              </div>
            </div>
            <div className="ml-4 cards">
              <div className="inner">
                <div className="flex justify-center">
                  <img
                    className="mt-28"
                    src="/Images/project-image.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project-details">
                <p className="font-bold mt-6 text-xl">Project Title</p>
                <p className="text-base mt-3">
                  Fill your project brief here. It can be the outcome of the
                  project, or some success metrics, or a cheesy tagline.
                </p>
                <div className="flex items-center w-50 mt-3 text-xs">
                  <p className="p5">Mobile App</p>
                  <p className="p5 ml-2 mr-2">Website</p>
                  <p className="p5">SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="font-serif">
            <p className="text-white">CONTACT</p>
            <h1 className="text-white text-2xl font-extrabold mt-2">
              Let work together
            </h1>
            <div>
              <div className="bg-gray-300 opacity-60 py-3 px-6 rounded-lg	 font-bold mt-9">
                <p>
                  <a href="#">kemianikulapo@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 opacity-70 	py-8 px-8 rounded-full">
            <img src="/Images/inbox.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
