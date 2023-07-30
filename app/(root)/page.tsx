import listingsDB from "@/data/data.json";
import Listing from "./components/Listing";
import SearchBar from "./components/SearchBar";
import EmptyState from "@/components/EmptyState";

interface HomePageProps {
  searchParams: {
    company?: string;
    position?: string;
    role?: string;
    level?: string;
    language?: string;
    tool?: string;
    searchQuery?: string;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  let listings = [...listingsDB];

  const { company, position, role, level, language, tool, searchQuery } =
    searchParams;

  if (company || position || role || level || language || tool || searchQuery) {
    listings = listings.filter((listing) => {
      if (company) {
        return listing.company.includes(company);
      }
      if (position) {
        return listing.position.includes(position);
      }
      if (role) {
        return listing.role.includes(role);
      }
      if (level) {
        return listing.level.includes(level);
      }
      if (language) {
        // Check if any language in the languages array is included in the listing.languages array
        return listing.languages.includes(language);
      }
      if (tool) {
        // Check if any tool in the tools array is included in the listing.tools array
        return listing.tools.includes(tool);
      }

      if (searchQuery) {
        return (
          listing.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.level?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    });
  }

  return (
    <main className="flex h-full  w-full flex-col items-center ">
      <section className="relative flex items-center justify-center">
        <div className="w-full bg-primary">
          <img
            className="lg:hidden"
            src="/images/bg-header-mobile.svg"
            alt=""
          />
          <img
            className="hidden lg:block"
            src="/images/bg-header-desktop.svg"
            alt=""
          />
        </div>
        <SearchBar />
      </section>
      <section className="mt-5 grid w-full  flex-1 grid-cols-1 place-items-center gap-y-8 bg-white py-10">
        {listings.length ? (
          listings.map((listing) => (
            <Listing key={listing?.id} listing={listing} />
          ))
        ) : (
          <EmptyState
            title="No exact matches"
            subtitle="Try changing or removing some of your filters"
            showReset={true}
          />
        )}
      </section>
    </main>
  );
}
