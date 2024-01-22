import "../styles/divider.css";
interface DividerProps {
  text?: string;
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className="divider-container">
      {text ? (
        <>
          <hr className="divider" />
          <span className="divider-text">{text}</span>
          <hr className="divider" />
        </>
      ) : (
        <hr className="divider" />
      )}
    </div>
  );
}
