const items: StockItem[] = [
  {
    id: 1,
    name: "Lifebuoy Handwash",
    subtitle: "250ml",
    remaining: 3,
    price: 75,
  },
  {
    id: 2,
    name: "Pepsodent Toothpaste",
    subtitle: "100g",
    remaining: 4,
    price: 110,
  },
  {
    id: 3,
    name: "Good Day Biscuits",
    subtitle: "Pack",
    remaining: 2,
    price: 90,
  },
];
type StockItem = {
  id: number;
  name: string;
  subtitle: string;
  remaining: number;
  price: number;
};

interface StockRowProps {
  item: StockItem;
}

interface LowQuantityStockProps {
  data?: StockItem[];
  title?: string;
  onSeeAll?: () => void;
}

const StockRow = ({ item }: StockRowProps) => {
  return (
    <div className="flex items-center justify-between py-4 ">
      {/* Left: color blob + name */}
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-9 h-9 rounded-lg shrink-0"
          style={{ background: "linear-gradient(135deg,#E6F7EF,#DFF3E8)" }}
          aria-hidden
        />

        <div className="min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate">
            {item.name}
          </div>
          <div className="text-xs text-gray-500 truncate">{item.subtitle}</div>
        </div>
      </div>

      {/* Middle: remaining badge */}
      <div className=" ">
        <span
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold 
            ${
              item.remaining <= 3
                ? "bg-red-50 text-red-700"
                : "bg-yellow-50 text-yellow-800"
            }`}
        >
          {item.remaining} left
        </span>
      </div>

      {/* Right: price
      <div className="w-20 text-right">
        <div className="text-sm font-medium text-gray-900">₹ {item.price}</div>
      </div> */}
    </div>
  );
};

export default function LowQuantityStock({
  data = items,
  title = "Low Quantity Stock",
  onSeeAll,
}: LowQuantityStockProps) {
  return (
    <div className="p-6 px-4 pt-5 pb-6.5 w-[384px] bg-white rounded-md h-full">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-medium text-[#383E49]">{title}</h3>
        <button
          onClick={onSeeAll}
          className="text-[#155EEF] text-sm font-medium hover:underline"
          aria-label="See all low quantity stock"
        >
          See All
        </button>
      </div>

      {/* List */}
      <div>
        {data.slice(0, 3).map((item) => (
          <StockRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
