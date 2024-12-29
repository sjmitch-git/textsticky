import { Suspense } from "react";

import ShareContent from "@/ui/ShareContent";

export default function Share() {
  return (
    <div>
      <h1>Share</h1>
      <Suspense>
        <ShareContent />
      </Suspense>
    </div>
  );
}
