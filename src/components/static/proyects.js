import React from "react";

export default function Proyects() {
    return (
    <div class="container-fluid bg-black proyects">
        <div class="row">
            <div class="col left">
                <h2>Projects:</h2>
                <p>~$ cd /Projects</p>
                <p>~$ ls </p>
                <p> <a href="https://github.com/lexO-dat/JsDonnut">JsDonnut/</a>    <a href="https://github.com/lexO-dat/Recipes-Blog">Recipes-Blog/</a>
                <a href="https://github.com/lexO-dat/FlowFieldsProject">FlowFields/</a>  <a href="https://github.com/lexO-dat/proyecto_db">TwitterAlienApi/</a>
                README.txt
                </p>
                <p>~$ cat README.txt </p>
                <p>All the projects are in my github: <a href="https://github.com/lexO-dat">lexO-dat</a> where you can see all the source code.</p>
            </div>
            <div class="col-3 right">
            </div>
        </div>

        <div class="row">
            <div class="col left">
                <p>~$ cd JsDonnut/</p>
                <p>~$ cat README.txt</p>
                <p>
                    This project is my version of the famous animation of the spinning donut, to achieve it I based on all the information that was in the blog of <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">a1k0n</a> where he explained the mathematics behind this animation, and understanding that was only pass the ideas to javascript and run the code. One of the parts that cost me the most were the lighting simulation using characters and the Optimization with Z-Buffering (I think the optimization was the most complex part to achieve).</p>

                <p>If you want to see the code go to the github repository here: <a href="https://github.com/lexO-dat/JsDonnut">JsDonnutGit</a></p>
            </div>
            <div class="col right">
                <img class="image" src="/img/20240115_015348.gif" alt="" />
            </div>
        </div>
        <p class="separator">-------------------------------------------------</p>
        <p>~$ cd ..</p>

            <div class="row">
                <div class="col left">
                    <p>~$ cd FlowFields/</p>
                    <p>~$ cat README.txt</p>
                    <p>
                        This project, done in JavaScript, focuses on animating particles following a vector field on an HTML5 canvas. The main complexity lies in dynamically generating the vector field and handling particles with a motion history achieved by an algorithm that detects the particle's position and the angle of the vector at that position. The distinctive feature that I am working to achieve is real-time interactivity, allowing live adjustments of parameters such as zoom and vector field curve during execution, as well as being an importable React module.
                    </p>
                    <p>If you want to see the code, go to the GitHub repository here: <a href="https://github.com/lexO-dat/FlowFieldsProject">FlowFieldsGit</a></p>
                </div>
                <div class="col right">
                    <img class="flow" src="/img/20240115_140135.gif" alt="" />
                </div>
            </div>

        <p class="separator">------------------------------------------------</p>
    </div>
    )
}