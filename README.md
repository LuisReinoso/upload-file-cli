An Unofficial [file.io](file.io) cli

# Instalation
```console
npm install -g upload-file-cli
```

# Usage

## File
To upload a file provide path with ```-p```
```console
upload-file-cli -p /home/luis/foo.txt
```

## Folder
To upload a folder provide path with -p. Folder will be zipped.
```console
upload-file-cli -p /home/luis/data/
```

## Expiration
Expiration day for **default is 14 days**.
If you want another use ```-e```
```console
upload-file-cli -p /home/luis/data/ -e 5
```

- **days**: just send a number: ```5```
- **weeks**: send a number follow w: ```5w```
- **months**: send a number follow m: ```2m```
- **years**: send a number follow y: ```1y```

# Notes
* this service is provide by [file.io](file.io) no apiKey required.
* this project is an unofficial cli for [file.io](file.io).
* before upload any file/folder please read: Terms of Service and Privacy policy from [file.io](file.io)

# Licence
Luis Reinoso [MIT LICENCE](LICENCE)