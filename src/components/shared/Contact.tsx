import clsx from "clsx";
import Link from "./Link";
import contacts from "@/data/contact.json";
import { Icon } from "@iconify/react";

interface contactItem {
  title: string;
  url: string;
  iconRef: string;
}

const ContactItem = ({ item }: { item: contactItem }) => (
  <Link href={item.url}>
    <div className="flex items-center justify-center gap-1">
      <span className="text-lg">{item.title}</span>
      <Icon width={30} icon={item.iconRef} />
    </div>
  </Link>
);

const Contact = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "mb-12 font-sans text-3xl font-semibold",
          "after:relative after:-top-5 after:ml-52 after:block",
          "after:h-0.5 after:max-w-full",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10",
        )}
        id="contact"
      >
        Get In Touch
      </h2>

      <div className="mb-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-20">
        {contacts.map((item) => (
          <ContactItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
