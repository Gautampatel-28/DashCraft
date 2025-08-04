import Chart from "../Components/chart/Chart"
import FeaturedInfo from "../Components/featuredInfo/FeaturedInfo"
import "./Home.css"
import { UserData } from "../DummyData"

const Home = () => {
  return (
    <>
        <div className="home">
          <FeaturedInfo />
          <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    </>
  )
}

export default Home