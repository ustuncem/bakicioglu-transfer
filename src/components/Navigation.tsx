import {useCallback, useState} from 'preact/hooks';

import close from '@assets/img/close_x.png';
import navLogo from '@assets/img/logowhite.png';
import web from '@assets/img/web.png';

export default function Navigation() {
  const [show, setShow] = useState<boolean>(false);
  // const toggleNavigation = useCallback(() => setShow(prev => !prev), []);
  return (
    <nav className="fixed top-0 left-0 w-full h-[100vh] pt-6 inline-block transition-all ">
      <div className="fixed pt-[30px] pb-[50px] pl-4 h-full bg-[#1e1e1e]  z-[100]   overflow-y-scroll w-[720px] max-w-full">
        <ul className="relative min-h-[12px] pr-[73px]">
          <li className="relative -top-[2px] float-left ">
            <a href="#">
              <img src={close.src} alt="Close Icon" />
            </a>
          </li>
          <li className="absolute mt-[9px]">
            <a href="#">
              <img src={navLogo.src} alt="Close Icon" />
            </a>
          </li>
          {/* <li className="relative float-right min-w-[80px] border-[1px] border-[#d7d2bd] rounded leading-[26px] h-[26px] mt-2 p-2 after:content-[''] after:border-solid after:border-[5px]  ">
            <Image src={web} alt="Web Icon" />
            <select
              className="border-none text-[#d7d2bd] px-[10px] max-w-[50px] leading-[1px] h-[14px] text-[13px]"
              name=""
              id="languages"
            >
              <option className="bg-black" value="tr">
                TR
              </option>
              <option className="bg-black" value="en">
                EN
              </option>
            </select>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
