// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Hero",
    type:1,
    userName:"user 1",
    rating: 112,
    carName: "Splender",
    imgUrl: "https://imgd.aeplcdn.com/0x0/n/cw/ec/127607/splendor-plus-xtec-right-side-view.gif?isig=0",
    model: "Model 3",
    price: 10,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Royal enfiled",
    rating: 102,
    type:1,
    userName:"user 1",
    carName: "bullet",
    imgUrl: "https://th.bing.com/th/id/R.ffdb07da7bba7167689f03e9c261c2ae?rik=WsB8Q3xDrL9ZYQ&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fImagesR%2f2016%2f7%2fRoyal-Enfield-Bullet-Classic-500-925642649-5989310-1.jpg&ehk=i4%2bwygTWvGQ51k%2fMLisC%2fgQEH3qQ2arcxSB7cb3zBnU%3d&risl=&pid=ImgRaw&r=0",
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "maruti suzuki",
    rating: 132,
    type:2,
    userName:"user 2",
    carName: "swift",
    imgUrl: "https://th.bing.com/th/id/OIP.iSIsJwLM_ATTx3pBfYUKPQHaE7?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "wagnor",
    rating: 102,
    type:2,
    userName:"user 3",
    carName: "wagnor r",
    imgUrl: 'https://img.gaadicdn.com/car-images/carexteriorimages/930x620/Maruti/Maruti-Wagon-R/1187/front-left-side-047.jpg',
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "TVS",
    type:1,
    userName:"user 4",
    rating: 94,
    carName: "scooty",
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/TVS_Scooty_Streak.jpg/1200px-TVS_Scooty_Streak.jpg',
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Mercedes",
    type:2,
    userName:"user 7",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "VESPA",
    type:1,
    userName:"user 7",
    rating: 82,
    carName: "veaspa xl",
    imgUrl: "https://media.zigcdn.com/media/model/2022/Feb/right-side-view-806378825_600x400.jpg",
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "yamaha",
    rating: 52,
    type:1,
    userName:"user 10",
    carName: "yamaha rx100",
    imgUrl: 'https://www.cartoq.com/wp-content/uploads/2022/07/yamaha-rx100-featured.jpg',
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
