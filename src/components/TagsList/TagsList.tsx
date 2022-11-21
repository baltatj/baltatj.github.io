// Style
import { tagLabels } from "~types";
import { FilterTag } from "../FilterTag/FilterTag";
import "./TagsList.sass";

export const TagsList = ({ ...props }: { tags: Array<tagLabels> }) => {
  return (
    <div className="tech-stack">
      <h3>Tech-Stack:</h3>
      <div className="tags">
        {props.tags.map((t, i) => (
          <FilterTag key={"filtertag" + t + i} label={t} />
        ))}
      </div>
    </div>
  );
};
