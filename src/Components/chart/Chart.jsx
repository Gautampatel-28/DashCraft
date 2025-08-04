// import "./chart.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import WidgetSm from "../widgetSm/WidgetSm";
// import Widgetlg from "../widgetLg/Widgetlg";

// const Chart = ({ title, data, dataKey, grid }) => {
//   return (
//     <>
//       <div className="chart">
//         <h3 className="chartTitle">{title}</h3>
//         <ResponsiveContainer width="100%" aspect={4 / 1}>
//           <LineChart data={data}> 
//             <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
//             <XAxis dataKey="name" stroke="#5550bd" />
//             {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

// {/* Widgets  */}
//       <div className="homeWidgets">
//         <WidgetSm />
//         <Widgetlg />
//       </div> 
     
//     </>
//   );
// };

// export default Chart;

import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import WidgetSm from "../widgetSm/WidgetSm";
import Widgetlg from "../widgetLg/Widgetlg";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <div className="chartContainer">
        <h3 className="chartTitle">{title}</h3>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <XAxis dataKey="name" stroke="#5550bd" />
            {grid && (
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            )}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="homeWidgets">
        <WidgetSm />
        <Widgetlg />
      </div>
    </>
  );
};

export default Chart;
