type TopbarProps = {
  setView: (view: boolean) => void;
  view: boolean;
};

const Topbar = ({ setView, view }: TopbarProps) => {
  return (
    <div className="sticky top-0 z-10 flex justify-end bg-neutral-900 md:relative md:justify-center">
      <div className="flex w-full max-w-6xl md:justify-end">
        <div className="mr-auto flex pl-4">
          <span className="text-end font-serif italic first-letter:text-3xl">
            my
          </span>
          <span className="mr-auto align-baseline font-serif italic text-yellow-300 first-letter:text-4xl">
            movie
          </span>
        </div>
        <div className="flex md:bg-transparent">
          {/* <span className="bg-transparent">myMovie</span> */}
          <button
            onClick={() => {
              setView(true);
            }}
            className={
              view
                ? "relative py-2 pl-2 pr-[10px] text-yellow-300"
                : "relative py-2 pl-2 pr-[10px] opacity-50"
            }
          >
            Home
            <a
              className={
                view
                  ? "absolute top-1/2 -right-[1px] h-1/2 -translate-x-1/2 -translate-y-1/2 border-r-2 font-normal opacity-25"
                  : "absolute top-1/2 -right-[1px] h-1/2 -translate-x-1/2 -translate-y-1/2 border-r-2 font-normal opacity-50"
              }
            ></a>
          </button>
          <button
            onClick={() => {
              setView(false);
            }}
            className={!view ? "bold p-2 text-yellow-300" : "p-2 opacity-50"}
          >
            My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
