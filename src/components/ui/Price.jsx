import { naira } from "../../utils/format";

function Price({ value }) {
  return <span className="whitespace-nowrap font-head text-lg font-bold text-accent">{naira(value)}</span>;
}

export default Price;