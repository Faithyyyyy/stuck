"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Purchase: 54000, Sales: 49000 },
  { name: "Feb", Purchase: 58000, Sales: 46000 },
  { name: "Mar", Purchase: 47000, Sales: 52000 },
  { name: "Apr", Purchase: 38000, Sales: 44000 },
  { name: "May", Purchase: 42000, Sales: 45000 },
  { name: "Jun", Purchase: 29000, Sales: 41000 },
  { name: "Jul", Purchase: 55000, Sales: 48000 },
  { name: "Aug", Purchase: 44000, Sales: 43000 },
  { name: "May", Purchase: 42000, Sales: 39000 },
  { name: "Jun", Purchase: 37000, Sales: 41000 },
];

export default function SalesPurchaseChart() {
  return (
    <div className=" px-4 pt-5 pb-6.5 w-[690px] bg-white rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-[#383E49]">Sales & Purchase</h2>
        <button className="flex items-center gap-2 border px-3 py-1.5 rounded-lg text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-7 4h10"
            />
          </svg>
          Weekly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8}>
          <defs>
            {/* Purchase Gradient */}
            <linearGradient id="purchaseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#817AF3" />
              <stop offset="50%" stopColor="#74B0FA" />
              <stop offset="100%" stopColor="#79D0F1" />
            </linearGradient>

            {/* Sales Gradient */}
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#46A46C" />
              <stop offset="50%" stopColor="#51CC5D" />
              <stop offset="100%" stopColor="#57DA65" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="circle"
            wrapperStyle={{ marginTop: -10, marginLeft: 56, color: "#667085" }}
          />
          <Bar
            dataKey="Purchase"
            // fill="#60A5FA"
            fill="url(#purchaseGradient)"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="Sales"
            // fill="#34D399"
            fill="url(#salesGradient)"
            color="#667085"
            radius={[4, 4, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
// ```

// ---

// ### 🧩 Key Details

// * **Recharts components used**:

//   * `BarChart`, `Bar`, `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, `Legend`, and `ResponsiveContainer`
// * **Design elements**:

//   * Light blue (`#60A5FA`) for **Purchase**
//   * Green (`#34D399`) for **Sales**
//   * Rounded bars for a soft modern look
//   * Card-like wrapper with `shadow-sm`, `rounded-xl`, and padding
// * **ResponsiveContainer** ensures it resizes nicely across devices.

// ---

// Would you like me to make the “Weekly” button interactive (e.g., toggling between “Weekly” and “Monthly” data)?
