import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Graphic = ({users}) => {

    const names = users.map(u => u.login);

    let followers = [];
    users.forEach(u => {
        fetch(`${u.followers_url}`)
        .then(response => response.json())
        .then(response => followers.push(response.length))
    });

    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'AMOUNT OF FOLLOWERS OF EACH USER',
            color: 'white',
          },
        },
      };

      const data = {
        labels: names,
        datasets: [
          {
            label: 'CLICK TO SHOW BARS',
            data: followers,
            borderColor: '#61dafb',
            backgroundColor: '#61dafb',
          }
        ],
      };

    return(
        <div style={{width: '80vw', height: '500px'}}>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default Graphic;