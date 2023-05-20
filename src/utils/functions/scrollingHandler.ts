import { camelToDash } from "./camelToDash";

export const handleClickScroll = (id: string) => {
  const scrollingId = camelToDash(id);
  const element = document.getElementById(scrollingId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
