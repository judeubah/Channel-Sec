const id_maker = () =>{
  return Math.random() * 9**9
};

const return_day = (number)=>{
  let day;

  switch(number){
    case 0:
    day = "Sunday"
    break;
    case 1:
    day = "Monday"
    break;
    case 2:
    day = "Tuesday"
    break;
    case 3:
    day = "Wednesday"
    break;
    case 4:
    day = "Thursday"
    break;
    case 5:
    day = "Friday"
    break;
    case 6:
    day = "Saturday"
    break;
    default:
    return
  }
  return day
};

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let year = new Date();
year = year.getFullYear()+1;
const date = new Date(`May 18, ${year} 00:00:00`);

export const home_data = {
  title: 'THE SECURITY EVENT FOR THE EUROPEAN IT CHANNEL',
  date: `${return_day(date.getDay())}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} - Royal Lancaster, London`,
  cta: [{
    name: 'REGISTER',
    href: "#"
  }
  // , 
  // {name: 'AGENDA',
  // href: "/#agenda"}
]
}