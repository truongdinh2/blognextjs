import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';
export default function ListBlog({ data }: any) {
    const { fields } = data;
    const { slug } = fields;
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();
    const url = fields.image.fields.file.url;
    return (
        <div className={styles.card}>
            <Card className={classes.root}>
                <Link href="/[slug]" as={`/${slug}`} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={fields.title}
                            height="150"
                            width="100"
                            image={url}
                            title={fields.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {fields.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {fields.demo}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    )
}
