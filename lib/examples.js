import matter from "gray-matter";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import  MarkdownIt from "markdown-it";
import highlight from "./highlighter";


const md = MarkdownIt({
    highlight
})

const examplesDir = path.join(process.cwd(), "_examples")


const readFile = promisify(fs.readFile);

export async function getPage(slug) {
  const raw = await readFile(
    path.join(examplesDir, (slug + ".md")),
    "utf-8",
  )
    .catch((err) => {
      console.log(err.code);
    });
  const { data, content } = matter(raw);
  console.log(data);
  const htmlContent = md.render(content)
  return{
      data,
      content : htmlContent
  }
}




export function getPaths(){
  return fs.readdirSync(examplesDir).map(x=>x.replace(/\.md$/, ''))
}