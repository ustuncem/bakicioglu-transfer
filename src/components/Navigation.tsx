import {useState} from 'preact/hooks';
import NavigationLink from './NavigationLink';

import {HEADER_HEIGHT} from '@constants';

import NavigationToggle from './NavigationToggle';

export default function Navigation() {
  const [show, setShow] = useState(false);

  const toggleNavigation = () => setShow(prev => !prev);

  return (
    <>
      <NavigationToggle show={show} toggleNavigation={toggleNavigation} />
      <div
        className={`fixed left-0 right-0 transition-all duration-200  bg-[#1e1e1e] ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{
          height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
          top: `${HEADER_HEIGHT}px`,
        }}
      >
        <NavigationLink path="/" placeholder="Anasayfa" />
        <NavigationLink path="/" placeholder="Kurumsal" />
        <NavigationLink path="/" placeholder="Hizmetlerimiz" />
        <NavigationLink path="/" placeholder="Araç Filomuz" />
        <NavigationLink path="/" placeholder="Blog" />
        <NavigationLink path="/" placeholder="SSS" />
        <NavigationLink path="/" placeholder="İletişim" />
      </div>

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
