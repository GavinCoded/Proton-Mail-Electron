# proton mail electron  
electron app for proton mail.

## why this was made  
proton requires a subscription for a desktop client, which is completely ridiculous since it’s basically just an electron app that loads proton.me.  

i made this for free so i can read my emails without having to open a web browser.

## tested & made on  
fedora linux 42 workstation edition

## installation  
download the latest release from:  
**https://github.com/GavinCoded/Proton-Mail-Electron/releases**

once downloaded:
1. extract the folder
2. move it somewhere permanent (like your home directory):  
   example: `~/proton-mail`
3. open a terminal inside the extracted folder
4. run:

```bash
chmod +x install.sh
./install.sh
```

this will:
- create a desktop launcher so you can find proton mail in your app menu
- create a terminal shortcut so you can run `proton-mail` from anywhere

## uninstallation  
to remove everything:

```bash
./uninstall.sh
```

this will:
- remove the app menu launcher
- remove the terminal launch symlink

## manual build (if you want to build from source)

1. clone the repo

```bash
git clone https://github.com/GavinCoded/Proton-Mail-Electron.git
cd Proton-Mail-Electron
```

2. install dependencies

```bash
npm install
```

3. run the app

```bash
npm start
```

feel free to fork, modify, or improve. this is just a minimal electron app around proton mail.
