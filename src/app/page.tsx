/*
 * Copyright (C), 2024 Team 3602. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in
 * the root directory of this project.
 */

import Head from "next/head";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Head>
        <title>Home | Team 3602</title>
      </Head>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          {/* <Image
            src={"/team3602-site/team-photo.jpg"}
            width={1920}
            alt="RoboMos Team 3602 Photo"
          /> */}
          <img src="/team3602-site/team-photo.jpg" alt="RoboMos Team 3602 Photo" />
          <div className="pl-12">
            <h1 className="text-5xl font-bold">RoboMos Team 3602</h1>
            <p className="py-6">
              RoboMos <i>FIRST</i> Robotics Team 3602 is a high school robotics
              team based in Escanaba, Michigan.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </main>
  );
}