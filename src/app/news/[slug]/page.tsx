/*
 * Copyright (C), 2024 Team 3602. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in
 * the root directory of this project.
 */

import fs from "fs";

export default async function Page(slug: string) {
  //var load = fs.readFileSync(process.cwd() + "items/" + params.slug.replace(/\.md$/, ""), "utf8");
  return "My Post: {slug}"

}

export function generateStaticParams() {
  return [{ slug: '/news/1' }, { slug: '/news/2' }, { slug: '/news/3' }];
}