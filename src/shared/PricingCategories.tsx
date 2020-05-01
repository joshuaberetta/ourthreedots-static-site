import { PriceCard } from "../models/PriceCard.model";

import { COLOURS } from "./Colours";
import { HREFS } from "./Hrefs";

export const CATEGORIES: PriceCard[] = [
  {
    title: "insightful",
    description:
      "Only the chat insights in digital form. No custom look and feel 🤡",
    price: "$ 4.99",
    href: HREFS.insightful,
    background: COLOURS.red,
    color: COLOURS.blue,
  },
  {
    title: "digital",
    description:
      "The insights and chat, in digital form. Custom look and feel 😀",
    price: "$ 9.99",
    href: HREFS.digitalForm,
    background: COLOURS.yellow,
    color: COLOURS.red,
  },
  {
    title: "book",
    description:
      "The insights and chat, printed and shipped to your door. Custom look and feel 😍",
    price: "$ 39.99",
    href: HREFS.book,
    background: COLOURS.blue,
    color: COLOURS.yellow,
  },
];
