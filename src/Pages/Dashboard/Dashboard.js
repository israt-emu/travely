import React, { useState } from "react";
import AddOffer from "../AddOffer/AddOffer";
import ManageTours from "../ManageTours/ManageTours";

const Dashboard = () => {
  const [isManage, setIsManage] = useState(true);
  return (
    <div>
      <div className="py-20">
        <div className="w-11/12 mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
            <div className="bg-blue-900 py-14 h-96">
              <ul className="text-blue-100 font-semibold px-6">
                <li className="text-2xl font-bold text-white border-b-2 mb-8">
                  <i className="fa fa-user mr-2"></i> Admin Dashboard
                </li>
                <li className="mb-3">
                  <button onClick={() => setIsManage(true)}>
                    Manage Tours
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsManage(false)}>
                    Add New Plan
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:col-start-2 md:col-end-4">
              {isManage ? <ManageTours></ManageTours> : <AddOffer></AddOffer>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
