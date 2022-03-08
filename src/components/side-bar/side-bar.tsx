import React from "react";
import {
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";
import { Tag } from "../tag/index";

const tagInfo = [
  { title: "Hacking" },
  { title: "Bitcoin" },
  { title: "Software Architectures" },
  { title: "Gaming" },
  { title: "Linux" },
  { title: "Security" },
];

const SideBar: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <section>
        <div>
          <div>
            <h3 className="">Search </h3>
            <input
              placeholder="search..."
              className="border-2 border-gray-500 py-2 px-2 w-full rounded-md"
            />
          </div>
          <h3 className="py-2 mb-2">TAGS</h3>
          <section className="flex gap-x-2 gap-y-2 flex-wrap">
            {tagInfo?.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </section>

          <section className="mt-4">
            <h3>Share</h3>
            <div className="flex gap-x-2">
              <WhatsappIcon size={32} round={true} className="cursor-pointer" />
              <LinkedinIcon size={32} round={true} className="cursor-pointer" />
              <RedditIcon size={32} round={true} className="cursor-pointer" />
              <TwitterIcon size={32} round={true} className="cursor-pointer" />
              <TelegramIcon size={32} round={true} className="cursor-pointer" />
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SideBar;
