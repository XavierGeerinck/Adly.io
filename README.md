# WebRTCAdServer
## Installation
1. Run `vagrant up`
2. Run ./enter.sh node_app
3. Run `sudo apt-get -y install libncurses5-dev libssl-dev libexpat1-dev python git pkg-config libnss3-dev libudev-dev libdrm-dev libgconf2-dev libgcrypt11-dev libasound2-dev libpulse-dev libjpeg62-dev libxv-dev libgtk2.0-dev libpci-dev libxtst-dev`
4. Navigate to `cd /var/www/node_app` and run `npm install`

## FAQ
### How to include the scripts
The scripts can be included by adding inline JS or a custom folder LOCAL (so no CDN's!). (The reason we can't use CDN's is because these are HTTP requests and can be blocked by adblocker)
