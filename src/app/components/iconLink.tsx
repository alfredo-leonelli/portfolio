export default function IconLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="block p-6 hover:text-[#7D8E29] hover:scale-110 transition-all duration-500 ease-in-out mr-1"
      style={{
        background: "linear-gradient(to top, #7D8E29 50%, transparent 50%)",
        backgroundSize: "100% 200%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </a>
  );
}
