import React from "react";
import { Heading } from "@/lib/fluid";
import { MetaData, Labels } from "@/lib/constants";

import InputForm from "@/ui/InputForm";
import PreviewCanvas from "@/ui/PreviewCanvas";

export default function Home() {
  return (
    <article>
      <div className="flex gap-8 flex-col md:flex-row items-center">
        <Heading className="opacity-50">{Labels.titles.home}</Heading>
        <p className="mb-4">{MetaData.defaultDescription}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputForm />
        <PreviewCanvas />
      </div>
    </article>
  );
}
