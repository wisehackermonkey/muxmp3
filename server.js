/*
youtube music downloader
by wisemonkey
7/12/17  
to start
run 
npm install
npm start 
or 
node server.js

createive comons lisence

cred is due
//https://github.com/fent/node-ytdl
//https://github.com/fent/node-ytdl-core#ytdlurl-options
*/

const fs = require('fs');
const ytdl = require('ytdl-core');
const url = "https://www.youtube.com/watch?v=tUqvPJ3cbUQ"; //https://www.youtube.com/watch?v=wXw6znXPfy4';// rick roll 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 


ytdl.getInfo(url, {}, function(err, info){
	console.log(info.title); 
	var title = info.title;
	ytdl(url, { filter: "audioonly" })
  .pipe(fs.createWriteStream(title + '.mp3'));
  console.log("done!");
});

console.log("Downloader is running!!");


