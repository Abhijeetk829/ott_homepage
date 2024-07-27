const ottList = [
    {
        "name": 'netflix',
        "url": "https://www.netflix.com",
        "logo": "netflix.png",
        "color": "#E50914",
        "tag": "india"
    },
    {
        "name": 'prime video',
        "url": "https://www.primevideo.com",
        "logo": "primevideo.png",
        "color": "#00A8E1",
        "tag": "india"
    },
    {
        "name": 'disney + hotstar',
        "url": "https://www.hotstar.com",
        "logo": "hotstar.png",
        "color": "#00C7EC",
        "tag": "india"
    },
    {
        "name": 'mx player',
        "url": "https://www.mxplayer.in",
        "logo": "mxplayer.png",
        "color": "#3B8BEF",
        "tag": "india"
    },
    {
        "name": 'zee5',
        "url": "https://www.zee5.com",
        "logo": "zee5.png",
        "color": "#F6B52F",
        "tag": "india"
    },
    {
        "name": 'hulu',
        "url": "https://www.hulu.com",
        "logo": "hulu.png",
        "color": "#1CE783",
        "tag": "usa"
    },
    {
        "name": 'hbo max',
        "url": "https://www.max.com",
        "logo": "hbomax.png",
        "color": "#002BE7",
        "tag": "usa"
    },
    {
        "name": 'disney plus',
        "url": "https://www.disneyplus.com",
        "logo": "disneyplus.png",
        "color": "#00C7EC",
        "tag": "usa"
    },
    {
        "name": 'peacock',
        "url": "https://www.peacocktv.com",
        "logo": "peacock.png",
        "color": "#EF1541",
        "tag": "usa"
    },
    {
        "name": 'apple tv plus',
        "url": "https://tv.apple.com",
        "logo": "appletvplus.png",
        "color": "#ffffff",
        "tag": "usa"
    },
    {
        "name": 'bbc iplayer',
        "url": "https://www.bbc.co.uk/iplayer",
        "logo": "bbciplayer.png",
        "color": "#FF4C96",
        "tag": "uk"
    },
    {
        "name": 'now tv',
        "url": "https://www.nowtv.com",
        "logo": "nowtv.png",
        "color": "#00BDC5",
        "tag": "uk"
    },
    {
        "name": 'itvx',
        "url": "https://www.itv.com",
        "logo": "itvx.png",
        "color": "#DEEB52",
        "tag": "uk"
    },
    {
        "name": 'channel 4',
        "url": "https://www.channel4.com",
        "logo": "channel4.png",
        "color": "#AAFF89",
        "tag": "uk"
    },
    {
        "name": 'discovery plus',
        "url": "https://www.discoveryplus.com",
        "logo": "discoveryplus.png",
        "color": "#23DBED",
        "tag": "broadcasts"
    },
    {
        "name": 'jio cinema',
        "url": "https://www.jiocinema.com",
        "logo": "jiocinema.png",
        "color": "#D9008D",
        "tag": "others"
    },
    {
        "name": 'airtel extreme',
        "url": "https://www.airtelxstream.in",
        "logo": "airtelextreme.png",
        "color": "#ED2024",
        "tag": "others"
    },
    {
        "name": 'sony liv',
        "url": "https://www.sonyliv.com",
        "logo": "sonyliv.png",
        "color": "#FD988E",
        "tag": "others"
    },
    {
        "name": 'ted',
        "url": "https://www.ted.com/",
        "logo": "ted.png",
        "color": "#E62B1E",
        "tag": "broadcasts"
    },
    {
        "name": 'twitch',
        "url": "https://www.twitch.tv",
        "logo": "twitch.png",
        "color": "#9146FF",
        "tag": "broadcasts"
    },
    {
        "name": 'youtube',
        "url": "https://www.youtube.com",
        "logo": "youtube.png",
        "color": "#FF0000",
        "tag": "broadcasts"
    },
    {
        "name": 'vimeo',
        "url": "https://vimeo.com",
        "logo": "vimeo.png",
        "color": "#1AB7EA",
        "tag": "broadcasts"
    },
    {
        "name": 'chrome',
        "url": "https://shaka-player-demo.appspot.com/support.html",
        "logo": "vimeo.png",
        "color": "#1AB7EA",
        "tag": "broadcasts"
    },
];

const categories = [
    {
        name: "Broadcast and streaming",
        tag: "broadcasts",
        list: []
    },
    {
        name: "Popular in India",
        tag: "india",
        list: []
    },
    {
        name: "Popular in USA",
        tag: "usa",
        list: []
    },
    {
        name: "Popular in UK",
        tag: "uk",
        list: []
    },
    {
        name: "Other popular platforms",
        tag: "others",
        list: []
    },
]

export function getCategories() {
    categories.forEach(e => {
        ottList.forEach(ex => {
            if (ex.tag == e.tag) {
                e.list.push(ex)
            }
        });
    });
    return categories;
}