import React from "react";
import { Listing } from "../types";
import ListingTollsAndLanguages from "./ListingTollsAndLanguages";

type Props = {
  listing: Listing;
};

const Listing = ({ listing }: Props) => {
  return (
    <article
      className={`relative flex  h-72 w-72 items-center justify-center rounded px-5 py-3  shadow-lg lg:h-auto lg:w-full lg:max-w-5xl lg:flex-row lg:items-center lg:justify-between ${
        listing.featured && "border-l-8 border-primary"
      }`}
    >
      <section className="flex  flex-col items-start gap-4 bg-white lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-0 ">
        <section className="absolute -top-7 left-3 lg:static">
          <div className="aspect-square h-10 w-10 overflow-hidden rounded-md lg:h-24 lg:w-32">
            <img
              src={listing.logo}
              className="object-cover object-center"
              alt=""
            />
          </div>
        </section>

        <section className="flex w-2/3 items-start gap-2 lg:flex-col">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-primary">
              {listing.company}
            </span>
            {listing.new && (
              <span className="rounded-3xl bg-primary px-2 py-1 text-xs font-light">
                {listing.new && "NEW"}
              </span>
            )}
            {listing.featured && (
              <span className="rounded-3xl bg-neutralVeryDark px-2 py-1 text-xs font-light">
                {listing.featured && "FEATURED"}
              </span>
            )}
          </div>

          <div>
            <span className="font-body text-xs font-bold text-black transition hover:text-primary">
              {listing.position}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xs font-light text-gray-600">
              {listing.postedAt}
            </span>
            <span className="text-xs font-light text-gray-600">
              {listing.contract}
            </span>
            <span className="text-xs font-light text-gray-600">
              {listing.location}
            </span>
          </div>
        </section>

        <div className="mt-3 w-full border border-gray-300 lg:hidden"></div>

        <ListingTollsAndLanguages
          languages={listing.languages}
          tools={listing.tools}
          level={listing.level}
          role={listing.role}
        />
      </section>
    </article>
  );
};

export default Listing;
