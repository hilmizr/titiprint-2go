import React from "react";
import hero from "../../../public/assets/img/hero-img.png";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={`${styles.hero} dark:bg-[#00040A] dark:text-gray-100`}>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className={`${styles.title} text-5xl font-bold leading-snug sm:text-6xl`}>
                        Mau Nge-print tapi malas keluar?
                    </h1>
                    <p className={`${styles.subtitle} mt-3 text-3xl sm:mb-8`}>
                        Jangan risau
                        <span className="dark:text-[#F0007E] font-semibold"> Titiprint aja!</span>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className={`${styles.cta} px-8 py-3 text-xl font-semibold rounded dark:bg-[#F0007E] dark:text-gray-900`}
                        >
                            Pesan Jasa
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src={hero}
                        alt=""
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
