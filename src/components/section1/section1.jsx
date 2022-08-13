import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import jasmine from "../../images/img-1.svg";
import "./section1.css";


function Section1() {
    return (
        <div class="box">
            <div class="align-text">
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={6}> 
                        <h1 class="heading-title"> Take learning <br/> <span class="underline-blue"> to the next level.</span> </h1>
                        <h1 class="heading-subtitle"> Elevate your teaching with Pencil. </h1>
                        <Button variant="contained" color="primary">Try it Now!</Button>
                        <Button variant="outlined" color="primary">Pricing </Button>
                    </Grid>
                    <Grid item xs={0} sm={12} md={6} class="hidden-mobile">
                        <img src={jasmine} alt="applaud pic" />
                    </Grid>
                </Grid>
            </div>
        </div>  
    )
}

export default Section1;