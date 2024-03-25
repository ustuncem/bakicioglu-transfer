import {useState} from 'preact/hooks';

import map from '@assets/icon/map.png';
import plane from '@assets/icon/plane.png';
import driver from '@assets/icon/driver.png';
import next from '@assets/icon/arrow-next.png';

export default function ServiceCard() {
  const [activeService, setActiveService] = useState(null);

  const toggleActive = (event, serviceId: number) => {
    event.preventDefault();
    setActiveService(serviceId);
  };

  return (
    <div className="text-center mb-8">
      <div className="px-0 mb-6 text-center ">
        <ul class="grid grid-cols-1 md:grid-cols-3 place-items-center text-center mb-9">
          <li class=" inline-block align-baseline mb-6 active:opacity-100">
            <a
              href="#"
              className={`grid justify-items-center font-secondary text-black font-light text-2xl ${
                activeService === 1 ? 'opacity-100' : 'opacity-30'
              } hover:transition-all hover:duration-300 hover:ease-in-out`}
              onClick={e => toggleActive(e, 1)}
            >
              <img className="h-auto max-w-full pb-4" src={map.src} alt="Map Icon" />
              Limousine Service
            </a>
          </li>
          <li class=" align-baseline mb-6 active:opacity-100">
            <a
              href="#"
              className={`grid justify-items-center font-secondary text-black font-light text-2xl ${
                activeService === 2 ? 'opacity-100' : 'opacity-30'
              } hover:transition-all hover:duration-300 hover:ease-in-out`}
              onClick={e => toggleActive(e, 2)}
            >
              <img className="h-auto max-w-full pb-4" src={plane.src} alt="Plane Icon" />
              Driver Icon
            </a>
          </li>
          <li class="align-baseline mb-6 active:opacity-100">
            <a
              href="#"
              className={`grid justify-items-center font-secondary text-black font-light text-2xl ${
                activeService === 3 ? 'opacity-100' : 'opacity-30'
              } hover:transition-all hover:duration-300 hover:ease-in-out`}
              onClick={e => toggleActive(e, 3)}
            >
              <img className="h-auto max-w-full pb-4" src={driver.src} alt="Driver Icon" />
              Airport Transfers
            </a>
          </li>
        </ul>
      </div>
      <div class="mx-auto px-4">
        {activeService === 1 && (
          <div id="1" className="visible animate-fade">
            <div className="mb-8 text-center font-secondary font-normal align-top">
              <p className="text-[#bf9c60] text-xl leading-6">The exclusive way to travel</p>
              <p className="text-[#969696]">
                Enjoy the comfort of our limousines and business vans. Prepare for your next
                business meeting in peace, or let your chauffeur show you the highlights of the
                city.
              </p>
              <p className="text-[#969696]">
                However you may spend your time – you can fully rely on your chauffeur, stay
                relaxed, and reach your destination safely. Step right in and sit back. We will take
                care of everything else.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#Serviceid"
                className="flex items-center justify-center text-base font-secondary text-[#1e1e1e] hover:text-[#bf9c60] transition-all duration-300 font-normal"
              >
                More Service
                <img
                  className="ml-4"
                  style={{height: '11px', width: '17px'}}
                  src={next.src}
                  alt="Next Icon"
                />
              </a>
            </div>
          </div>
        )}
        {activeService === 2 && (
          <div id="2" className="visible animate-fade">
            <div className="mb-8 text-center font-secondary font-normal align-top">
              <p className="text-[#bf9c60] text-xl leading-6">The exclusive way to travel</p>
              <p className="text-[#969696]">
                Enjoy the comfort of our limousines and business vans. Prepare for your next
                business meeting in peace, or let your chauffeur show you the highlights of the
                city.
              </p>
              <p className="text-[#969696]">
                However you may spend your time – you can fully rely on your chauffeur, stay
                relaxed, and reach your destination safely. Step right in and sit back. We will take
                care of everything else.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#Serviceid"
                className="flex items-center justify-center text-base font-secondary text-[#1e1e1e] hover:text-[#bf9c60] transition-all duration-300 font-normal"
              >
                More Service
                <img
                  className="ml-4"
                  style={{height: '11px', width: '17px'}}
                  src={next.src}
                  alt="Next Icon"
                />
              </a>
            </div>
          </div>
        )}
        {activeService === 3 && (
          <div id="3" className="visible animate-fade">
            <div className="mb-8 text-center font-secondary font-normal align-top">
              <p className="text-[#bf9c60] text-xl leading-6">The exclusive way to travel</p>
              <p className="text-[#969696]">
                Enjoy the comfort of our limousines and business vans. Prepare for your next
                business meeting in peace, or let your chauffeur show you the highlights of the
                city.
              </p>
              <p className="text-[#969696]">
                However you may spend your time – you can fully rely on your chauffeur, stay
                relaxed, and reach your destination safely. Step right in and sit back. We will take
                care of everything else.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#Serviceid"
                className="flex items-center justify-center text-base font-secondary text-[#1e1e1e] hover:text-[#bf9c60] transition-all duration-300 font-normal"
              >
                More Service
                <img
                  className="ml-4"
                  style={{height: '11px', width: '17px'}}
                  src={next.src}
                  alt="Next Icon"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
