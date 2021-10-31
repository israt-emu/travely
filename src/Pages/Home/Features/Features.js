import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-100 py-14">
      <h1 className="text-xl font-semibold text-center mb-3">Why Choose Us?</h1>
      <h1 className="md:text-3xl text-2xl font-bold text-center ">
        We are best in our field
      </h1>
      <div className="lg:w-11/12 md:w-4/5 sm:w-4/5 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 items-center">
          <div className="md:mr-8 mb-14 lg:mb-0">
            <h1 className="text-3xl font-semibold mb-3">
              Welcome To the Travely...
            </h1>
            <p className="text-lg">
              Feel free to discover most engaging places.You can rest assured
              we’ll have the capacity to make you feel comfortable as we leave
              the techy stuff and we focus on helping people.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* single feature item  */}
            <div className="text-center bg-white p-6 shadow-lg rounded md:-mb-8">
              <div>
                <i className="fas fa-globe-europe fa-3x text-blue-900"></i>
              </div>
              <h1 className="text-xl font-bold my-3">
                We Work Around the World
              </h1>
              <p>
                We are a Leading travel agency specialized in group travel all
                over world. We are offering top services for all travel needs
                and the most different type of groups.
              </p>
            </div>
            <div className="text-center bg-white p-6 shadow-lg rounded md:-mt-8">
              <div>
                <i className="fas fa-clock fa-3x text-blue-900"></i>
              </div>
              <h1 className="text-xl font-bold my-3">We Move Fast and Safe</h1>
              <p>
                Travel can be an exciting, eye-opening experience. But we don’t
                forget about travel security and safety considerations while
                you’re abroad.
              </p>
            </div>
            <div className="text-center bg-white p-6 shadow-lg rounded md:mt-8 md:-mb-8">
              <div>
                <i className="fas fa-balance-scale-right fa-3x text-blue-900"></i>
              </div>
              <h1 className="text-xl font-bold my-3">
                We Do Everything Legally
              </h1>
              <p>
                A successful travel agent is an astute negotiator, well versed
                in navigating world travel.We make sure that you have met all
                the legal requirements.
              </p>
            </div>
            <div className="text-center bg-white p-6 shadow-lg rounded">
              <div>
                <i className="fas fa-synagogue fa-3x text-blue-900"></i>
              </div>
              <h1 className="text-xl font-bold my-3">
                We Offer The Best Residence
              </h1>
              <p>
                If you’re looking for luxury travel, however, hotels are a
                fantastic way to stay. But we provide the best facilities &
                hotel for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
