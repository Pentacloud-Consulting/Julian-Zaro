import fs from 'fs';
import path from 'path';
import https from 'https';

const urls = [
  "https://www.instagram.com/p/DbAzSpnTUhc/",
  "https://www.instagram.com/p/DbaDVVGDN0J/",
  "https://www.instagram.com/p/DbB4eWRTmj8/",
  "https://www.instagram.com/p/DbPwA6th_n8/",
  "https://www.instagram.com/p/DbGfH9izrK8/",
  "https://www.instagram.com/p/Da0MeCTyKQx/"
];

async function fetchMicrolink(url) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.microlink.io/?url=${encodeURIComponent(url)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
         try {
             resolve(JSON.parse(data));
         } catch(e) { reject(e) }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const dir = path.join(process.cwd(), 'public', 'thumbnails');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  
  for (let i = 0; i < urls.length; i++) {
    try {
      const data = await fetchMicrolink(urls[i]);
      if (data && data.data && data.data.image && data.data.image.url) {
         const imgUrl = data.data.image.url;
         console.log(`[${i+1}] Found image: ${urls[i]}`);
         await downloadImage(imgUrl, path.join(dir, `thumb_${i+1}.jpg`));
      } else {
         console.log(`[${i+1}] No image found`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

run();
