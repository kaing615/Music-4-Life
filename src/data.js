const songs = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://f4.bcbits.com/img/a2542331661_10.jpg",
      duration: "3:22",
      youtubeID: "fHI8X4OXluQ",
    },
    {
      id: 2,
      name: "Save Your Tears",
      artist: "The Weeknd",
      cover:
        "https://th.bing.com/th/id/OIP.xvdUNmPvcZWHO6d-OA-BNQHaHa?rs=1&pid=ImgDetMain",
      duration: "3:35",
      youtubeID: "XXYlFuWEuKI",
    },
    {
      id: 3,
      name: "Peaches",
      artist: "Justin Bieber",
      cover:
        "https://th.bing.com/th/id/OIP.c3Xp52DZFuvGmx9xesaBsgHaHa?rs=1&pid=ImgDetMain",
      duration: "3:18",
      youtubeID: "tQ0yjYUFKAE",
    },
    {
      id: 4,
      name: "Levitating",
      artist: "Dua Lipa",
      cover:
        "https://th.bing.com/th/id/OIP.69emigpmj81jmPmS9OFOTQHaHa?rs=1&pid=ImgDetMain",
      duration: "3:23",
      youtubeID: "TUVcZfQe-Kw",
    },
    {
      id: 5,
      name: "Old Town Road",
      artist: "Lil Nas X ft. Billy Ray Cyrus",
      cover:
        "https://wallpaperaccess.com/full/1408706.jpg",
      duration: "2:37",
      youtubeID: "r7qovpFAGrQ",
    },
    {
      id: 6,
      name: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      cover:
        "https://th.bing.com/th/id/OIP.2b49jg3RTUotEwRD_JV7WQHaHa?rs=1&pid=ImgDetMain",
      duration: "2:37",
      youtubeID: "kTJczUoc26U",
    },
    {
      id: 7,
      name: "Shape Of You",
      artist: "Ed Sheeran",
      cover:
        "https://images.genius.com/86dcab92e27599f8556b5b8f21932449.1000x1000x1.png",
      duration: "3:51",
      youtubeID: "liTfD88dbCo",
    },
    {
      id: 8,
      name: "Mất Kết Nối",
      artist: "Dương Domic",
      cover:
        "https://th.bing.com/th/id/OIP.4foGMQv3IA2c9nwSen79QAHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
      duration: "3:27",
      youtubeID: "lRsaDQtYqAo",
    },
    {
      id: 9,
      name: "[XHTDRLX3] Phonecert (폰서트)",
      artist: "10CM (십센치) x Hoàng Dũng",
      cover:
        "https://i.ytimg.com/vi/XFVNxCs97ys/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAM92AMwc9PvJ9OPzYsEfVCUg2ViA",
      duration: "3:33",
      youtubeID: "XFVNxCs97ys",
    },
    {
      id: 10,
      name: "Từng Ngày Yêu Em (Acoustic)",
      artist: "buitruonglinh",
      cover:
        "https://i.ytimg.com/vi/f-VsoLm4i5c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA51jhmWMe8qAxqef54m3370Rj3Zg",
      duration: "4:16",
      youtubeID: "DEHFZYaX5e8",
    },
    {
      id: 11,
      name: "Dù Cho Tận Thế",
      artist: "Erik",
      cover:
        "https://i1.sndcdn.com/artworks-YGzrJaJTmPjMMNi3-nUyrTw-t1080x1080.png",
      duration: "5:01",
      youtubeID: "js6JBdLzNn4",
    },
    {
      id: 12,
      name: "Ghé Qua",
      artist: "Dick x PC x Tofu",
      cover:
        "https://th.bing.com/th/id/OIP.YJ-RenYyFLhKpzvXgOSKzAHaEK?rs=1&pid=ImgDetMain",
      duration: "4:28",
      youtubeID: "zEWSSod0zTY",
    },
    {
      id: 13,
      name: "Có Hẹn Với Thanh Xuân",
      artist: "MONSTAR",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6b/45/48/6b4548ac-5dee-ec1b-1132-b2366d738566/190296526817.jpg/1200x1200bf-60.jpg",
      duration: "4:25",
      youtubeID: "vpRi8S6uXAg",
    },
    {
      id: 14,
      name: "Em Đồng Ý (I Do)",
      artist: "Đức Phúc ft. 911",
      cover:
        "https://tailieumoi.vn/storage/uploads/images/post/banner/mv-i-do-cua-duc-phuc-va-bai-hoc-dinh-cao-khi-lam-thuong-hieu-ca-nhan-1676343099-1695220102.jpg",
      duration: "3:41",
      youtubeID: "IOe0tNoUGv8",
    },
    {
      id: 15,
      name: "Hãy Trao Cho Anh",
      artist: "Sơn Tùng M-TP",
      cover: "https://i.ytimg.com/vi/knW7-x7Y7RE/maxresdefault.jpg",
      duration: "4:05",
      youtubeID: "knW7-x7Y7RE",
    },
    {
      id: 16,
      name: "Chạy Về Khóc Với Anh",
      artist: "ERIK",
      cover:
        "https://th.bing.com/th/id/OIP.QMHF8_44GeNqmDj6iVE5CAAAAA?rs=1&pid=ImgDetMain",
      duration: "3:46",
      youtubeID: "EBpp2VTSI2Q",
    },
    {
      id: 17,
      name: "Bắc Bling (Bắc Ninh)",
      artist: "HOÀ MINZY ft NS XUÂN HINH x MASEW x TUẤN CRY",
      cover:
        "https://vcdn1-dulich.vnecdn.net/2025/03/06/BN7-1741233511.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BC4flmyHxeLE-kfwnGBK8g",
      duration: "4:19",
      youtubeID: "CL13X-8o4h0",
    },
    {
      id: 18,
      name: "Waiting For You",
      artist: "MONO",
      cover:
        "https://th.bing.com/th/id/OIP.2twT0owDKYXhDNAHY68MowHaHa?rs=1&pid=ImgDetMain",
      duration: "4:25",
      youtubeID: "CHw1b_1LVBA",
    },
    {
      id: 19,
      name: "Nơi Này Có Anh",
      artist: "Sơn Tùng MTP",
      cover:
        "https://th.bing.com/th/id/OIP.lKSgInvTECkC-Ki116PVqgHaHa?w=188&h=187&c=7&r=0&o=5&pid=1.7",
      duration: "4:39",
      youtubeID: "FN7ALfpGxiI",
    },
    {
      id: 20,
      name: "Đừng Làm Trái Tim Anh Đau",
      artist: "Sơn Tùng MTP",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e3/0b/38/e30b383e-5818-321a-7626-557b7b0f8ba3/24UMGIM61359.rgb.jpg/1200x1200bf-60.jpg",
      duration: "5:25",
      youtubeID: "abPmZCZZrFA",
    },
    {
      id: 21,
      name: "Một Tình Yêu Hai Thử Thách (MiniC x Sado Remix)",
      artist: "Luân Ken",
      cover:
        "https://i.ytimg.com/vi/kFM6C-M7zmo/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYZSBNKE8wDw==&rs=AOn4CLCsf8awoz1pVyqcRj3zUu5rgwjrfw",
      duration: "3:26",
      youtubeID: "kFM6C-M7zmo",
    },
    {
      id: 22,
      name: "Mở Lối Cho Em 2 (OXI Remix)",
      artist: "Lương Quý Tuấn ft An Clock x H2O",
      cover:
        "https://tse1.mm.bing.net/th?&id=OVP.Wt8UpXMxNY2F_rfPJPG7xQHgFo&w=528&h=298&c=7&pid=1.7&rs=1",
      duration: "3:46",
      youtubeID: "G_uEUcJiY90",
    },
    {
      id: 23,
      name: "Để Anh Lương Thiện (HUY PT REMIX)",
      artist: "Linh Hương Luz Cover",
      cover:
        "https://i.ytimg.com/vi/AuxULopbguY/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEAgUShlMA8=&rs=AOn4CLB705DP4_WoiKkyRYrrxx5jbQyROg",
      duration: "3:18",
      youtubeID: "AuxULopbguY",
    },
    {
      id: 24,
      name: "Em Không Quay Về",
      artist: "Hoàng Tôn ft YANBI",
      cover:
        "https://i.ytimg.com/vi/PxLtYcHWWrQ/maxresdefault.jpg",
      duration: "4:36",
      youtubeID: "ZlSx-6UbrmI",
    },
  ];

  export default songs;