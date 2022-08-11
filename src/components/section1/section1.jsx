import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import jasmine from "../../images/img-1.svg";
import notepad from "../../images/img-2.png";
import pic2 from "../../images/img-3.svg";
import random from "../../images/collab-icon.svg";
import pic3 from "../../images/img-4.svg";
import pic4 from "../../images/bg-collab.svg";
import vc from "../../images/vc-icon.svg";
import pic5 from "../../images/img-5.png";
import pic6 from "../../images/bg-vc.svg";
import pic7 from "../../images/img-6.svg";
import pic8 from "../../images/bg-leader.svg";
import pic9 from "../../images/img-7.png";
import pic10 from "../../images/bg-autosave.svg";
import leader from "../../images/leader-icon.svg";
import saveic from "../../images/autosave-icon.svg";
import "./section1.css";


function Section1() {
    return (
        <div class="box">
            <div class="home">
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}> 
                        <h1 class="heading-title"> Take learning <br/> <span class="underline-blue"> to the next level.</span> </h1>
                        <h1 class="heading-subtitle"> Elevate your teaching with Pencil. </h1>
                        <Button variant="contained" color="primary">Try it Now!</Button>
                        <Button variant="outlined" color="primary">Pricing </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={jasmine} alt="applaud pic" />
                    </Grid>
                </Grid>
            </div>
                <img src={notepad} alt="notepad" class="img-cls"/>
            <div class="home2">
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}> 
                        <h1 class="heading-title2">  <span class="text-strikethrough"> Passive watching  </span> <br/> <span class="blue-text"> Active Learning! </span> </h1>
                        <h1 class="heading-subtitle"> Why use multiple apps when you can use just one? Say goodbye to distractions, and say hello to Pencil Spaces. </h1>
                        <Button variant="contained" color="primary" lg>Try it Now!</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={pic2} alt="applaud pic" class="pic2-cls"/>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}> 
                        <div class="alignment-prop">
                            <img src={random} alt="random sign" class="collab-icon-cls"/>
                            <h1 class="heading-title3">  <span class="text-purple"> Collaborative </span> Whiteboard</h1>
                            <h1 class="heading-subtitle2"> Collaborate in a ‘Space’, a digital classroom where teachers and students can engage in a lively learning environment. </h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={pic3} alt="applaud pic" class="pic3-cls"/>
                        <img src={pic4} alt="bg" class="bg-svg"/>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img src={pic5} alt="applaud pic" class="pic5-cls"/>
                        <img src={pic6} alt="bg" class="bg-svg-2"/>
                    </Grid>
                    <Grid item xs={6}> 
                        <div class="alignment-prop2">
                            <img src={vc} alt="random sign" class="collab-icon-cls"/>
                            <h1 class="heading-title4">  Video Calling</h1>
                            <h1 class="heading-subtitle2">Teach however you like with integrated video calling, for 1-on-1 sessions or larger-sized group classes.</h1>
                        </div>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}> 
                        <div class="alignment-prop3">
                            <img src={leader} alt="random sign" class="collab-icon-cls"/>
                            <h1 class="heading-title4">  Leader Mode </h1>
                            <h1 class="heading-subtitle2"> “Summon” students to the same view to gather the whole class’ attention. </h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div class="image-align">
                            <img src={pic7} alt="applaud pic" class="pic7-cls"/>
                            <img src={pic8} alt="bg" class="bg-svg-3"/>
                        </div>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img src={pic9} alt="applaud pic" class="pic5-cls"/>
                        <img src={pic10} alt="bg" class="bg-svg-2"/>
                    </Grid>
                    <Grid item xs={6}> 
                        <div class="alignment-prop2">
                            <img src={saveic} alt="random sign" class="collab-icon-cls"/>
                            <h1 class="heading-title5"> Automatic Saving</h1>
                            <h1 class="heading-subtitle2">Return to your Space whenever, and pick-up from where you left off! Spaces are saved, just like your documents.</h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Section1;