const TagItem = ({ text }: { text: string }) => {
  return (
    <li className="rounded-full border border-slate-400 px-3 font-mono text-sm group-hover:border-teal-700 group-hover:text-teal-700 dark:group-hover:border-green-350 dark:group-hover:text-green-350">
      {text}
    </li>
  );
};

export default TagItem;
