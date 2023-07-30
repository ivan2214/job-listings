"use client";

import { useRouter } from "next/navigation";
import Heading from "./ui/Heading";
import { useSearchParamsContext } from "@/context/SearchParamsContext";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();
  const { setSearchQuery, setLanguage, setLevel, setRole, setTool } =
    useSearchParamsContext();

  const reset = () => {
    setSearchQuery("");
    setLanguage("");
    setLevel("");
    setRole("");
    setTool("");
    router.push("/");
  };

  return (
    <div
      className="
        flex
        h-full w-full 
        flex-col 
        items-center 
        justify-center 
        gap-2 
        
      "
    >
      <Heading description={subtitle} title={title} />
      <div className="mt-4 w-48 ">
        {showReset && (
          <button
            className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            onClick={reset}
          >
            Remove all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
