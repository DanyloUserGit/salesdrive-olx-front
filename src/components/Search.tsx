import IconCancel from "@/svg/IconCancel";

export default function Search({
  s,
  setS,
}: {
  s: string;
  setS: (s: string) => void;
}) {
  return (
    <div className="flex gap-2">
      <input
        value={s}
        onChange={(e) => setS(e.target.value)}
        className="px-2 py-1 outline-0 border-1 rounded-[8px] shadow-sm"
        placeholder="Пошук товарів"
      />
      <>
        {s.length ? (
          <button onClick={() => setS("")}>
            <IconCancel />
          </button>
        ) : (
          ""
        )}
      </>
    </div>
  );
}
