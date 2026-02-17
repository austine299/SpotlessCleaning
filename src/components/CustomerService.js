import React, { useState } from "react";
import { X } from "lucide-react";

const WhatsAppChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preFilledMsg, setPreFilledMsg] = useState("");

  const date = new Date();
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", options);

  const phoneNumber = process.env.REACT_APP_CONTACT; // Your WhatsApp number

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-4 cursor-pointer shadow-lg animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-72 bg-white rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <img
                src="logo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-sm">Spotless Cleaning</p>
                <p className="text-xs text-green-100">
                  Typically replies within 10 minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold ml-5"
            >
              <X/>
            </button>
          </div>

          {/* Body */}
          <div className="p-3 bg-gray-100">
            <div className="flex gap-3 bg-white p-2 rounded-md shadow-sm text-sm mb-2">
              <img
                src="logo.png"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p>
                  <strong className="text-green-700">Spotless Cleaning</strong>
                </p>
                <p>Hi, welcome to Spotless Cleaning Services, how can we help you today? 😊</p>
                <p className="text-right text-xs text-gray-400">
                  {formattedTime}
                </p>
              </div>
            </div>

            {/* Input (clickable) */}
            <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Type a message.."
                value={preFilledMsg}
                onChange={(e) => setPreFilledMsg(e.target.value)}
                className="bg-transparent w-full outline-none text-sm text-gray-600"
              />
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  preFilledMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/25D366/paper-plane.png"
                  alt="Send"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatWidget;
