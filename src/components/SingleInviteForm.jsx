import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const SingleInviteForm = () => {
  const [recurrenceRows, setRecurrenceRows] = useState([{ id: 1, date: "", visitDay: "", time: "", meetingRoom: "" }]);
  const [formData, setFormData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const addRow = () => {
    setRecurrenceRows([...recurrenceRows, { id: Date.now(), date: "", visitDay: "", time: "", meetingRoom: "" }]);
  };

  const removeRow = (id) => {
    setRecurrenceRows(recurrenceRows.filter((row) => row.id !== id));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRowChange = (id, field, value) => {
    setRecurrenceRows(
      recurrenceRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleInvite = () => {
    setShowPopup(true);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-4 text-gray-700">
        <h1 className="text-xl font-bold mb-6">🌀 Entra</h1>
        {[
          "Invite Visitor",
          "Invitation List",
          "Book Meeting Room",
          "Calendar View",
          "Meeting Room View",
          "Settings",
          "Emergency Alert",
          "Helpdesk",
        ].map((item, idx) => (
          <div
            key={idx}
            className={`cursor-pointer px-4 py-2 rounded ${
              idx === 0 ? "bg-blue-400 text-white" : "hover:bg-gray-100"
            }`}
          >
            {item}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-blue-50 p-6 overflow-auto">
        {/* Top Nav */}
        <div className="flex justify-end mb-4 items-center space-x-4">
          <select className="border px-3 py-1 rounded-md">
            <option>EN</option>
            <option>FR</option>
          </select>
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-6">
          {["Single Invite", "Bulk Invite", "Meeting Invite"].map((tab, idx) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t-md font-semibold ${
                idx === 0
                  ? "bg-white shadow text-blue-600"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Please fill in these details.
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <input name="mobile" onChange={handleChange} placeholder="Mobile Number" className="input" />
            <input name="fullName" onChange={handleChange} placeholder="Full Name" className="input" />
            <input name="email" onChange={handleChange} placeholder="Email ID" className="input" />

            <select name="purpose" onChange={handleChange} className="input">
              <option>Purpose</option>
            </select>
            <select name="entryPoint" onChange={handleChange} className="input">
              <option>Entry Point</option>
            </select>
            <select name="host" onChange={handleChange} className="input">
              <option>Host</option>
            </select>

            <select name="branch" onChange={handleChange} className="input">
              <option>Branch</option>
            </select>

            <select name="vehicle" onChange={handleChange} className="input">
              <option>Vehicle</option>
            </select>
            <input name="vehicleNumber" onChange={handleChange} placeholder="Vehicle Number" className="input" />

            <input name="date" onChange={handleChange} placeholder="Date" className="input" />
            <input name="visitDay" onChange={handleChange} placeholder="Visit Day" className="input" />
            <input name="time" onChange={handleChange} placeholder="Time" className="input" />
            <input name="meetingRoom" onChange={handleChange} placeholder="Meeting Room" className="input" />
          </div>

          {/* Recurrence */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm text-gray-700">Recurrence</span>
            </label>

            {recurrenceRows.map((row) => (
              <div key={row.id} className="grid grid-cols-4 gap-4 items-center">
                <input
                  placeholder="Date"
                  className="input"
                  value={row.date}
                  onChange={(e) => handleRowChange(row.id, "date", e.target.value)}
                />
                <input
                  placeholder="Visit Day"
                  className="input"
                  value={row.visitDay}
                  onChange={(e) => handleRowChange(row.id, "visitDay", e.target.value)}
                />
                <input
                  placeholder="Time"
                  className="input"
                  value={row.time}
                  onChange={(e) => handleRowChange(row.id, "time", e.target.value)}
                />
                <div className="flex items-center space-x-2">
                  <input
                    placeholder="Meeting Room"
                    className="input"
                    value={row.meetingRoom}
                    onChange={(e) => handleRowChange(row.id, "meetingRoom", e.target.value)}
                  />
                  {recurrenceRows.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRow(row.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addRow}
              className="text-blue-500 flex items-center mt-2"
            >
              <Plus className="mr-1" size={20} />
              Add Row
            </button>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleInvite}
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-2 rounded-md"
            >
              Invite
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-gray-300 to-gray-400 text-white px-6 py-2 rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </main>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative flex p-6 space-x-6">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>

            {/* Left side: Profile icon */}
            <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 rounded-xl w-32 h-32">
              <svg
                className="w-16 h-16 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>

            {/* Right side: Details */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Visitor Information
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-semibold capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value}
                  </div>
                ))}
              </div>

              {recurrenceRows.length > 0 && (
                <>
                  <h3 className="mt-4 text-sm font-semibold">Recurrence Schedule</h3>
                  <ul className="mt-2 text-sm list-disc list-inside text-gray-700 space-y-1">
                    {recurrenceRows.map((row) => (
                      <li key={row.id}>
                        {row.date}, {row.visitDay}, {row.time}, Room: {row.meetingRoom}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleInviteForm;
