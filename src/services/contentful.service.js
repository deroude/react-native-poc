import {createClient} from 'contentful/dist/contentful.browser.min.js'

var client = createClient({
    space: 'pkc9ejzq5fl6',
    accessToken: '2b8904ea3dfdb590c1a7d5a269877ca7399c1eee954cc7d2698977bda1ffae53'
});

const mapToData = (ctf) => ctf.items.map(it => it.fields);

export const getAllThemes = client.getEntries({ content_type: "investmentTheme", include: 5 }).then(mapToData);
