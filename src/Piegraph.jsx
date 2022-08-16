import Chart from "react-google-charts";
// const pieData = [
//   ["Task", "Hours per Day"],
//   ["Work", 6],
//   ["Eat", 2],
//   ["Commute", 2],
// ];
const pieOptions = {
  // title: 'My Daily Activities',
  pieHole: 0.4,
  backgroundColor: "transparent",
  legend: {
    position: "none",
    textStyle: { color: "red", fontSize: 16, maxLines: 5 },
  },
  // fontSize:40,
  colors: ["orange", "green", "red"],
  // chartArea:{left:20,top:0,width:'50%',height:'75%'},
  // pieSliceTextStyle:{color: "red", fontSize: 11},
};

const PieChart = ({data}) => {
  var pieData = [
    ["Task", "Hours per Day"],
    ["Work", 10],
    ["Eat", 20],
    ["Commute",10],
  ];

  if(data){
    // console.log(typeof(data.filter(x=>x.status=="pending").length))
    // console.log("enteeered")


    var no_pending=data.filter(x=>x.status==="pending").length;
    var no_done=data.filter(x=>x.status==="done").length;
    var no_missed=data.filter(x=>x.status==="missed").length;


    pieData=[
    ["Task", "Hours per Day"],
    ["pending",no_pending],
    ["done",no_done],
    ["missed", no_missed]
  ] 
  // console.log(pieData)

  
  } 

  return (
    <div>
      <Chart
        backgroundColor="blue"
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={pieData}
        options={pieOptions}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default PieChart;
