import clsx from "clsx";
import TagItem from "./TagItem";

const Card = ({
  type,
  entry,
}: {
  type: string;
  entry: {
    slug: string;
    data: {
      title: string;
      published: Date;
      tags: string[];
      description?: string;
      image?: string | undefined;
    };
  };
}) => {
  return (
    <a href={`/${type}/${entry.slug}`}>
      <div
        className={clsx(
          "flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-start",
          "rounded-xl p-4 shadow-lg dark:shadow-light-navy",
          "border dark:border-light-navy dark:hover:border-teal-700",
          "hover:bg-slate-100 dark:hover:bg-light-navy ",
          "group",
          "transition-transform duration-300 hover:scale-105",
        )}
      >
        <div>
          <h3 className="font-sans text-xl font-bold group-hover:text-teal-700 group-hover:dark:text-green-350">
            {entry.data.title}
          </h3>

          <p className="text-sm italic">
            {entry.data.published.toDateString()}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {entry.data.tags.map((tag) => (
              <TagItem key={tag} text={tag} />
            ))}
          </ul>

          {entry.data.description ? (
            <p className="mt-8">{entry.data.description}</p>
          ) : null}
        </div>

        <img className="rounded-xl sm:max-w-[200px]" src={entry.data.image} />
      </div>
    </a>
  );
};

export default Card;
