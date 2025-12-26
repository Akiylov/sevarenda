import React from "react";
import "./socialLinks.scss";
import Image from "next/image";
import {
  iconInstagram,
  iconFacebook,
  iconLocation,
  iconPhone,
  iconTelegram,
  iconTikTok,
  iconYouTube,
} from "@/public/social";

const socials = [
  {
    title: "Instagram",
    icon: iconInstagram,
    href: "https://www.instagram.com/",
  },
  {
    title: "Facebook",
    icon: iconFacebook,
    href: "https://www.facebook.com/",
  },
  {
    title: "Telegram Channel",
    icon: iconTelegram,
    href: "https://t.me/",
  },
  {
    title: "TikTok",
    icon: iconTikTok,
    href: "https://www.tiktok.com/",
  },
  {
    title: "YouTube",
    icon: iconYouTube,
    href: "https://www.youtube.com/",
  },
  {
    title: "Location",
    icon: iconLocation,
    href: "https://maps.google.com",
  },
  {
    title: "Phone",
    icon: iconPhone,
    href: "tel:+0000000000",
  },
];

const SocialsLinks = () => {
  return (
    <div className="socials">
      {socials.map((item) => (
        <a
          className="socials__card"
          key={item.title}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <Image
            className="social__img"
            width={45}
            height={45}
            src={item.icon}
            alt={item.title}
          />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialsLinks;
