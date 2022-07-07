import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About () {
    return(
        <section classname="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} classname="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;