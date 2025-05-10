import Filters from "./Filters";

function Sidebar() {
  return (
    <aside className="w-full hidden md:block max-w-[270px] max-h-100 bg-[#0759a7ff] px-6 py-6 m-2 rounded-3xl">
      <h2 className="font-bold mb-5 text-2xl">Filters</h2>
      <Filters />
    </aside>
  );
}

export default Sidebar;
