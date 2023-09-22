import clsx from "clsx";
import BlogTag from "./shared/BlogTag";

const BlogCard = ({
  entry,
}: {
  entry: {
    slug: string;
    data: {
      title: string;
      published: Date;
      tags: string[];
      description: string;
      image?: string | undefined;
    };
  };
}) => {
  return (
    <a href={`/blog/${entry.slug}`}>
      <div
        className={clsx(
          "flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start gap-4",
          "p-4 rounded-xl shadow-lg dark:shadow-light-navy",
          "border dark:border-light-navy",
          "hover:bg-slate-100 dark:hover:bg-light-navy ",
          "group",
          "transition-transform duration-300 hover:scale-105"
        )}
      >
        <div>
          <h3 className="font-sans font-bold text-xl group-hover:text-teal-700 group-hover:dark:text-green-350">
            {entry.data.title}
          </h3>

          <p className="italic text-sm">
            {entry.data.published.toDateString()}
          </p>

          <ul className="flex flex-wrap gap-2">
            {entry.data.tags.map((tag) => (
              <BlogTag key={tag} text={tag} />
            ))}
          </ul>

          <p className="mt-8">{entry.data.description}</p>
        </div>

        <img className="sm:max-w-[200px] rounded-xl" src={entry.data.image} />
      </div>
    </a>
  );
};

export default BlogCard;
