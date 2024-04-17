import React from "react";
import { PartyPopper } from "lucide-react";

const Announcement = () => {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <div className="text-center text-sm font-medium flex items-center justify-center">
        <p>Love JS Snippets? </p>
        <a href="#" className="inline-block underline"></a>
        <span>
          <PartyPopper />
        </span>
      </div>
    </div>
  );
};

export default Announcement;
