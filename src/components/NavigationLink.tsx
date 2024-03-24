interface Props {
  path: string;
  placeholder: string;
}

function NavigationLink({path, placeholder}: Props) {
  return (
    <ul class="pl-4">
      <li className="nav-link ">
        <a aria-label={placeholder} href={path}>
          <span className="nav-placeholder">{placeholder}</span>
        </a>
      </li>
    </ul>
  );
}

export default NavigationLink;
