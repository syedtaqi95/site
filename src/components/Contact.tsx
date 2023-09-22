import clsx from "clsx";
import Link from "./shared/Link";
import contacts from "@/data/contact.json";
import { Icon } from "@iconify/react";

interface contactItem {
  title: string;
  url: string;
  iconRef: string;
}

const ContactItem = ({ item }: { item: contactItem }) => (
  <Link href={item.url}>
    <div className="flex gap-1 items-center justify-center">
      <span className="font-medium text-xl">{item.title}</span>
      <Icon width={30} icon={item.iconRef} />
    </div>
  </Link>
);

const Contact = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "font-sans text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-52",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
        id="contact"
      >
        Get In Touch
      </h2>

      <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20">
        {contacts.map((item) => (
          <ContactItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
