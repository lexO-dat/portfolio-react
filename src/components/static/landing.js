import React from "react";

export default function Landing() {
    return (
        //landing
        //structure for the centering of the page and divide it in two
        <div class="container-fluid landing bg-black">
            <div class="row">
                <div class="col">
                    <div id="p5CanvasContainer"></div>
                    <div id="overlay-text">
                    <span>Hi, i'm LUCAS.</span>
                    </div>
                    <div id="overlay-text-two">
                    <span>Welcome to my portfolio.</span>
                    </div>
                    <div id="overlay-text-three">
                    <span>if you want to see the terminal mode press the top right button :)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
