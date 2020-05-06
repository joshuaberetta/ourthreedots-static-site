import { PriceCard } from "../models/PriceCard.model";

import { PRICING } from "./Content";
import { COLOURS } from "./Colours";
import { HREFS } from "./Hrefs";

export const CATEGORIES: PriceCard[] = [
  {
    title: PRICING.insightful.title,
    description: PRICING.insightful.description,
    price: PRICING.insightful.price,
    href: HREFS.insightful,
    background: COLOURS.red,
    color: COLOURS.blue,
  },
  {
    title: PRICING.digital.title,
    description: PRICING.digital.description,
    price: PRICING.digital.price,
    href: HREFS.digitalForm,
    background: COLOURS.yellow,
    color: COLOURS.red,
  },
  {
    title: PRICING.book.title,
    description: PRICING.book.description,
    price: PRICING.book.price,
    href: HREFS.book,
    background: COLOURS.blue,
    color: COLOURS.yellow,
  },
];
