"use client";

// import {
//   AreaChart,
//   Area,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip, Legend
// } from "recharts";

// const data = [
//   { name: "Jan", value: 3000 },
//   { name: "Feb", value: 1500 },
//   { name: "Mar", value: 2700 },
//   { name: "Apr", value: 2200 },
//   { name: "May", value: 3200 },
// ];

// export default function GradientAreaLineChart() {
//   return (
//     <div className="px-4 pt-5 pb-6.5 w-[384px] bg-white rounded-md">
//       <ResponsiveContainer width="100%" height={220}>
//         <AreaChart
//           data={data}
//           margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#DF9B2D" stopOpacity={0.3} />
//               <stop offset="100%" stopColor="#C5A674" stopOpacity={0.3} />
//             </linearGradient>
//           </defs>
//           <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//           <XAxis
//             dataKey="name"
//             tickLine={false}
//             axisLine={false}
//             tick={{ fill: "#9CA3AF", fontSize: 12 }}
//           />
//           <YAxis
//             domain={[0, 4000]}
//             ticks={[1000, 2000, 3000, 4000]}
//             tickLine={false}
//             axisLine={false}
//             tick={{ fill: "#9CA3AF", fontSize: 12 }}
//           />
//           <Tooltip
//             cursor={false}
//             contentStyle={{
//               borderRadius: "10px",
//               border: "none",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//             }}
//           />
//                <Legend
//                       verticalAlign="bottom"
//                       align="left"
//                       iconType="circle"
//                       wrapperStyle={{ marginTop: -10, marginLeft: 56, color: "#667085" }}
//                     />
//           <Area
//             type="monotone"
//             dataKey="value"
//             stroke="none"
//             fill="url(#colorGradient)"
//           />
//         <Line
//             type="monotone"
//             dataKey="ordered"
//             stroke="#DBA362"
//             strokeWidth={2}
//             dot={false}
//           />
//             <Line
//             type="monotone"
//             dataKey="delivered"
//             stroke="#B6D3FA"
//             strokeWidth={2}
//             dot={false}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Ordered: 3000, Delivered: 2500 },
  { name: "Feb", Ordered: 1500, Delivered: 1200 },
  { name: "Mar", Ordered: 2700, Delivered: 2600 },
  { name: "Apr", Ordered: 2200, Delivered: 1800 },
  { name: "May", Ordered: 3200, Delivered: 2900 },
];

export default function OrdersDeliveredChart() {
  return (
    <div className="px-4 pt-5 pb-6.5 w-[384px] bg-white rounded-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-[#383E49]">Order Summary</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          {/* Gradient for the orange fill */}
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DF9B2D" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#C5A674" stopOpacity={0.3} />
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

          {/* Area for Orders */}
          <Area
            type="monotone"
            dataKey="Ordered"
            stroke="none"
            fill="url(#colorOrders)"
          />

          {/* Line for Orders (orange) */}
          <Line
            type="monotone"
            dataKey="Ordered"
            stroke="#DBA362"
            strokeWidth={2}
            dot={false}
            legendType="none"
          />

          {/* Line for Delivered (blue) */}
          <Line
            type="monotone"
            dataKey="Delivered"
            stroke="#B6D3FA"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
