import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import "./main.css";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: '5%'

    },
    media: {
        height: '40vh',
    },
});
const Product = (props) => {
    const [product, setproduct] = useState(props.prod);
    const classes = useStyles();
    return (
            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={product.image}
                    title={product.title}

                />
                <CardContent className={classes.cardstyle}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p" style={{height: '26vh'}}>
              {product.description}
            </Typography> */}
                    <br />
                    <Typography variant="h5" align='center' color="textPrimary" >
                        {product.price}&nbsp;₹
                    </Typography>
                </CardContent>

                <CardActions >

                    <Button size="small" color="primary" >
                        View Item
                    </Button>

                    <Button size="small" color="primary" >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
    )
};

export default Product;