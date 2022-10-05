# Chapter Converter
This is a Lazy Tool for Lazy People Made by a Lazy Person.

Do you also use Tachiyomi?

Did you also want to download your favorite manga locally and maybe read them on your Kindle?

It is really inconvenient that the division is done in chapters and not in volumes when you download them from the application ...

Well, with this tool you will just have to insert all the chapters folders, and I will make a single volume to upload to Kindle Comic Converter.


> ## *Prerequisites*
>
> - This Tool **Requires** [Node.js](https://nodejs.org/en/)
> - If You Want to Clone the Repository, You will also need [Git](https://git-scm.com/downloads)
> - After the conversion you may want to use [Kindle Comic Converter](https://kcc.iosphe.re/)

### Clone the Repo and Install Dependencies:
```bash
git clone https://github.com/Nando784/chapter-converter.git
npm i
```
### For **Very** Lazy People (Alternative to GIT):
If you are so lazy that you don't want to download GIT:
> - Blame Yourself for your laziness
> - Download the [ZIP](https://github.com/Nando784/chapter-converter/archive/refs/heads/main.zip) and Extract it.
> - Open the CMD or PowerShell or WindowsTerminal or What You Want and Run "npm install" in the Extracted Folder.

## Usage:
> - Make a Dir Called "Parse" in the Same Folder as the "Converti.js" File
> - Put All the Chapters Folders in the "Parse" Folder
> - Run : ```node Converti.js```
> - Wait for the Magic to Happen


Before running the script, make sure the folders are arranged in a way like this:

```bash
    ├───node_modules
    ├───Parse
    │   ├───Chapter_1
    │   │   ├───001.jpg
    │   │   ├───002.jpg
    │   │   ├───003.jpg
    │   │   ├───004.jpg
    │   │   ├───005.jpg
    │   │
    │   ├───Chapter_2
    │   │   ├───001.jpg
    │   │   ├───002.jpg
    │   │   ├───003.jpg
    │   │   ├───004.jpg
    │   │   ├───005.jpg
    │   │
    └───Converti.js
```

After The Magic, you will see the ```Output``` Dir With All the JPG Files in it.

You will put that dir in the Kindle Comic Converter and it will make the other magic for you.

## Extra:
> - Will I make improvements to the script?
> - Will I Make some UI and allow to Launch it with an Interface instead of Node?
> - Will I make sure that I can convert multiple volumes at the same time?
> - ### I don't know. Perhaps. One day. If I have the desire and time.
