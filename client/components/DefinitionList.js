import React from "react";
import DefinitionCard from "./DefinitionCard";

export default function DefinitionList({ definitions }) {
  return definitions.map((definition, i) => {
    return <DefinitionCard key={i} definition={definition} />;
  });
}
