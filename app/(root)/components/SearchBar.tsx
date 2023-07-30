"use client";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";
import Loading from "../loading";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    searchQuery,
    setSearchQuery,
    setLanguage,
    setLevel,
    setRole,
    setTool,
    language,
    level,
    role,
    tool,
  } = useSearchParamsContext();

  const filtersParams = [];

  // Verificar si las variables tienen elementos y unirlos al array
  if (language) {
    filtersParams.push(language);
  }
  if (level) {
    filtersParams.push(level);
  }
  if (role) {
    filtersParams.push(role);
  }
  if (tool) {
    filtersParams.push(tool);
  }

  const clearSearchParams = () => {
    setLanguage("");
    setLevel("");
    setRole("");
    setTool("");
    setSearchQuery("");
    router.push("/");
  };

  useEffect(() => {
    if (searchQuery === "" || !searchQuery) {
      setSearchQuery("");
      router.push("/");
    }
    if (searchQuery !== "") {
      if (searchQuery.length > 5) {
        filtersParams.push(searchQuery);
      }
    }
  }, [searchQuery]);

  const onSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      searchQuery,
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

    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="absolute -bottom-8 z-50  w-full max-w-5xl rounded-md ">
      <div className="flex w-full items-center justify-between rounded-md bg-white px-5 py-4 shadow-md ">
        {filtersParams.length >= 1 && !searchQuery ? (
          <>
            <div>
              {filtersParams.length >= 1 &&
                filtersParams.map((item, index) => (
                  <span key={item} className="font-body text-sm text-primary">
                    {item}
                    {index < filtersParams.length - 1 ? "," : ""}
                  </span>
                ))}
            </div>
            <div>
              <button
                onClick={clearSearchParams}
                className="font-body capitalize text-primary"
              >
                clear
              </button>
            </div>
          </>
        ) : (
          <form
            onClick={onSubmit}
            className="flex w-full items-center justify-between gap-3"
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border px-5 py-1"
              type="search"
              placeholder="React"
              name=""
              id=""
            />
            <button
              disabled={loading}
              type="submit"
              className="rounded-md border border-primary px-5 py-1"
            >
              Search
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
