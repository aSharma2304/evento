"use client";
import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

const SocialShare = () => {
  return (
    <ul className="flex justify-center gap-5">
      <li className="hover:scale-125 transition ease-in-out">
        <FacebookShareButton url={"http://localhost:3000"} blankTarget={true}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </li>
      <li className="hover:scale-125 transition ease-in-out">
        <WhatsappShareButton url={"http://localhost:3000"} blankTarget={true}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
