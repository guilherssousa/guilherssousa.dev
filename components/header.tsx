import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/works",
    label: "Trabalhos",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contato",
  },
];

interface Props {
  toggleMenu: Function;
}

const Header: React.FC<Props> = ({ toggleMenu }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onIntersect: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.intersectionRatio < 1);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: [1],
    };

    const { current: headerEl } = headerRef;

    const observer = new IntersectionObserver(onIntersect, observerOptions);

    if (headerEl) observer.observe(headerEl);

    return () => {
      if (headerEl) observer.unobserve(headerEl);
    };
  }, [headerRef]);

  const isRouteActive = (route: string) =>
    !(route === "/")
      ? router.pathname.includes(route)
      : router.pathname === route;

  return (
    <header
      className={`
        sticky top-[-1px] rounded-xl px-6 max-w-screen-md mx-auto flex items-center justify-end mb-8 py-6 z-50
        ${isVisible ? "backdrop-blur-sm backdrop-saturate-150 shadow-sm" : ""}
      `}
      ref={headerRef}
    >
      <nav className="flex items-center gap-x-4 md:gap-x-6 font-bold text-lg text-stone-400">
        {routes.map((route) => (
          <Link key={route.path} href={route.path} passHref>
            <a
              className={`border-b-2 border-b-transparent hover:border-orange-500 hover:text-neutral-100 transition-color ${
                isRouteActive(route.path) ? "text-neutral-100" : ""
              }`}
            >
              {route.label}
            </a>
          </Link>
        ))}
        <button
          type="button"
          role="button"
          className="bg-yellow-800 p-2 rounded-md hover:bg-yellow-900  text-yellow-400 hover:text-yellow-500"
          onClick={() => toggleMenu((s: boolean) => !s)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
