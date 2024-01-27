import React from "react";

export default function Contact() {
    return (
    <div class="container-fluid bg-black contact">
        <div class="row">
            <div class="col left">
                <h2>Contact:</h2>
                <p>~$ cd /Contact</p>
                <p>~$ ./socialMedia.sh</p>
                <p id="social">socialMedia</p>
                <ul>
                    <li>1. <a href="https://www.instagram.com/_lexx_abb_/">instagram</a></li>
                    <li>2. <a href="https://www.linkedin.com/in/lucasabello/">linkedIn</a></li>
                    <li>3. <a href="https://github.com/lexO-dat">github</a></li>
                </ul>
                <p>~$ |</p>
            </div>
            <div class="col-6 right">
                <p>Do yo need to contact me via mail? </p>
                <p>~$ cat mail.txt</p>
                <p>lucas.abello@mail.udp.cl</p>
            </div>
        </div>
    </div>
    )
}