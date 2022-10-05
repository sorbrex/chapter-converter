import fs from "fs-extra";
import path from "path";

const ChapterDir = "./Parse";
const OutputDir = "./Output";
const allChapterList = await fs.readdir(ChapterDir);

let counter = 0;

if (await fs.pathExists(OutputDir)) {
  await fs.rm(OutputDir, { recursive: true, force: true });
}

await fs.mkdir(OutputDir);

for (const chapterFolder of allChapterList) {
  const pageList = await fs.readdir(path.join(ChapterDir, chapterFolder));
  console.log("Processing Chapter => " + path.join(ChapterDir, chapterFolder));

  for (const page of pageList) {
    if (page === ".nomedia") continue;
    console.log("Now Moving Page => " + path.join(chapterFolder, page));
    const fileBuffer = await fs.readFile(
      path.join(ChapterDir, chapterFolder, page)
    );

    await fs.writeFile(
      path.join(
        OutputDir,
        "page_" + counter.toString().padStart(3, "0") + ".jpg"
      ),
      fileBuffer
    );

    counter++;
  }
}
