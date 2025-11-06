const TopSellingStock = () => {
  const data = [
    { name: "Surf Excel", sold: 30, remaining: 12, price: 100 },
    { name: "Rin", sold: 21, remaining: 15, price: 207 },
    { name: "Parle G", sold: 19, remaining: 17, price: 105 },
  ];

  return (
    <div className=" p-6 px-4 pt-5 pb-6.5 w-[690px] bg-white rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-[#383E49]">
          Top Selling Stock
        </h2>
        <button className="text-[#155EEF] text-sm font-medium hover:underline">
          See All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-[#5D6679] text-left border-y border-[#F0F1F3]">
              <th className="py-2 font-medium">Name</th>
              <th className="py-2 font-medium">Sold Quantity</th>
              <th className="py-2 font-medium">Remaining Quantity</th>
              <th className="py-2 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.name}
                className="text-gray-700   border-b border-[#F0F1F3]"
              >
                <td className="py-4">{item.name}</td>
                <td className="py-2">{item.sold}</td>
                <td className="py-2">{item.remaining}</td>
                <td className="py-2">$ {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingStock;
