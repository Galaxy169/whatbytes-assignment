function Sidebar() {
  return (
    // <aside className="text-white bg-[#0759a7ff]  gap-4 w-1/5 p-5 rounded-3xl">
    //   <div>
    //     <h1 className="text-2xl">Filters</h1>
    //   </div>
    //   <form className="flex  justify-center items-center">
    //     <p className="text-xl mb-3">Category</p>
    //     <input type="radio" id="all" name="category" value="all" />
    //     <label htmlFor="all" className="">All</label>
    //     <input
    //       type="radio"
    //       id="electronics"
    //       name="category"
    //       value="electronics"
    //     />
    //     <label htmlFor="electronics">Electronics</label>
    //     <input type="radio" id="clothing" name="category" value="clothing" />
    //     <label htmlFor="clothing">Clothing</label>
    //     <input type="radio" id="home" name="category" value="home" />
    //     <label htmlFor="home">Home</label>

    //     <p className="text-xl">Price</p>
    //     <input type="range" />
    //   </form>
    // </aside>

    <aside className="w-full max-w-[270px] max-h-100 bg-[#0759a7ff] px-6 py-6 m-2 rounded-3xl">
      <h2 className="font-bold mb-5 text-2xl">Filters</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-xl mb-2">Category</h3>
        <ul className="space-y-1">
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-3 text-lg">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  defaultChecked={cat === "All"}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-2">Price</h3>
        <input type="range" min="0" max="1000" className="w-full mt-2" />
        <div className="flex justify-between text-lg">
          <p>0</p>
          <p>100</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
