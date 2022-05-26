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
        <div className="main1">
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
              <p className="p1">
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
            className="rounded-3xl grow-0 border-white w-96 h-96 ml-10"
            src="/Images/avater.png"
            alt=""
          />
        </div>
      </div>
      <div className="container1">
        <div className="flex flex-col">
          <p className="text-base">ABOUT ME</p>
          <h1 className="text-2xl font-bold text-gray-800">A bit about me.</h1>
          <p className="p2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet
            nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi
            amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet
            sagittis non.
            <br /> <br /> Pharetra purus quam mauris malesuada etiam nullam.
            Ultrices nec in massa consequat erat iaculis leo.{" "}
          </p>
          <div className="flex">
            <p>Languages</p>
            <p>Technologies</p>
          </div>
          <div className="flex">
            <p>Languages</p>
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
