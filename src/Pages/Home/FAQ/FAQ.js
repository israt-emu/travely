import React, { useState } from "react";
import img from "../../../images/faq.jpg";

const FAQ = () => {
  //state and function for accordion
  const [firstQues, setfirstQues] = useState(true);
  const [secondQues, setSecondQues] = useState(false);
  const [thirdQues, setThirdQues] = useState(false);
  const [fourthQues, setFourthQues] = useState(false);
  const handleExpand = (quesNumber) => {
    if (quesNumber === "first") {
      setfirstQues(!firstQues);
      setFourthQues(false);
      setSecondQues(false);
      setThirdQues(false);
    } else if (quesNumber === "2nd") {
      setfirstQues(false);
      setFourthQues(false);
      setSecondQues(!secondQues);
      setThirdQues(false);
    } else if (quesNumber === "3rd") {
      setfirstQues(false);
      setFourthQues(false);
      setSecondQues(false);
      setThirdQues(!thirdQues);
    } else {
      setfirstQues(false);
      setFourthQues(!fourthQues);
      setSecondQues(false);
      setThirdQues(false);
    }
  };
  return (
    <div>
      <div className="lg:w-4/5 md:w-3/5 w-11/12 mx-auto py-10">
        <h1 className="text-center text-3xl font-semibold border-b-2 md:w-2/5 w-11/12 pb-2 mx-auto">
          Frequently Asked Questions
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-6 items-center py-8">
          <div className="text-center lg:text-left">
            <div>
              <img src={img} alt="" className="w-2/4 mx-auto lg:mx-0" />
            </div>
            <h1 className="text-xl font-semibold lg:ml-14 lg:-mt-4">
              Asked What you want to Know !!
            </h1>
          </div>
          {/* accordion  */}
          <div className="shadow-lg p-6">
            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <div className="flex items-center justify-between">
                  <label
                    className="block p-5 leading-normal cursor-pointer font-bold"
                    for="tab-multi-one"
                  >
                    HOW DO I CANCEL A TRIP?
                  </label>
                  <button
                    className={`mr-4 text-2xl ${
                      firstQues ? "hidden" : "block"
                    }`}
                    onClick={() => handleExpand("first")}
                  >
                    <i className="fas fa-arrow-alt-circle-down text-blue-900"></i>
                  </button>
                  <button
                    className={`mr-4 text-2xl ${
                      firstQues ? "block" : "hidden"
                    }`}
                    onClick={() => handleExpand("first")}
                  >
                    <i className="fas fa-arrow-alt-circle-up text-blue-900"></i>
                  </button>
                </div>
                <div
                  className={`tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-500 leading-normal ${
                    firstQues ? "block" : "hidden"
                  }`}
                >
                  <p className="p-5">
                    Call us right away. If it’s after normal business hours,
                    please contact the next involved travel supplier (airline,
                    hotel, tour operator, cruise line) to cancel any
                    reservations you will not be able to use.
                  </p>
                </div>
              </div>
            </div>
            {/* second question  */}
            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <div className="flex items-center justify-between">
                  <label
                    className="block p-5 leading-normal cursor-pointer font-bold"
                    for="tab-multi-one"
                  >
                    HOW DO I KNOW I CAN TRUST THIS TRAVEL VENDOR?
                  </label>
                  <button
                    className={`mr-4 text-2xl ${
                      secondQues ? "hidden" : "block"
                    }`}
                    onClick={() => handleExpand("2nd")}
                  >
                    <i className="fas fa-arrow-alt-circle-down text-blue-900"></i>
                  </button>
                  <button
                    className={`mr-4 text-2xl ${
                      secondQues ? "block" : "hidden"
                    }`}
                    onClick={() => handleExpand("2nd")}
                  >
                    <i className="fas fa-arrow-alt-circle-up text-blue-900"></i>
                  </button>
                </div>
                <div
                  className={`tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-500 leading-normal ${
                    secondQues ? "block" : "hidden"
                  }`}
                >
                  <p className="p-5">
                    Professional Travel a Travely Company is extremely cautious
                    when it comes to choosing our business partners and vendors.
                    This vetting of travel suppliers and support of the ‘good
                    ones’ over the past 50+ years has given us preferred access
                    to the world’s top trusted suppliers.
                  </p>
                </div>
              </div>
            </div>
            {/* third question  */}
            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <div className="flex items-center justify-between">
                  <label
                    className="block p-5 leading-normal cursor-pointer font-bold"
                    for="tab-multi-one"
                  >
                    DO I NEED TRAVEL INSURANCE?
                  </label>
                  <button
                    className={`mr-4 text-2xl ${
                      thirdQues ? "hidden" : "block"
                    }`}
                    onClick={() => handleExpand("3rd")}
                  >
                    <i className="fas fa-arrow-alt-circle-down text-blue-900"></i>
                  </button>
                  <button
                    className={`mr-4 text-2xl ${
                      thirdQues ? "block" : "hidden"
                    }`}
                    onClick={() => handleExpand("3rd")}
                  >
                    <i className="fas fa-arrow-alt-circle-up text-blue-900"></i>
                  </button>
                </div>
                <div
                  className={`tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-500 leading-normal ${
                    thirdQues ? "block" : "hidden"
                  }`}
                >
                  <p className="p-5">
                    Travel insurance is available and recommended to protect
                    your travel investment. Many trips, such as tours and
                    cruises, involve non-refundable funds paid months in
                    advance. Travel insurance protects you from losing this
                    investment.
                  </p>
                </div>
              </div>
            </div>
            {/* fourth question  */}
            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <div className="flex items-center justify-between">
                  <label
                    className="block p-5 leading-normal cursor-pointer font-bold"
                    for="tab-multi-one"
                  >
                    DOES IT COST MONEY TO GET A QUOTE?
                  </label>
                  <button
                    className={`mr-4 text-2xl ${
                      fourthQues ? "hidden" : "block"
                    }`}
                    onClick={() => handleExpand("4th")}
                  >
                    <i className="fas fa-arrow-alt-circle-down text-blue-900"></i>
                  </button>
                  <button
                    className={`mr-4 text-2xl ${
                      fourthQues ? "block" : "hidden"
                    }`}
                    onClick={() => handleExpand("4th")}
                  >
                    <i className="fas fa-arrow-alt-circle-up text-blue-900"></i>
                  </button>
                </div>
                <div
                  className={`tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-500 leading-normal ${
                    fourthQues ? "block" : "hidden"
                  }`}
                >
                  <p className="p-5">
                    No, there is no fee for our vacation planning services as
                    the travel vendors involved recognize our value and
                    compensate us from the gross amount paid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
