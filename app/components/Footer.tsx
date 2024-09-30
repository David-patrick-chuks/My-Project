import { FooterLinks } from "@/data";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLine,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-24 lg:px-[100px] px-5 text-foodconnect-900 dark:text-foodconnect-200 dark:bg-foodconnect-950 bg-foodconnect-50 dark:bg-grid-foodconnect-900/[0.2] bg-grid-foodconnect-200/[0.2] relative flex items-center flex-col justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-foodconnect-950 bg-foodconnect-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-between w-full items-center py-5 border-b border-b-white">
        <div className="flex justify-center my-auto items-center gap-5">
          <h1 className="font-semibold">FoodConnect</h1>
          <IconLine />
          <h1 className="lg:text-sm text-xs ">
            Donate, CLaim and Connect with Food.
          </h1>
        </div>
        <ul className="md:flex gap-8 hidden capitalize font-medium text-[14px]">
          <IconBrandInstagram />
          <IconBrandFacebook />
          <IconBrandYoutube />
          <IconBrandTwitter />
        </ul>
      </div>
      <div className="grid grid-cols-2 w-full md:grid-cols-5 py-5">
        {FooterLinks.map((section) => (
          <div
            key={section.id}
            className="mb-3 p-1 m-1 w-fit  lg:mb-0 flex flex-col gap-2"
          >
            <h3 className="font-bold">{section.title}</h3>
            <ul className="flex flex-col gap-2 font-light">
              {section.links.map((link) => (
                <div key={link.id}>
                  <Link href={`/${link.id}`}>{link.label}</Link>
                </div>
              ))}
            </ul>
          </div>
        ))}
        <div className="ml-[10px] md:hidden">
          <p className="font-bold">Follow us on:</p>
          <div className="flex flex-col gap-1 mt-1 text-sm">
            <p>
              <IconBrandInstagram className="inline-block text-lg" /> Instagram
            </p>
            <p>
              <IconBrandFacebook className="inline-block text-lg" /> Facebook
            </p>
            <p>
              <IconBrandYoutube className="inline-block text-lg" /> Youtube
            </p>
            <p>
              <IconBrandTwitter className="inline-block text-lg" />
              Twitter
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center pt-0 pb-3 md:pt-3">
        <div className="flex gap-4 text-xs md:text-base font-light w-full items-center justify-center ">
          <h1>Copyright © {currentYear} FoodBank. All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};
