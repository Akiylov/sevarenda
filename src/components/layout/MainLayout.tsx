import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./mainlayout.scss";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>

      <main className="content">{children}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
