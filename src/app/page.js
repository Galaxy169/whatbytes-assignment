import ProductCard from "./_components/ProductCard";
import Sidebar from "./_components/Sidebar";

function page() {
  return (
    <div>
      <main className="flex flex-col md:flex-row gap-6 p-6 mt-2">
        <Sidebar />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-scroll h-screen">
          <ProductCard />
        </section>
      </main>
    </div>
  );
}

export default page;
