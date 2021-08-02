import { Category } from '../types';
import { Donation } from '../types';
import { allUsers } from './all-users';

const IMG_TOP_1 = require("../images/Baby_Tops_1.jpg");
const IMG_TOP_2 = require("../images/Baby_Tops_2.jpg");
const IMG_TOP_3 = require("../images/Baby_Tops_3.jpg");
const IMG_TOP_4 = require("../images/Baby_Tops_4.jpg");
const IMG_BTM_1 = require("../images/Baby_Bottoms_1.jpg");
const IMG_BTM_2 = require("../images/Baby_Bottoms_2.jpg");
const IMG_FTW_1 = require("../images/Baby_Footwear_1.png");

export const allDonations: Donation[] = [
  {
    uri: IMG_TOP_1,
    category: Category.TOPS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[1]
  },
  {
    uri: IMG_TOP_2,
    category: Category.TOPS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[0]
  },
  {
    uri: IMG_BTM_1,
    category: Category.BOTTOMS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[1]
  },
  {
    uri: IMG_BTM_2,
    category: Category.BOTTOMS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[0]
  },
  {
    uri: IMG_FTW_1,
    category: Category.FOOTWEAR,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[0]
  },
];

export const mySelection: Donation[] = [
  {
    uri: IMG_TOP_3,
    category: Category.TOPS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[1]
  },
]

export const myDonation: Donation[] = [
  {
    uri: IMG_TOP_4,
    category: Category.TOPS,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quam, recusandae quidem sed consectetur nulla voluptate repudiandae quod aperiam veritatis voluptatibus maiores nostrum id nam est. Quibusdam provident animi numquam.',
    user: allUsers[2]
  },
]