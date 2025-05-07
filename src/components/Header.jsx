export default function Header() {
    return (
      <div className="font-sans flex flex-row items-center justify-center gap-12 text-sm m-6">
        {["home", "about", "projects", "contact"].map((label) => (
          <a
            key={label}
            href={`/${label === "home" ? "" : label}`}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:scale-110"
          >
            {label}
          </a>
        ))}
      </div>
    );
  }
  