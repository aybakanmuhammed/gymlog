const https = require('https');

async function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

(async () => {
    let exercises = [];
    for (let i = 1; i <= 11; i++) {
        let url = `https://www.macfit.com/blog/egzersiz-kutuphanesi/page/${i}`;
        try {
            let html = await fetchHtml(url);
            let regex = /href="https:\/\/www\.macfit\.com\/blog\/egzersiz-kutuphanesi\/([a-z-]+)\/([a-z-]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                let cat = match[1];
                let slug = match[2];
                if (slug !== 'page' && cat !== 'page') {
                    let name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                    exercises.push({ category: cat, name: name });
                }
            }
        } catch(e) {
            console.error('Error on page ' + i, e);
        }
    }
    
    // Unique list by name
    let uniqueMap = {};
    exercises.forEach(e => {
        uniqueMap[e.name] = e;
    });
    console.log(JSON.stringify(Object.values(uniqueMap), null, 2));
})();
