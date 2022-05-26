import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="sub-con1">
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
            <img className="ml-8" src="Images /darkmood.svg" alt="dd" />
          </ul>
        </div>
        <div className="main1">
          <div className="sub1-main2">
            <span className="sub1-main1">
              <h1 className="text-4xl font-bold">Hi</h1>
              <img className=" ml-1" src="Images /hand.svg" alt="" />
            </span>
            <span>
              <h1 className="text-4xl font-bold">I'm Kemi Anikulapo</h1>
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
                <img className="ml-3" src="Images /arrowup-right.svg" alt="dd" />
              </button>
              <button className="button2">
                See some of my works
                <img className="ml-3" src="Images /arrow-down.svg" alt="dd" />
              </button>
            </span>
          </div>
          <img className="rounded-3xl grow-0 border-white w-96 h-96 " src="Images /avater.png" alt="avater" />
        </div>
      </div>
    </div>
  );
}
