import React from "react";

import menuHero from "../assets/menu.jpg";
import box1 from "../assets/box1.jpg";
import box2 from "../assets/box2.jpg";
import box3 from "../assets/box3.jpg";

const Menu: React.FC = () => {
  return (
    <main className="bg-neutral-50 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full">
        <img
          src={menuHero}
          alt="Menu"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              A bold fusion of Jamaican soul and Bangladeshi spice.
              Carefully crafted boxes and standout dishes made to satisfy.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BOXES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-green-900">
          Signature Boxes
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Curated meals combining our most loved flavors into one powerful box.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* BOX 1 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={box1} alt="Hot Honey Blasian Box" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">Hot Honey Blasian Box</h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Hot Honey Garlic Chicken Wings</li>
                <li>• Chicken Biriyani</li>
                <li>• Jamaican Macaroni Pie</li>
                <li>• Seasoned Corn on the Cob</li>
                <li>• Coleslaw</li>
                <li>• Tropical Sun Drink</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">£15</div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={box2} alt="Blasian Box" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">Blasian Box</h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Curry Chicken</li>
                <li>• Chicken Biriyani</li>
                <li>• Beef Spring Rolls</li>
                <li>• Jamaican Macaroni Pie</li>
                <li>• Fried Plantain</li>
                <li>• Coleslaw</li>
                <li>• Guinness Punch</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">£15</div>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={box3} alt="Tandoori Blasian Box" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">Tandoori Blasian Box</h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Tandoori Chicken Wings</li>
                <li>• Lamb Biriyani</li>
                <li>• Jamaican Style Macaroni Cheese</li>
                <li>• Seasoned Corn on the Cob</li>
                <li>• Coleslaw</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">£15</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU ITEMS ================= */}
      <section className="bg-green-950 py-24 text-white">
        <div className="mx-auto w-full max-w-4xl px-4 md:max-w-[80%] lg:max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold text-yellow-400">
            À La Carte
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* MAINS */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white text-center">
                Mains
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Hot Honey Chicken Wings</span>
                  <span>£10</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Tandoori Chicken Wings</span>
                  <span>£10</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Curry Chicken</span>
                  <span>£7</span>
                </li>
              </ul>
            </div>

            {/* SIDES */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white text-center">
                Sides
              </h3>
              <ul className="space-y-3 text-lg">
                {[
                  ["White Rice", "£3"],
                  ["Chicken Biriyani", "£6"],
                  ["Ackee & Saltfish", "£7"],
                  ["Macaroni Pie", "£5"],
                  ["Fried Plantain", "£2"],
                  ["Coleslaw", "£2"],
                  ["Corn on the Cob", "£3"],
                  ["Fried Dumplings", "£3"],
                  ["Vegetable Spring Rolls", "£3"],
                ].map(([name, price]) => (
                  <li
                    key={name}
                    className="flex justify-between border-b border-white/20 pb-2"
                  >
                    <span>{name}</span>
                    <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DRINKS */}
          <div className="mx-auto mt-20 max-w-md text-center">
            <h3 className="mb-6 text-2xl font-bold text-white">Drinks</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex justify-between border-b border-white/20 pb-2">
                <span>Soft Drinks</span>
                <span>£2</span>
              </li>
              <li className="flex justify-between border-b border-white/20 pb-2">
                <span>Water</span>
                <span>£1</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
