const TagItem = ({ text }: { text: string }) => {
  return (
    <li className="mt-4 px-3 border rounded-full border-slate-400 group-hover:border-teal-700 dark:group-hover:border-green-350 group-hover:text-teal-700 dark:group-hover:text-green-350 font-mono text-sm">
      {text}
    </li>
  );
};

export default TagItem;
