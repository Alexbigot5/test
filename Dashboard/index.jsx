
import Layout from "../Layout";
import DashPartFour from "./tabs/DashPartFour";
import DashPartOne from "./tabs/DashPartOne";
import DashPartThree from "./tabs/DashPartThree";
import DashPartTwo from "./tabs/DashPartTwo";



export default function Dashbaord() {
  return (
    <>
      <Layout>
        <div>
          <div className="DashPartOne">
            <DashPartOne />
          </div>

          <div className="DashPartTwo">
            <DashPartTwo/>
          </div>
          
          <div className="DashPartOne">
            <div>Buy it Again</div>
          </div>

          <div className="DashPartThree">
            <DashPartThree />
          </div>

          <div class="DashPartFour">
            <DashPartFour />
          </div>
        </div>
      </Layout>
    </>
  );
}
