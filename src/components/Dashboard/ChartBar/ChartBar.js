import Chart from "react-apexcharts";

import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  const { chartData } = props;
  let totalEducation = 0,
    totalFood = 0,
    totalTravel = 0,
    totalShopping = 0;
  //   const uniqueLabels = [...new Set(labels)];

  const educationRows = chartData.filter((data) => data.label === "education");
  const foodRows = chartData.filter((data) => data.label === "food");
  const travelRows = chartData.filter((data) => data.label === "travel");
  const shoppingRows = chartData.filter((data) => data.label === "shopping");

  const educationValue = educationRows.forEach((dataPrice) => {
    totalEducation += parseInt(dataPrice.price);
  });

  const foodValue = foodRows.forEach((dataPrice) => {
    totalFood += parseInt(dataPrice.price);
  });

  const travelValue = travelRows.forEach((dataPrice) => {
    totalTravel += parseInt(dataPrice.price);
  });

  const shoppingValue = shoppingRows.forEach((dataPrice) => {
    totalShopping += parseInt(dataPrice.price);
  });

  return (
    <div className={classes["chart-container"]}>
      <Chart
        type="donut"
        width={500}
        height={500}
        series={[totalEducation, totalFood, totalTravel, totalShopping]}
        options={{
          dataLabels: {
            style: {
              fontSize: "10px",
              fontWeight: "normal",
              fontFamily: "Space Grotesk",
              color: "#131200",
            },
            background: {
              enabled: false,
            },
            dropShadow: {
              enabled: false,
            },
          },
          labels: ["Education", "Food", "Travel", "Shopping"],
          title: {
            text: "Expense Summary Chart (in $)",
            offsetX: 10,
            style: {
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "Space Grotesk",
              color: "#131200",
            },
          },
          subtitle: {
            text: `Total Expenses: $${props.totalPrice}`,
            offsetX: 10,
            offsetY: 20,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              fontFamily: "Space Grotesk",
              color: "#7a7a7a",
            },
          },
          noData: { text: "Sorry, there is no data to display yet." },
          legend: {
            position: "bottom",
          },
          responsive: [
            {
              breakpoint: 768,
              options: {
                chart: {
                  width: "350px",
                  height: "350px",
                },
              },
            },
          ],
        }}
      ></Chart>
    </div>
  );
};

export default ChartBar;
