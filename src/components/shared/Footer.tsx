import Link from "./Link";

const Footer = () => {
  return (
    <footer className="mx-6 max-w-6xl border-t border-slate-200 py-8 font-sans text-xs dark:border-light-navy md:mx-24 lg:mx-32">
      <p>
        <Link href="https://creativecommons.org/licenses/by-nc/4.0/">
          CC BY-NC 4.0
        </Link>{" "}
        © Syed Taqi Haider 2024.
      </p>
    </footer>
  );
};

export default Footer;
