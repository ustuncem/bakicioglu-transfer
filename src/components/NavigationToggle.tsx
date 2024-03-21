interface Props {
  show: boolean;
  toggleNavigation: () => void;
}

export default function NavigationToggle({show, toggleNavigation}: Props) {
  return (
    <button onClick={toggleNavigation} className={`relative h-[30px] w-10 cursor-pointer`}>
      <span
        className={`absolute left-0 h-[1px] bg-white w-10 transition-transform duration-200 ${show ? 'rotate-45 top-[15px]' : 'top-1'}`}
      ></span>
      <span
        className={`absolute left-0 top-[15px] w-9 h-[1px] bg-white transition-all duration-200 ${show ? 'opacity-0 -translate-x-full' : 'translate-x-0 opacity-100'}`}
      ></span>
      <span
        className={`absolute left-0 h-[1px] bg-white transform transition-transform duration-200 ${show ? '-rotate-45 bottom-[13.8px] w-10' : 'bottom-1 w-8'}`}
      ></span>
    </button>
  );
}
