import React from "react";
import { Announcement, Button } from "../../../components/index";
const Bannder = () => {
  return (
    <section className="bg-white">
      <Announcement />
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl">
            Free Open Sources
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Tailwind CSS Components{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-lg/relaxed">
            HyperUI is a collection of free Tailwind CSS components that can be
            used in your next project. With a range of components, you can build
            your next marketing website, admin dashboard, eCommerce store and
            much more.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 font-light">
            <Button title="Get Started" size="medium" bgColor="black" />
            <Button title="Learn More" size="medium" bgColor="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannder;
