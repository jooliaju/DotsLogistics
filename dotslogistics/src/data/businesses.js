import BusinessImage1 from "../assets/business1.jpg";
import BusinessImage2 from "../assets/business2.jpg";
import BusinessImage3 from "../assets/business3.jpeg";
import BusinessImage4 from "../assets/business4.jpg";

const businesses = [
  {
    name: "Dataraction",
    location: "Toronto, ON",
    desc: "The Robin Hood of Education!?",
    img: BusinessImage1,
    price: 20,
    reviews: [
      {
        img: "",
        name: "Gildan",
        rating: 1,
        review: "Lorem ipsum",
      },
      {
        img: "",
        name: "3D Print Cloud",
        rating: 4,
        review: "Lorem ipsum",
      },
    ],
    rating: 3,
    numPartners: 4,
  },
  {
    name: "DotsLogistics",
    location: "Toronto, ON",
    desc: "The Snow Bunnies",
    img: BusinessImage2,
    price: 30,
    reviews: [
      {
        img: "",
        name: "Gildan",
        rating: 5,
        review: "Lorem ipsum",
      },
      {
        img: "",
        name: "3D Print Cloud",
        rating: 5,
        review: "Lorem ipsum",
      },
    ],
    rating: 5,
    numPartners: 7,
  },
  {
    name: "Supply R Us",
    location: "Guelph, ON",
    desc: "BLAH BLAH BLAH BLAH BLAH",
    img: BusinessImage3,
    price: 60,
    reviews: [
      {
        img: "",
        name: "Gildan",
        rating: 1,
        review: "Lorem ipsum",
      },
      {
        img: "",
        name: "3D Print Cloud",
        rating: 3,
        review: "Lorem ipsum",
      },
    ],
    rating: 2,
    numPartners: 2,
  },
  {
    name: "Entropy",
    location: "Kitchener, ON",
    desc: "YOYOYOYOYOYOYOYOYOOYOYOYOYOYOYOYOYOYOYO",
    img: BusinessImage4,
    price: 10,
    reviews: [
      {
        img: "",
        name: "Gildan",
        rating: 4,
        review: "Lorem ipsum",
      },
      {
        img: "",
        name: "3D Print Cloud",
        rating: 3,
        review: "Lorem ipsum",
      },
    ],
    rating: 4,
    numPartners: 1,
  },
];

export function addBusiness(name, desc, location, price) {
  businesses.push({
    name,
    location,
    desc,
    img: "",
    price,
    reviews: [],
    rating: 0,
    numPartners: 0,
  });
}

export default businesses;
