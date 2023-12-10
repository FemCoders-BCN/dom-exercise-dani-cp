import {describe, expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import {changeToRed, changeToGray, changeToBlack} from '../src/js/app';

describe('APP',()=>{
    let dom;

    let imgMock;
    let buttonMock;
    let tagMock;

    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
          resources: "usable",
          runScripts: "dangerously",
        });

        imgMock = document.createElement("div");
        imgMock.classList.add("product-image");
        document.body.appendChild(imgMock);

        buttonMock = document.createElement("button");
        buttonMock.setAttribute("id", "button");
        document.body.appendChild(buttonMock);

        tagMock = document.createElement("h3");
        tagMock.classList.add("tag");
        document.body.appendChild(tagMock);
      });

      it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        console.log(link.href);
        expect(link.href).toMatch(/\/src\/css\/style.css$/);
      });

      it("should render the script in html", () => {
        const document = dom.window.document;
        const script = document.querySelector("script");
        expect(script).not.toBeNull();
      });

      it("should change the color of the elements to red", async () => {
        buttonMock.style.backgroundColor = "rgb(0, 0, 0)";
        imgMock.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
        tagMock.style.backgroundColor = "rgb(0, 0, 0)";

        changeToRed();
        expect(buttonMock.style.backgroundColor).toBe("red");
        expect(imgMock.style.backgroundImage).toBe("url(../../public/img/redcar.jpg)");
        expect(tagMock.style.backgroundColor).toBe("red");
      });

      it("should change the color of the elements to gray", async () => {
        buttonMock.style.backgroundColor = "rgb(0, 0, 0)";
        imgMock.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
        tagMock.style.backgroundColor = "rgb(0, 0, 0)";

        changeToGray();
        expect(buttonMock.style.backgroundColor).toBe("gray");
        expect(imgMock.style.backgroundImage).toBe("url(../../public/img/graycar.jpg)");
        expect(tagMock.style.backgroundColor).toBe("gray");
      });

      it("should change the color of the elements to black", async () => {
        buttonMock.style.backgroundColor = "rgb(0, 0, 0)";
        imgMock.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
        tagMock.style.backgroundColor = "rgb(0, 0, 0)";

        changeToBlack();
        expect(buttonMock.style.backgroundColor).toBe("black");
        expect(imgMock.style.backgroundImage).toBe("url(../../public/img/blackcar.jpg)");
        expect(tagMock.style.backgroundColor).toBe("black");
      });
});

