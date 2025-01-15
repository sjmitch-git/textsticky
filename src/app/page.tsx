import React from "react";
import { Heading } from "@/lib/fluid";
import { Labels } from "@/lib/constants";

import InputForm from "@/ui/InputForm";
import PreviewCanvas from "@/ui/PreviewCanvas";

export default function Home() {
  return (
    <article>
      <div className="flex gap-8 flex-row items-center max-md:hidden">
        <Heading className="opacity-50">{Labels.titles.home}</Heading>
        <p className="mb-4">{Labels.descriptions.home}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputForm />
        <PreviewCanvas />
      </div>
    </article>
  );
}
