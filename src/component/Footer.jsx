import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class=" bottom-0 left-0 z-20 w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
        <span class="text-sm text-white sm:text-center dark:text-gray-400">
          © 2019{" "}
          <a href="#" class="hover:underline">
            Traninc
          </a>
          . All Rights Reserved.
        </span>
      
      </footer>
    </div>
  );
};

export default Footer;
