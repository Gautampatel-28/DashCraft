import "./widgetlg.css"

const Widgetlg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlgButton " + type}>{type}</button>;
  };

  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transaction</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>


          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/prf1.jpg" alt="img" className="widgetLgImg" />
              <span className="widgetLgName">Gautam Patel</span>
            </td>
            <td className="widgetLgDate">2 Jun 2025</td>
            <td className="widgetLgAmount">₹122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/prf2.jpg" alt="img" className="widgetLgImg" />
              <span className="widgetLgName">Ritika Shah</span>
            </td>
            <td className="widgetLgDate">28 Jul 2025</td>
            <td className="widgetLgAmount">₹950.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/prf3.jpg" alt="img" className="widgetLgImg" />
              <span className="widgetLgName">Arjun Desai</span>
            </td>
            <td className="widgetLgDate">15 Jun 2025</td>
            <td className="widgetLgAmount">₹1,240.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/prf4.jpg" alt="img" className="widgetLgImg" />
              <span className="widgetLgName">Mira Bansal</span>
            </td>
            <td className="widgetLgDate">9 Aug 2025</td>
            <td className="widgetLgAmount">₹780.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Widgetlg;
