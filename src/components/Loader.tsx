export default function Loader() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 rounded-full bg-brand-graphite animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 rounded-full bg-brand-blue-dark animate-bounce"></span>
      </div>
    </div>
  );
}
