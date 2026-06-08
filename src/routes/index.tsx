import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roccess — Web Design That Works | Mansa, Zambia" },
      {
        name: "description",
        content:
          "Roccess is a results-driven web design company in Mansa, Zambia. We build fast, modern websites that help local and regional businesses grow online.",
      },
      { property: "og:title", content: "Roccess — Web Design That Works" },
      {
        property: "og:description",
        content: "Modern websites for ambitious businesses in Zambia and beyond.",
      },
    ],
  }),
  component: App,
});
