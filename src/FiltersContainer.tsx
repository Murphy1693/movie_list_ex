import { FiltersAction, Filters } from "./MovieList";

type FiltersContainerProps = {
  filters: Filters;
  filtersDispatch: React.Dispatch<FiltersAction>;
};

const FiltersContainer = ({
  filters,
  filtersDispatch,
}: FiltersContainerProps) => {
  return (
    <div>
      <div className="flex gap-6 py-6 md:justify-end">
        <button
          className={
            filters.unwatched.value
              ? " border-2 border-yellow-300 bg-yellow-300 p-1 text-[10px] font-bold uppercase text-black"
              : "border-2 p-1 text-[10px] font-bold uppercase opacity-50"
          }
          onClick={() => {
            filtersDispatch({ type: "unwatched" });
          }}
        >
          Show Unwatched
        </button>
        <button
          className={
            filters.watched.value
              ? "border-2 border-yellow-300 bg-yellow-300 p-1 text-[10px] font-bold uppercase text-black"
              : "border-2 p-1 text-[10px] font-bold uppercase opacity-50"
          }
          onClick={() => {
            filtersDispatch({ type: "watched" });
          }}
        >
          Show Watched
        </button>
      </div>
      <div className=" flex w-fit flex-col justify-center pb-4">
        {/* <pre className="m-auto text-sm font-bold text-yellow-300">
          Filter Results
        </pre>
        <input
          className="bg-[#393939]"
          value={filters.searchQuery.value as string}
          onChange={(e) => {
            filtersDispatch({
              type: "searchQuery",
              searchValue: e.target.value,
            });
          }}
        ></input> */}
      </div>
    </div>
  );
};

export default FiltersContainer;
