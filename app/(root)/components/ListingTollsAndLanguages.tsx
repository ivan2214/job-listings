"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import qs from "query-string";
import { useSearchParamsContext } from "@/context/SearchParamsContext";

type Props = {
  role: string;
  level: string;
  tools: string[];
  languages: string[];
};

type currentQuery = {
  company?: string;
  position?: string;
  role?: string;
  level?: string;
  language?: string;
  tool?: string;
};

const ListingTollsAndLanguages = ({ role, level, tools, languages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setRole, setLevel, setTool, setLanguage } = useSearchParamsContext();

  const handleClick = (searchQuery: string, property: string) => {
    const current: currentQuery = qs.parse(searchParams.toString());

    if (property === "role") {
      setRole(searchQuery);
    }

    if (property === "level") {
      setLevel(searchQuery);
    }

    if (property === "language") {
      setLanguage(searchQuery);
    }

    if (property === "tool") {
      setTool(searchQuery);
    }

    const query = {
      ...current,
      [property]: searchQuery,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true },
    );

    if (searchQuery !== "") {
      // Guardar la posición actual del scroll antes de redirigir
      const scrollY = window.scrollY;

      router.push(url);

      // Volver a la posición original del scroll después de la redirección
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 300);
    }
  };
  
  return (
    <section className="flex flex-wrap items-start gap-3 lg:w-1/3">
      {role && (
        <button
          onClick={() => handleClick(role, "role")}
          className="rounded px-3 py-1 text-xs font-bold capitalize text-primary transition hover:bg-primary hover:text-white"
        >
          <span>{role}</span>
        </button>
      )}

      {level && (
        <button
          onClick={() => handleClick(level, "level")}
          className="rounded px-3 py-1 text-xs font-bold capitalize text-primary transition hover:bg-primary hover:text-white"
        >
          <span>{level}</span>
        </button>
      )}

      {tools.map((tool) => (
        <button
          onClick={() => handleClick(tool, "tool")}
          className="rounded px-3 py-1 text-xs font-bold capitalize text-primary transition hover:bg-primary hover:text-white"
          key={tool}
        >
          <span>{tool}</span>
        </button>
      ))}
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => handleClick(language, "language")}
          className="rounded px-3 py-1 text-xs font-bold capitalize text-primary transition hover:bg-primary hover:text-white"
        >
          <span className="">{language}</span>
        </button>
      ))}
    </section>
  );
};
export default ListingTollsAndLanguages;
