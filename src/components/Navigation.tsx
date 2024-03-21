import {useState} from 'preact/hooks';

import close from '@assets/img/close_x.png';
import navLogo from '@assets/img/logowhite.png';
import web from '@assets/img/web.png';

export default function Navigation() {
  const [show, setShow] = useState(false);

  const toggleNavigation = () => setShow(prev => !prev);

  console.log(show);

  return (
    <>
      <button
        onClick={toggleNavigation}
        class={`relative h-[30px] w-10 cursor-pointer before:content-[''] before:w-10 before:top-1 before:h-[1px] before:bg-white before:absolute before:left-0 after:content-[''] after:w-9 after:bottom-1 after:h-[1px] after:bg-white after:absolute after:left-0`}
      >
        <span class="w-10 h-[1px] bg-white absolute top-[15px] left-0"></span>
      </button>

      {/* <nav class="fixed top-0 left-0 w-full h-[100vh] inline-block transition-all visible opacity-100 z-[9999999] bg-black/90"> */}
      {/* <div class="fixed pt-[30px] pb-[50px] pl-4 h-full bg-[#1e1e1e]  z-[100] opacity-100 visible  overflow-y-scroll w-[720px] max-w-full">
        <ul class="relative min-h-[12px] pr-[73px]">
        <li class="relative -top-[2px] float-left ">
        <a class="cursor-pointer text-white" href="#">
        <img src={close.src} alt="Close Icon" />
        </a>
        </li>
        <li class="absolute mt-[9px]  left-[49%]">
        <a href="#">
        <img src={navLogo.src} alt="Close Icon" />
        </a>
        </li>
        {/* <li class="relative float-right min-w-[80px] border-[1px] border-[#d7d2bd] rounded leading-[26px] h-[26px] mt-2 p-2 after:content-[''] after:border-solid after:border-[5px]  ">
        <Image src={web} alt="Web Icon" />
        <select
        class="border-none text-[#d7d2bd] px-[10px] max-w-[50px] leading-[1px] h-[14px] text-[13px]"
        name=""
        id="languages"
        >
        <option class="bg-black" value="tr">
        TR
        </option>
        <option class="bg-black" value="en">
        EN
        </option>
        </select>
        </li> 
        </ul>
        <ul class="mt-12">
        <li class="relative leading-10 mb-4">
        <span class="relative text-[#969696] text-3xl block cursor-pointer pl-5 before:content-[''] before:absolute before:h-[30px] before:w-[1px] before:opacity-0 before:top-[6px] before:-left-[1px] before:bg-white">
        Anasayfa
        </span>
        </li>
        </ul>
      </div> */}
      {/* </nav> */}
    </>
  );
}
