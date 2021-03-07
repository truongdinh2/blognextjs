import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';
export default function ListBlog({ data }: any) {
    // const router = useRouter()
    const router = useRouter()
    const { fields } = data;
    const { slug } = fields;
    const { catego } = fields;
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();
    const url = fields.image.fields.file.url;
    return (
        <div className={styles.card}>

            <Card className={classes.root} >
                <Link href="/[theloai]/[slug]" as={`/${catego}/${slug}`} >
                    <a>
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
                                    {fields.demo.slice(0, 120) + '...'}
                                </Typography>
                                <i>
                                    {moment(fields.date).startOf('day').fromNow()}
                                </i>
                            </CardContent>
                        </CardActionArea>
                    </a>
                </Link>
            </Card>
        </div>
    )
}
