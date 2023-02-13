type TopbarProps = {
  setView: (view: boolean) => void;
  view: boolean;
};

const Topbar = ({ setView, view }: TopbarProps) => {
  return (
    <div className="sticky top-0 z-10 flex justify-end md:justify-center md:bg-gray-900">
      <div className="flex max-w-6xl bg-gray-900 md:w-full md:justify-end">
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
  );
};

export default Topbar;
