function Ad(title, url, data) {
    this.viewCount = 0;
    this.clicks = 0;
    this.data = data;
    this.title = title;
    this.url = url;
};

module.exports = Ad;
