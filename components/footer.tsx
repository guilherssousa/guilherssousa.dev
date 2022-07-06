import { routes as internalLinks } from "components/header";
import Link from "next/link";

const links = {
  socialMedia: [
    {
      label: "GitHub",
      path: "https://github.com/guilherssousa",
    },
    {
      label: "LinkedIn",
      path: "https://linkedin.com/in/guilhermedasilvasousa",
    },
    {
      label: "Medium",
      path: "https://medium.com/@guilherssousa",
    },
    {
      label: "Spotify",
      path: "https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=a3463ab97a264988",
    },
  ],
  utils: [
    {
      label: "Legado",
      path: "https://guilherssousa.github.io/",
    },
    {
      label: "CV",
      path: "/CV.pdf",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="mt-16 text-stone-500 pb-16 border-t pt-6 border-stone-800">
      <div className="md:grid md:grid-cols-3">
        <div>
          {internalLinks.map((link) => (
            <Link passHref href={link.path} key={`footer-${link.path}`}>
              <a className="block mb-4 hover:text-stone-600">{link.label}</a>
            </Link>
          ))}
        </div>
        <div>
          {links.socialMedia.map((link) => (
            <a
              href={link.path}
              key={link.label}
              target={"_blank"}
              rel="noreferrer"
              className="block mb-4 hover:text-stone-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          {links.utils.map((link) => (
            <a
              href={link.path}
              key={link.label}
              target={"_blank"}
              rel="noreferrer"
              className="block mb-4 hover:text-stone-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
