interface DividerProps {
  text?: string;
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className="flex items-center my-12">
      {text ? (
        <>
          <hr className="flex-grow h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#7D8E29] to-transparent opacity-25 dark:opacity-100" />
          <span className="px-4">{text}</span>
          <hr className="flex-grow h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#7D8E29] to-transparent opacity-25 dark:opacity-100" />
        </>
      ) : (
        <hr className="flex-grow h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#7D8E29] to-transparent opacity-25 dark:opacity-100" />
      )}
    </div>
  );
}
