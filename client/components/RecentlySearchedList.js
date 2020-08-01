import React from "react";
import RecentlySearchedCard from "./RecentlySearchedCard";

export default function RecentlySearchedList({ definitions }) {
  return definitions.reverse().map((definition, i) => {
    return <RecentlySearchedCard key={i} definition={definition} />;
  });
}
