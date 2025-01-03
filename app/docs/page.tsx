"use client";
import Link from "next/link";
import Introduction from "@/app/docs/introduction.mdx";
import EnvVariables from "@/app/docs/env-variables.mdx";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState("introduction");
  const docLinks = [
    {
      slug: "introduction",
      title: "Introduction",
      content: <Introduction />,
    },
    {
      slug: "env-variables",
      title: "Enviornment Variables",
      content: <EnvVariables />,
    },
  ];

  return (
    <section className="mt-20 p-4 flex">
      <div className=" h-screen md:border-r w-fit">
        <div>
          <div className=" hidden md:flex gap-4 h-screen  mr-4 items-start flex-col">
            {docLinks.map((doc) => (
              <Button
                variant={"ghost"}
                key={doc.slug}
                className={` hover:text-primary hover:bg-primary/10 rounded-md  w-full  ${
                  selectedDoc === doc.slug
                    ? "border-l-2 rounded-md bg-primary/10 border-primary text-primary/50"
                    : ""
                }`}
                onClick={() => setSelectedDoc(doc.slug)}
              >
                {doc.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        {docLinks.find((doc) => doc.slug === selectedDoc)?.content}
      </div>
    </section>
  );
}
