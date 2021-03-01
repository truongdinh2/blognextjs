import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from 'react';
export default function ListBlog({data}:any) {
    const {fields} = data;
    const {slug} = fields;
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();
    console.log(fields.image,'iii',fields);
    const url= fields.image.fields.file.url
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={fields.title}
                    height="100%"
                    width="100%"
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
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Link href="/[slug]" as={`/${slug}`} >
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
                {/* <a></a> */}
                {/* <Image src={'https://'+url} height="200" width="200"/> */}
                {/* <div>
                    {documentToReactComponents(fields.content,
                        {
                            renderNode: {
                                [BLOCKS.EMBEDDED_ASSET]: (node: any) =>
                                (<Image
                                    src={"https:" + node.data.target.fields.file.url}
                                    width={500}
                                    height={400} />)
                            }
                        }
                    )}
                </div> */}
        </div>
    )
}
