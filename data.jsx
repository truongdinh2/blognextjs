const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});
export const getStaticProps = async (context) => {
    const params = context.params
    let data = await client.getEntries({
        content_type: 'category',
        'fields.slug': params?.slug
    });
    return {
        props: {
            artical: data.items,
        }
    }
}