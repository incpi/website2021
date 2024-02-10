function init_id() {
    document.body.innerHTML = `<nav class="flex"></nav>
    <div id="loader">
    </div>
    <div id="c-c">
        <section id="index" class="flex fdc" style="display: flex;"></section>
        <section id="home" class="flex fdc" style="display: flex;"></section>
        <section id="Project" class="flex fdc"></section>
        <section id="contact" class="flex"></section>
        <section id="about" class="flex fdc"></section>
        <section id="tool" class="flex fdc" style="display: flex;"></section>
    </div>
    <footer id="footer"></footer>`
}
function loader() {
    document.querySelector('#loader').innerHTML = `<div class="flex jcc">
    <svg id="B1" viewBox="0 0 142.4 308.4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 71.2,154.2 142.4,30.9 124.6,0 H 89 L 0,154.2 89,308.4 h 35.6 l 17.8,-30.8 z" />
    </svg>
    <svg id="B2" viewBox="0 0 356.1 555" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M 338.3,555.1 356.1,524.3 213.7,277.5 356.1,30.8 338.3,0 H 17.8 L 0,30.8 l 89,154 h 35.6 L 142.4,154 106.8,92.4 124.6,61.6 h 106.8 l 17.8,30.8 -106.8,185 106.8,185 -17.8,30.8 H 124.6 L 106.8,462.4 142.4,400.8 124.6,370 H 89 L 0,524.2 17.8,555 Z" />
    </svg>
    <svg id="B3" viewBox="0 0 142.4 308.2" xmlns="http://www.w3.org/2000/svg">
        <path d="M 53.4,0 H 17.8 L 0,30.8 71.2,154.1 0,277.4 17.8,308.2 h 35.6 l 89,-154.2 z" />
    </svg>
</div>
<p>OmkaR</p><br><span> .... STILL IN DEVELOPMENT .... </span>
<div id="consentc" style="display: none;color:var(--dred)">This website uses <b>local storage & simillar</b>
    technologies, which are a way of storing data on your device without
    sending it to a server. This allows us to improve your browsing experience by remembering your
    preferences and showing you relevant recommendations based on your interests. Your data is safe and
    secure, as it is only stored in your browser and not accessible to us or anyone else. No cookies are
    added in this release, which means we do not collect any information about your online activity or
    behavior. <br> <button id="btn">I Agree</button>
</div>
<div id="btnhome">
    <div class="color"></div>
</div>
`
}
function nav_gen() {
    const navdata = `
    <div class="flex left2" onclick='show("home","_home_link")'>
            <svg viewBox="0 0 661 575" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 490.7,565.1 508.5,534.3 366.1,287.5 508.5,40.8 490.7,10 170.2,10 l -17.8,30.8 89,154 35.6,-0 17.8,-30.8 -35.6,-61.6 17.8,-30.8 h 106.8 l 17.8,30.8 -106.8,185 106.8,185 -17.8,30.8 H 277.0 l -17.8,-30.8 35.6,-61.6 -17.8,-30.8 -35.600,-0 -89,154.2 17.8,30.8 z" />
                <path d="m 561.9,133.3 h -35.6 l -17.8,30.8 71.2,123.3 -71.2,123.3 17.8,30.8 h 35.6 l 89,-154.2 z" />
                <path d="M 81.2,287.5 152.4,164.2 134.6,133.3 H 99 L 10,287.5 99,441.7 h 35.6 l 17.8,-30.8 z" />
            </svg>
            <span id="_home">OmkaR</span>
        </div>
        <div class="flex jsb end">
            <div id="h_nav">
                <span></span>
                <a  onclick='show("index","_index_link")' class="links  active" id="_index_link">Home</a>
                <a  onclick='show("home","_home_link")' class="links  active" id="_home_link">Tool</a>
                <a  onclick='show("Project","_timeline")' class="links" id="_timeline">Project</a>
                <a  onclick='show("contact","_contact")' class="links" id="_contact">Contact</a>
                <a  onclick='show("about","_abt_link")' class="links" id="_abt_link">About</a>
                <a  onclick='show("tool","_tool_link")' class="links" id="_tool_link">settings</a>
                <span></span>
            </div>
            <button title="Dark/Light Mode" type="button" class="act" id="dark_link">
                <svg id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
                </svg>
                <svg id="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
            </button>
        </div>
        <div class="flex end" id="end">
            <button id="open" type="button" title="menu_open" onclick='openNav("open","close","0%")' class="act id3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
            </button>
            <button id="close" type="button" title="menu_close" onclick='openNav("close","open","100%")'
                class="act id3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
        </div>
    `
    document.querySelector('nav').innerHTML = navdata
}
function index_gen() {
    indexdata = `<div class="flex fdc">
    <h1>Below Open-Projects</h1>
    <div class="card">
    <h2>Swift-Helper chrome-extension</h2>
        <p>Above link leads to repo-page of extension where I DEVELOPED extension for Teachers who uses swiftchat bots.</p>
        <a href="https://incpi.github.io/Swift-Helper-browser-extension/" class="btn">Read More</a>
    </div>
    <div class="card">
    <h2>Trace Modifer CPI Helper Plugin</h2>
        <p>Above link leads to page which gives insite about this Plugin.</p>
        <a href="https://incpi.github.io/cpihelper-plugin/" class="btn">Read More</a>
    </div>
    <div class="card">
        <h2>UI - redesign of extension of "CPI-Helper-Chrome-Extension"</h2>
        <p>Above link leads to repo of extension where I redesigned the UI and Got it merged.</p>
        <a href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension" class="btn">Read More</a>
    </div>
    </div>
    <br>
Need for? please goto diffrent tabs. Thank you.
    `
    document.querySelector('#index').innerHTML = indexdata
}
function home_gen() {
    homedata = `
    <input id="path" type="search" placeholder="Enter your Xpath" class="toolbutton">
            <div class="perline">
                <button class="toolbutton" onclick="xmlall()">Submit</button>
                <input style="display: none;" accept="svg,xml/*,.xml,.body" type="file" name="myfile" id="myfile">
                <label id="myfile_btn" for="myfile">Upload File</label>
                <button class="toolbutton" id="Pretify_btn" onclick="premAll();">Pretty All</button>
            </div>
            <div class="perline">
                <span id="xinput" style="color: var(--dgreen);">X-Path Valid</span>
                <span id="Time" style="color: var(--dgreen);">File Valid</span>
                <span id="xmlput" style="color: var(--dgreen);">XML Valid</span>
            </div>
            <div class="perline">
                <span class="label">Input</span>
                <span class="label clock">Time</span>
                <span class="label">Output</span>
            </div>
            <span style="display: none;">Note: <i style="color:var(--dred)">Output tags will be in.
                    <strong>Lower Case </strong>
                    due in web-app.</i></span>
            <div class="editor">
                <textarea class="scroll" data-role="none" id="input" placeholder="Enter your XML data here"
                    style="width: 100%;"></textarea>
                <textarea disabled="" class="scroll" id="output" style="width: 100%"></textarea>
            </div>`
    document.querySelector('#home').innerHTML = homedata
}
function Project_gen() {
    Projectdata = `<div id="clcode" class="flex">
                        Filter :
                        <span class="active Cube" id="Cube" onclick="time('Cube')">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
                            </svg>
                            <p>Cube</p>
                        </span>
                        <span class="active Code" id="Code" onclick="time('Code')">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path
                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                            </svg>
                            <p>Code</p>
                        </span>
                        <span class="active Mech" id="Mech" onclick="time('Mech')">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path
                                    d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
                            </svg>
                            <p>Mech</p>
                        </span>
                        <div onclick="expand('.content','0')" class="expand" atr="e">
                            Expand All
                        </div>
                        </div>
                        <div class="timeline" id="time1">
                        <div class="container left">
                            <div class="content Cube">
                                <div class="phead" onclick="expand('.content',0)">
                                    <div>2021-22</div>
                                    <div>Material</div>
                                    <div>Cube</div>
                                </div>
                                <p>To learn about more realistic renders, started making procedural materials which can be
                                    edited easily. also learned about UV-maps,textures.</p>
                            </div>
                        </div>
                        <div class="container right">
                            <div class="content Code">
                                <div class="phead" onclick="expand('.content',1)">
                                    <div>2021-22</div>
                                    <div>Discord YT bot</div>
                                    <div>Code</div>
                                </div>
                                <p>To explore more, in python programming i started making discord bot.This bot can use scraping
                                    as well as offical API depening upon laws.
                                    I made using 2 different versions (1st: discord 2.0 python lib, 2nd: nextcord python lib).
                                    This project can not use RDBMS. we had to go with NO-SQL DB only.
                                </p>
                            </div>
                        </div>
                        <div class="container left">
                            <div class="content Mech">
                                <div class="phead" onclick="expand('.content',2)">
                                    <div>2020-22</div>
                                    <div>Virtual Study</div>
                                    <div>Mech</div>
                                </div>
                                <p> At this time i know most of modeling stuff (as Mech. engineer). To upskill my knowledege i
                                    started doing virtual testing in SolidWorks for motion and FEA study due to COVID-19.</p>
                            </div>
                        </div>
                        <div class="container right">
                            <div class="content  Cube">
                                <div class="phead" onclick="expand('.content',3)">
                                    <div>2019-20</div>
                                    <div>3d 1st project</div>
                                    <div>Cube</div>
                                </div>
                                <p>This is my 1st project in blender. which i explored as my flow simulation software. but
                                    shortly after 1st simulation. learned 3d blender basic modeling started with lowpoly and
                                    then midpoly mesh Creation</p>
                            </div>
                        </div>
                        <div class="container left">
                            <div class="content Code">
                                <div class="phead" onclick="expand('.content',4)">
                                    <div>2018-21</div>
                                    <div>Variable engine</div>
                                    <div>Mech</div>
                                </div>
                                <p>Analysis project, what mathematical challenges as well as mechanical challenages faced while
                                    developing. which gives complete report based on fact that we achived.</p>
                            </div>
                        </div>
                        <div class="container right">
                            <div class="content Mech">
                                <div class="phead" onclick="expand('.content',5)">
                                    <div>2017</div>
                                    <div>First Project</div>
                                    <div>Mech</div>
                                </div>
                                <p>
                                    Started Mechanical, First Project i started.<wbr>
                                    start learning about Mechanical Softwares such as SW,Creo,Fusion 360 etc.
                                </p>
                            </div>
                        </div>
                        </div>`;
    document.querySelector('#Project').innerHTML = Projectdata
}
function contact_gen() {
    contactdata = `
<a href="https://github.com/incpi">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <p>Github</p>
                <span>Code-related</span>
            </a>
            <a href="https://discord.gg/DjYs9CD3Q6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
                <p>Discord</p>
                <span>try Server-Bot</span>
            </a>
            <a href="https://www.instagram.com/om_is_wave/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <p>Instagram</p>
                <span>3d renders</span>
            </a>
            <a href="mailto:omk14p@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                </svg>
                <p>Mail-Box</p>
                <span>Connect by mail</span>
            </a>
            <a href="javascript:">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576">
                    <path
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
                <p>Youtube</p>
                <span>Not started yet...</span>
            </a>
            <a href="https://www.linkedin.com/in/omiswave/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <p>linkedin</p>
                <span>Corporate - releted</span>
            </a>
`; document.querySelector('#contact').innerHTML = contactdata
}
function about_gen() {
    aboutdata = `
<span>
                <p>My name is Omkar and I am a mechanical engineer with a full-time consulting role in the IT sector.
                </p>
                <p>I have participated in several design process projects where I performed analysis and used various 3D
                    programs to enhance my skills and knowledge in this field.</p>
                <p> I have a high level of proficiency in 3D software and C programming, as well as other coding
                    languages
                    that I have learned during the Covid-19 pandemic, such as Python, Groovy, JS, HTML, CSS and some
                    RDBMS.</p>
                <p>I am passionate about exploring new technologies and applying them to solve real-world problems.</p>
            </span>
            <div id="list">
                <h1>Skills</h1>
                <span onclick="expand('.slist','1')" class="expand" atr="e">
                    Expand All
                </span><br>
                <div>
                    <div class="slist" onclick="expand('.slist',0)">
                        <div class="list">IT</div>
                        <ul>
                            <li>Coding Languages
                                <ul>
                                    <li>Python</li>
                                    <li>Groovy</li>
                                    <li>HTML, CSS, JS</li>
                                    <li>SQL</li>
                                </ul>
                            </li>
                            <li>SAP Cloud platform Integration (CPI)</li>
                            <li>SAP Process Orchestration (PO)</li>
                            <li>Microsoft
                                <ul>
                                    <li>MS Excel</li>
                                    <li>MS SharePoint</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',1)">
                        <div class="list">3D Creation</div>
                        <ul>
                            <li>Blender
                                <ul>
                                    <li>Hard-Surf modeling</li>
                                    <li>Material Creation (procedural)</li>
                                    <li>Rigging</li>
                                    <li>Texturing</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',2)">
                        <div class="list">Mechanical</div>
                        <ul>
                            <li>Solid works</li>
                            <li>Creo</li>
                            <li>Autodesk fusion 360</li>
                            <li>MATLAB,sci-lab</li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',3)">
                        <div class="list"> FEA </div>
                        <ul>
                            <li>Motion study in SolidWorks</li>
                            <li>Different study
                                <ul>
                                    <li>SolidWorks</li>
                                    <li>Autodesk fusion 360</li>
                                    <li>Ansys</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="slist" onclick="expand('.slist',4)">
                        <div class="list">Hobbies Softwares</div>
                        <ul>
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe PhotoShop</li>
                        </ul>
                    </div>
                </div>
            </div>`; document.querySelector('#about').innerHTML = aboutdata
}
function tool_gen() {
    tooldata = `
<div class="perline editor">
                <label for="dark">Color</label>
                <input class="input-color-picker" type="color" data-id="dark" id="dark" value="#0a1e32">
                <label for="mdark">Hover Color</label>
                <input class="input-color-picker" type="color" data-id="mdark" id="mdark" value="#195a82">
                <label for="light">Background</label>
                <input class="input-color-picker" type="color" data-id="light" id="light" value="#fafafa">
                <label for="mlight">Hover Backgound</label>
                <input class="input-color-picker" type="color" data-id="mlight" id="mlight" value="#7dc8e6">
                <label for="dred">Error Color</label>
                <input class="input-color-picker" type="color" data-id="dred" id="dred" value="#ff0000">
                <label for="dgreen">Valid Color</label>
                <input class="input-color-picker" type="color" data-id="dgreen" id="dgreen" value="#78ff78">
            </div>
            <button style="margin-block:20px ;" class="toolbutton" onclick="resetSave()" type="submit">Reset</button>`;

    document.querySelector('#tool').innerHTML = tooldata
}
function Footer() {
    footer = `<div class="flex jcc">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z" />
            </svg> Copyright : <a href="https://incpi.github.io">incpi.github.io</a>
        </div>`
    document.querySelector('#footer').innerHTML = footer
}
function init() {
    init_id(); loader(); nav_gen(); index_gen(); home_gen(); Project_gen(); contact_gen(); about_gen(); tool_gen(); Footer();
}
init()