import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left">

          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-4xl font-extrabold">
              Get in Touch
            </h2>

            <p className="mt-4 max-w-md text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Reach out for orders, questions, or collaborations.
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:Unknownfornow@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  Unknownfornow@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a
                  href="tel:0870166473"
                  className="text-yellow-400 hover:underline"
                >
                  0870166473
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT: SOCIALS */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <h3 className="text-2xl font-bold">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-6">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-gray-800 p-3 transition-colors hover:bg-yellow-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-gray-800 p-3 transition-colors hover:bg-yellow-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm5.8-9.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="#"
                aria-label="Telegram"
                className="rounded-full bg-gray-800 p-3 transition-colors hover:bg-yellow-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.04 15.44 8.9 19.2c.4 0 .57-.17.78-.38l1.88-1.8 3.9 2.85c.72.4 1.24.2 1.42-.66l2.57-12.08c.24-1.1-.4-1.54-1.1-1.28L2.5 9.75c-1.08.42-1.06 1.02-.2 1.28l4.2 1.32L16.3 6.6c.46-.28.9-.12.55.16L9.04 15.44z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
