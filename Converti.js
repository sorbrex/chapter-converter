import fs from "fs-extra";
import path from "path";

const ChapterDir = "./Parse";
const allChapterList = await fs.readdir(ChapterDir);

let counter = 0;

for (const chapterFolder of allChapterList) {
  const pageList = await fs.readdir(path.join(ChapterDir, chapterFolder));
  console.log("Processing Chapter => " + path.join(ChapterDir, chapterFolder));

  for (const page of pageList) {
    console.log("Now Moving Page => " + path.join(chapterFolder, page));
    const fileBuffer = await fs.readFile(
      path.join(ChapterDir, chapterFolder, page)
    );

    await fs.writeFile(
      path.join(
        ChapterDir,
        "page_" + counter.toString().padStart(3, "0") + ".jpg"
      ),
      fileBuffer
    );

    counter++;
  }
}
