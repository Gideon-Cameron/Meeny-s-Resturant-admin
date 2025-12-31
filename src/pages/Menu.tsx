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
              <h3 className="text-xl font-bold text-gray-900">
                Hot Honey Blasian Box
              </h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Hot Honey Garlic Chicken Wings</li>
                <li>• Chicken Biriyani</li>
                <li>• Jamaican Macaroni Pie</li>
                <li>• Seasoned Corn on the Cob</li>
                <li>• Coleslaw</li>
                <li>• Tropical Sun Drink</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">
                £15
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={box2} alt="Blasian Box" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Blasian Box
              </h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Curry Chicken</li>
                <li>• Chicken Biriyani</li>
                <li>• Beef Spring Rolls</li>
                <li>• Jamaican Macaroni Pie</li>
                <li>• Fried Plantain</li>
                <li>• Coleslaw</li>
                <li>• Guinness Punch</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">
                £15
              </div>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={box3} alt="Tandoori Blasian Box" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Tandoori Blasian Box
              </h3>
              <ul className="mt-4 space-y-1 text-gray-700">
                <li>• Tandoori Chicken Wings</li>
                <li>• Lamb Biriyani</li>
                <li>• Jamaican Style Macaroni Cheese</li>
                <li>• Seasoned Corn on the Cob</li>
                <li>• Coleslaw</li>
              </ul>
              <div className="mt-6 text-2xl font-extrabold text-yellow-600">
                £15
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU ITEMS ================= */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-green-900">
            À La Carte
          </h2>

          {/* MAINS */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900">Mains</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex justify-between">
                <span>Hot Honey Chicken Wings</span>
                <span className="font-semibold">£10</span>
              </li>
              <li className="flex justify-between">
                <span>Tandoori Chicken Wings</span>
                <span className="font-semibold">£10</span>
              </li>
              <li className="flex justify-between">
                <span>Curry Chicken</span>
                <span className="font-semibold">£7</span>
              </li>
            </ul>
          </div>

          {/* SIDES */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900">Sides</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex justify-between"><span>White Rice</span><span>£3</span></li>
              <li className="flex justify-between"><span>Chicken Biriyani</span><span>£6</span></li>
              <li className="flex justify-between"><span>Ackee & Saltfish</span><span>£7</span></li>
              <li className="flex justify-between"><span>Macaroni Pie</span><span>£5</span></li>
              <li className="flex justify-between"><span>Fried Plantain</span><span>£2</span></li>
              <li className="flex justify-between"><span>Coleslaw</span><span>£2</span></li>
              <li className="flex justify-between"><span>Corn on the Cob</span><span>£3</span></li>
              <li className="flex justify-between"><span>Fried Dumplings</span><span>£3</span></li>
              <li className="flex justify-between"><span>Vegetable Spring Rolls</span><span>£3</span></li>
            </ul>
          </div>

          {/* DRINKS */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900">Drinks</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex justify-between"><span>Soft Drinks</span><span>£2</span></li>
              <li className="flex justify-between"><span>Water</span><span>£1</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
