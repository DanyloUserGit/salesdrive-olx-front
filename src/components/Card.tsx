import { useProducts } from "@/store/useProducts";
import { Product } from "@/types";

export default function Card({ card }: { card: Product }) {
  const { product, setProduct, selectProduct } = useProducts();
  return (
    <div
      className={`${
        product.includes(card.id) ? "border-[5px] border-brand-blue" : ""
      } flex flex-col bg-light-surface p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[220px] w-full`}
      onClick={() => {
        if (!selectProduct) return;
        if (!product.includes(card.id)) {
          setProduct([...product, card.id]);
        } else {
          setProduct([...product.filter((it) => it !== card.id)]);
        }
      }}
    >
      <div className="w-full h-[180px] flex items-center justify-center overflow-hidden rounded-xl border-b border-light-bg">
        {card.pictures && card.pictures[0] ? (
          <img
            className="w-full h-full object-cover"
            alt={card.name}
            src={card.pictures[0]}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-light-bg text-light-subtle">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <h3 className="text-light-text font-semibold text-lg line-clamp-2">
          {card.name}
        </h3>

        {card.description && (
          <p className="text-light-subtle text-sm line-clamp-2">
            {card.description}
          </p>
        )}

        <span
          className={`text-sm font-semibold ${
            card.available ? "text-brand.blue" : "text-light-subtle"
          }`}
        >
          {card.available ? "В наявності" : "Немає в наявності"}
        </span>

        <span className="text-brand.blue font-bold text-base">
          {card.price.toLocaleString()} {card.currencyId}
        </span>
      </div>
    </div>
  );
}
