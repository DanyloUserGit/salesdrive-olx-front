export default function Button({
  onClick,
  isActive,
  text,
}: {
  onClick: () => void;
  isActive: boolean;
  text: string;
}) {
  return (
    <button
      className={`rounded-[4px] max-w-fit px-4 py-1 hover:bg-brand-blue-dark ${
        isActive ? "bg-brand-blue" : "bg-brand-blue-light"
      }`}
      onClick={onClick}
    >
      <span className="font-sans text-light-bg">{text}</span>
    </button>
  );
}
