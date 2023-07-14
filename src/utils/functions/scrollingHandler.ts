import { camelToDash } from "./camelToDash";

export const handleClickScroll = (id: string) => {
  const scrollingId = camelToDash(id);
  console.log("scrollingId", scrollingId);
  const element = document.getElementById(scrollingId);
  console.log("element", element);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
