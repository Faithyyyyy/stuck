"use client";
import { useState } from "react";
import { TableButton } from "@/components/ui/button";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="px-4 pt-5 pb-6.5 w-full max-w-[1126px] bg-white rounded-md">
      {/* Page Header */}
      {/* <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium text-[#383E49]">Settings</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded ${
            isEditing
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-[#1366D9] text-white hover:bg-[#125CC2]"
          }`}
        >
          {isEditing ? "Save Changes" : "Edit"}
        </button>
      </div> */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium text-[#383E49]">Sales Overview</h2>
        {/* <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded ${
            isEditing
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-[#1366D9] text-white hover:bg-[#125CC2]"
          }`}
        ></button> */}
        <TableButton
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          className={`border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-none h-9 px-4 py-2 rounded ${
            isEditing ? "" : ""
          }`}
        >
          {isEditing ? "Save Changes" : "Edit"}
        </TableButton>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile / Account Section */}
        <section className="bg-gray-50 p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-[#383E49] mb-5">Profile</h2>
          <div className="flex flex-col gap-4">
            <input
              className="p-2 border rounded"
              placeholder="Full Name"
              value="John Doe"
              readOnly={!isEditing}
            />
            <input
              className="p-2 border rounded"
              placeholder="Email"
              type="email"
              value="john@example.com"
              readOnly={!isEditing}
            />
            <input
              className="p-2 border rounded"
              placeholder="Current Password"
              type="password"
              readOnly={!isEditing}
            />
            <input
              className="p-2 border rounded"
              placeholder="New Password"
              type="password"
              readOnly={!isEditing}
            />
            <input
              className="p-2 border rounded"
              placeholder="Confirm New Password"
              type="password"
              readOnly={!isEditing}
            />
          </div>
        </section>

        {/* App Preferences */}
        <section className="bg-gray-50 p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-[#383E49] mb-5">
            App Preferences
          </h2>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              Default Currency
              <select
                className="p-2 border rounded mt-1"
                disabled={!isEditing}
                value="NGN"
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </label>
            <label className="flex flex-col">
              Default Unit
              <select
                className="p-2 border rounded mt-1"
                disabled={!isEditing}
                value="pcs"
              >
                <option value="pcs">Pcs</option>
                <option value="kg">Kg</option>
                <option value="ltr">Ltr</option>
              </select>
            </label>
            <label className="flex flex-col">
              Default Tax %
              <input
                type="number"
                placeholder="Enter default tax"
                className="p-2 border rounded mt-1"
                value={7}
                readOnly={!isEditing}
              />
            </label>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-gray-50 p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-[#383E49] mb-5">
            Notifications
          </h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                disabled={!isEditing}
                checked
              />
              Low Stock Alerts
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                disabled={!isEditing}
              />
              Delivery Reminders
            </label>
          </div>
        </section>

        {/* Supplier Defaults */}
        <section className="bg-gray-50 p-4 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-[#383E49] mb-5">
            Supplier Defaults
          </h2>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              Default Supplier Type
              <select
                className="p-2 border rounded mt-1"
                disabled={!isEditing}
                value="taking-return"
              >
                <option value="taking-return">Taking Return</option>
                <option value="not-taking-return">Not Taking Return</option>
              </select>
            </label>
            <label className="flex flex-col">
              Default Threshold Value
              <input
                type="number"
                placeholder="Enter default threshold"
                className="p-2 border rounded mt-1"
                value={10}
                readOnly={!isEditing}
              />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
