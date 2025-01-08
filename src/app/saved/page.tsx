import { Heading } from "@/lib/fluid";
import SavedList from "@/ui/SavedList";
import { Labels } from "@/lib/constants";

export default function Saved() {
  return (
    <article>
      <div className="flex gap-8 flex-col md:flex-row items-center">
        <Heading className="opacity-50">{Labels.titles.saved}</Heading>
        <p className="mb-4">TBD description</p>
      </div>
      <SavedList />
    </article>
  );
}
