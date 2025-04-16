export function DropdownList({ items }) {
    return (
      <ul className="p-4">
        {items.map(({ label, href, hasArrow = true }, index) => (
          <li
            key={index}
            className="group mb-2 flex cursor-pointer items-center space-x-2 text-black"
          >
            {href ? <a href={href}>{label}</a> : <span>{label}</span>}
            {hasArrow && (
              <img
                src="/_next/static/media/dropdown.2f45e22d.svg"
                alt="Profile"
                width="10"
                height="10"
                className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
              />
            )}
          </li>
        ))}
      </ul>
    );
  }