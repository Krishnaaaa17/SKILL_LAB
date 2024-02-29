import Image from "next/image";
import Navbar from '@/app/Components/navbar';
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero section */}
      <section className="w-full bg-blue-500 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white mb-8">Discover Delicious Food</h1>
            <p className="text-xl text-white">Order from a variety of mouthwatering dishes and enjoy every bite.</p>
            <Link href='/order'>
            <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-600">Order Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured dishes section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Featured dish cards will go here */}
        </div>
      </section>

      {/* About section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h2>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat ligula eget nibh fermentum, eget fringilla risus porttitor. Fusce at risus eu nulla porttitor suscipit at id lacus.</p>
      </section>
    </main>
    </>
  );
}