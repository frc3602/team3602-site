/*
 * Copyright (C), 2024 Team 3602. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in
 * the root directory of this project.
 */

import Footer from '../components/footer';
import Header from '../components/header';
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl m-0 m-auto">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}