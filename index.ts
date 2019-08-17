#!/usr/bin/env ts-node

import * as commander from 'commander';
import fs from 'fs';
import path from 'path';
import fetch, { RequestInit } from 'node-fetch';
import FormData from 'form-data';
const zipper = require("zip-local");
const program = new commander.Command();

program
    .version('1.0.0')
    .option('-p, --path <path>', 'path of file or directory')
    .option('-e, --expires [string]', 'number follow d for days, w for weeks, m for months, y for years')

program.parse(process.argv);

if (program['path']) {

    if (fs.existsSync(program['path'])) {
        const stats = fs.statSync(program['path']);
        const formData = new FormData();

        let bufferContent: any = undefined;
        if (stats.isDirectory()) {
            const folderPath = program['path'].split(path.sep);
            const folderName = folderPath[folderPath.length - 2];
            bufferContent = zipper.sync.zip(program['path']).compress().memory();
            formData.append('file', bufferContent, {
                filename: folderName + '.zip',
                contentType: 'application/zip'
            });
        } else {
            bufferContent = fs.createReadStream(program['path']);
            formData.append('file', bufferContent);
        }

        let params: RequestInit = {
            'method': 'POST',
            'body': formData
        }
        
        let url = 'https://file.io/' + (program['expires'] ? ('?expires=' + program['expires']) : '');
        
        fetch(url, params)
            .then(res => res.json())
            .then(data => {
                console.log(data.link);
            })
            .catch(console.error);
    } else {
        console.log('path not exist', program['path'])
    }
} else {
    console.log('no path provided');
}