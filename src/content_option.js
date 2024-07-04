import art1 from "../src/assets/images/arts/art1.png";
import art2 from "../src/assets/images/arts/art2.png";
import art3 from "../src/assets/images/arts/art3.png";
import art4 from "../src/assets/images/arts/art5.png";
import art5 from "../src/assets/images/arts/art6.png";
import art6 from "../src/assets/images/arts/art4.png";
import art7 from "../src/assets/images/arts/art7.png";
import art8 from "../src/assets/images/arts/art8.png";
import art9 from "../src/assets/images/arts/art9.png";
import art10 from "../src/assets/images/arts/art10.png";
import art11 from "../src/assets/images/arts/art11.png";
import art12 from "../src/assets/images/arts/art12.png";
import art13 from "../src/assets/images/arts/art13.png";
import art14 from "../src/assets/images/arts/art14.png";
import art15 from "../src/assets/images/arts/art15.png";
import art16 from "../src/assets/images/arts/art16.png";
import art17 from "../src/assets/images/arts/art17.png";
import art18 from "../src/assets/images/arts/art18.png";
import Logo from "../src/assets/images/arts/logo.jpeg";


const images = [
  art1,
  art2,
  art3,
  art5,
  art6,
  art4,
  art7,
  art8,
  art9,
  art10,
  art11,
  art12,
  art13,
  art14,
  art15,
  art16,
  art17,
  art18,
  Logo,
];

export default images;

const logotext = "OfodileArtPriest";
const meta = {
  title: "{ofodile Art Priest}",
  description: "My Art Portfolio",
};

const introdata = {
  title: "Hi, I'm Ofodile ArtPriest",
  animated: {
    first: "Artist",
    second: "Visionary",
    third: "Entrepreneur",
  },
  description:
    "Ofodile ArtPriest is a masterful artist renowned for her exquisite ability to capture the essence of life's beauty on canvas. With a deft touch and a visionary eye, her work transcends the ordinary, inviting viewers into a world where colors dance and emotions come alive. OfodileArtPriest's art is a testament to his unwavering passion and exceptional skill, making him a cherished name in the contemporary art scene.",
  your_img_url: images[18],
};

const dataabout = {
  title: "Who am I?",
  aboutme: "OfodileArtPriest, artistry is more than a passion—it's a divine calling. Renowned for its stunning visual narratives and masterful technique, OfodileArtPriest brings life to every canvas with a blend of vivid colors and intricate details. Each piece is a journey, a story told through the hands of an artist with unparalleled skill and a profound understanding of the human experience. Embrace the extraordinary with OfodileArtPriest, where every artwork is a testament to the beauty and complexity of life."   
};

const worktimeline = [
  {
    jobtitle: "Life In My City",
    where: "ImT COnference Halls",
    date: "2022",
  },
  {
    jobtitle: "Example 2",
    where: "Micosoft",
    date: "2022",
  },
];

const skills = [
  {
    name: "Painting",
  },

  {
    name: "Sculpture",
  },

  {
    name: "Body Art",
  },

  {
    name: "Model",
  },

  {
    name: "Fashion",
  },

];

const dataportfolio = [
  {
    img: images[0],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[1],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[2],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[3],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[4],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[5],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[6],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[7],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[8],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[9],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[10],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[11],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[12],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[13],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[14],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[15],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[16],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[17],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: images[18],
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "test@test.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "SERVICE_ID",
  YOUR_TEMPLATE_ID: "TEMPLATE_ID",
  YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
