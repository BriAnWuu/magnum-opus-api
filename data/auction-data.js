import updateAuctionDate from "../utils/updateAuctionDate.js";

const ORIGINAL_DATA = [
    {
      "id": 1,
      "artwork_id": 105432,
      "owner_id": 2,
      "open_at": 1732093588772,
      "close_at": 1734516400053,
      "ask_price": 1300,
      "leading_bid_price": "[1400,1500]",
      "watchers": "[2]"
    },
    {
      "id": 2,
      "artwork_id": 61707,
      "owner_id": 2,
      "open_at": 1731622135699,
      "close_at": 1734790947802,
      "ask_price": 3500,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 3,
      "artwork_id": 114178,
      "owner_id": 6,
      "open_at": 1731715220730,
      "close_at": 1734122402715,
      "ask_price": 7900,
      "leading_bid_price": "[]",
      "watchers": "[4]"
    },
    {
      "id": 4,
      "artwork_id": 11058,
      "owner_id": 8,
      "open_at": 1732312695707,
      "close_at": 1732894831940,
      "ask_price": 9300,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 5,
      "artwork_id": 241667,
      "owner_id": 1,
      "open_at": 1732056952038,
      "close_at": 1734795201101,
      "ask_price": 7800,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 6,
      "artwork_id": 2171,
      "owner_id": 9,
      "open_at": 1732382381199,
      "close_at": 1733052592512,
      "ask_price": 6200,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 7,
      "artwork_id": 50783,
      "owner_id": 9,
      "open_at": 1731705994989,
      "close_at": 1732722421954,
      "ask_price": 8900,
      "leading_bid_price": "[9000]",
      "watchers": "[]"
    },
    {
      "id": 8,
      "artwork_id": 23075,
      "owner_id": 2,
      "open_at": 1731884963527,
      "close_at": 1732676698690,
      "ask_price": 5200,
      "leading_bid_price": "[5300,5400,5500]",
      "watchers": "[4,11]"
    },
    {
      "id": 9,
      "artwork_id": 146953,
      "owner_id": 2,
      "open_at": 1731905636132,
      "close_at": 1733547565929,
      "ask_price": 3900,
      "leading_bid_price": "[4000]",
      "watchers": "[]"
    },
    {
      "id": 10,
      "artwork_id": 50785,
      "owner_id": 1,
      "open_at": 1731780314796,
      "close_at": 1733771063087,
      "ask_price": 8300,
      "leading_bid_price": "[]",
      "watchers": "[11,15]"
    },
    {
      "id": 11,
      "artwork_id": 180242,
      "owner_id": 1,
      "open_at": 1733574828229,
      "close_at": 1734176133720,
      "ask_price": 6000,
      "leading_bid_price": "[6100]",
      "watchers": "[7,14,15]"
    },
    {
      "id": 12,
      "artwork_id": 40767,
      "owner_id": 5,
      "open_at": 1732101391634,
      "close_at": 1734956680528,
      "ask_price": 8100,
      "leading_bid_price": "[8200]",
      "watchers": "[5]"
    },
    {
      "id": 13,
      "artwork_id": 81239,
      "owner_id": 10,
      "open_at": 1732720348123,
      "close_at": 1734421830110,
      "ask_price": 8900,
      "leading_bid_price": "[9000]",
      "watchers": "[8]"
    },
    {
      "id": 14,
      "artwork_id": 251250,
      "owner_id": 5,
      "open_at": 1732954110194,
      "close_at": 1733416501424,
      "ask_price": 4000,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 15,
      "artwork_id": 251188,
      "owner_id": 10,
      "open_at": 1733809143142,
      "close_at": 1734831826162,
      "ask_price": 1900,
      "leading_bid_price": "[2000]",
      "watchers": "[]"
    },
    {
      "id": 16,
      "artwork_id": 221814,
      "owner_id": 4,
      "open_at": 1732197698647,
      "close_at": 1734680874056,
      "ask_price": 6100,
      "leading_bid_price": "[6200,6300]",
      "watchers": "[19]"
    },
    {
      "id": 17,
      "artwork_id": 182262,
      "owner_id": 3,
      "open_at": 1732108003192,
      "close_at": 1732796517067,
      "ask_price": 1200,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 18,
      "artwork_id": 158786,
      "owner_id": 1,
      "open_at": 1732953757056,
      "close_at": 1734739451368,
      "ask_price": 7000,
      "leading_bid_price": "[7100,7200]",
      "watchers": "[]"
    },
    {
      "id": 19,
      "artwork_id": 9389,
      "owner_id": 2,
      "open_at": 1732372731903,
      "close_at": 1733701555692,
      "ask_price": 5900,
      "leading_bid_price": "[6000]",
      "watchers": "[2]"
    },
    {
      "id": 20,
      "artwork_id": 5370,
      "owner_id": 7,
      "open_at": 1732013611642,
      "close_at": 1733735716513,
      "ask_price": 3100,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 21,
      "artwork_id": 124679,
      "owner_id": 3,
      "open_at": 1733413476663,
      "close_at": 1735002683660,
      "ask_price": 6600,
      "leading_bid_price": "[6700]",
      "watchers": "[12,18,20]"
    },
    {
      "id": 22,
      "artwork_id": 71936,
      "owner_id": 4,
      "open_at": 1733035496202,
      "close_at": 1735003013634,
      "ask_price": 1000,
      "leading_bid_price": "[1100]",
      "watchers": "[13]"
    },
    {
      "id": 23,
      "artwork_id": 47677,
      "owner_id": 7,
      "open_at": 1732093320594,
      "close_at": 1733419478101,
      "ask_price": 2900,
      "leading_bid_price": "[3000]",
      "watchers": "[10]"
    },
    {
      "id": 24,
      "artwork_id": 210878,
      "owner_id": 1,
      "open_at": 1732361553957,
      "close_at": 1732985053939,
      "ask_price": 5600,
      "leading_bid_price": "[5700]",
      "watchers": "[12]"
    },
    {
      "id": 25,
      "artwork_id": 80632,
      "owner_id": 8,
      "open_at": 1732405452505,
      "close_at": 1733144618359,
      "ask_price": 5400,
      "leading_bid_price": "[5500]",
      "watchers": "[]"
    },
    {
      "id": 26,
      "artwork_id": 8858,
      "owner_id": 7,
      "open_at": 1732070896848,
      "close_at": 1734082221454,
      "ask_price": 3100,
      "leading_bid_price": "[3200]",
      "watchers": "[1]"
    },
    {
      "id": 27,
      "artwork_id": 8860,
      "owner_id": 2,
      "open_at": 1734133134487,
      "close_at": 1734946937998,
      "ask_price": 1600,
      "leading_bid_price": "[1700]",
      "watchers": "[5]"
    },
    {
      "id": 28,
      "artwork_id": 97657,
      "owner_id": 1,
      "open_at": 1733219647920,
      "close_at": 1733900684634,
      "ask_price": 6200,
      "leading_bid_price": "[6300]",
      "watchers": "[3,13]"
    },
    {
      "id": 29,
      "artwork_id": 118048,
      "owner_id": 3,
      "open_at": 1732613833954,
      "close_at": 1734764311674,
      "ask_price": 9300,
      "leading_bid_price": "[9400,9500,9600]",
      "watchers": "[]"
    },
    {
      "id": 30,
      "artwork_id": 217140,
      "owner_id": 2,
      "open_at": 1732676727791,
      "close_at": 1733239921090,
      "ask_price": 9500,
      "leading_bid_price": "[]",
      "watchers": "[3,6]"
    },
    {
      "id": 31,
      "artwork_id": 180206,
      "owner_id": 5,
      "open_at": 1733193460964,
      "close_at": 1734760255848,
      "ask_price": 2400,
      "leading_bid_price": "[2500]",
      "watchers": "[9]"
    },
    {
      "id": 32,
      "artwork_id": 202593,
      "owner_id": 1,
      "open_at": 1733402194340,
      "close_at": 1734484781621,
      "ask_price": 4100,
      "leading_bid_price": "[]",
      "watchers": "[20]"
    },
    {
      "id": 33,
      "artwork_id": 6792,
      "owner_id": 6,
      "open_at": 1732295260442,
      "close_at": 1733020712313,
      "ask_price": 5000,
      "leading_bid_price": "[]",
      "watchers": "[17]"
    },
    {
      "id": 34,
      "artwork_id": 3796,
      "owner_id": 5,
      "open_at": 1731700998516,
      "close_at": 1734504741381,
      "ask_price": 4400,
      "leading_bid_price": "[]",
      "watchers": "[7]"
    },
    {
      "id": 35,
      "artwork_id": 49195,
      "owner_id": 10,
      "open_at": 1732338814941,
      "close_at": 1733590137008,
      "ask_price": 8700,
      "leading_bid_price": "[8800]",
      "watchers": "[]"
    },
    {
      "id": 36,
      "artwork_id": 94841,
      "owner_id": 7,
      "open_at": 1732169005787,
      "close_at": 1733157457032,
      "ask_price": 4600,
      "leading_bid_price": "[4700,4800]",
      "watchers": "[]"
    },
    {
      "id": 37,
      "artwork_id": 61764,
      "owner_id": 8,
      "open_at": 1731825968731,
      "close_at": 1734504057807,
      "ask_price": 6600,
      "leading_bid_price": "[6700,6800]",
      "watchers": "[]"
    },
    {
      "id": 38,
      "artwork_id": 156297,
      "owner_id": 4,
      "open_at": 1733198974194,
      "close_at": 1734130370885,
      "ask_price": 8300,
      "leading_bid_price": "[8400,8500]",
      "watchers": "[16]"
    },
    {
      "id": 39,
      "artwork_id": 43259,
      "owner_id": 4,
      "open_at": 1732017153276,
      "close_at": 1733669055601,
      "ask_price": 5400,
      "leading_bid_price": "[5500,5600,5700,5800]",
      "watchers": "[]"
    },
    {
      "id": 40,
      "artwork_id": 121709,
      "owner_id": 2,
      "open_at": 1733344057902,
      "close_at": 1734181918546,
      "ask_price": 3200,
      "leading_bid_price": "[]",
      "watchers": "[1,10]"
    },
    {
      "id": 41,
      "artwork_id": 3070,
      "owner_id": 6,
      "open_at": 1732873182059,
      "close_at": 1733799366607,
      "ask_price": 9500,
      "leading_bid_price": "[9600]",
      "watchers": "[17]"
    },
    {
      "id": 42,
      "artwork_id": 73345,
      "owner_id": 9,
      "open_at": 1732266587408,
      "close_at": 1734715292722,
      "ask_price": 9400,
      "leading_bid_price": "[9500]",
      "watchers": "[8,19]"
    },
    {
      "id": 43,
      "artwork_id": 106431,
      "owner_id": 1,
      "open_at": 1731687407146,
      "close_at": 1734309607585,
      "ask_price": 900,
      "leading_bid_price": "[]",
      "watchers": "[16]"
    },
    {
      "id": 44,
      "artwork_id": 106237,
      "owner_id": 8,
      "open_at": 1732953541518,
      "close_at": 1734467658999,
      "ask_price": 2400,
      "leading_bid_price": "[]",
      "watchers": "[9]"
    },
    {
      "id": 45,
      "artwork_id": 116587,
      "owner_id": 3,
      "open_at": 1733420260308,
      "close_at": 1734821641948,
      "ask_price": 3100,
      "leading_bid_price": "[3200]",
      "watchers": "[14]"
    },
    {
      "id": 46,
      "artwork_id": 8765,
      "owner_id": 10,
      "open_at": 1732045777521,
      "close_at": 1734425337572,
      "ask_price": 1100,
      "leading_bid_price": "[1200,1300]",
      "watchers": "[]"
    },
    {
      "id": 47,
      "artwork_id": 111661,
      "owner_id": 9,
      "open_at": 1732408970969,
      "close_at": 1734188047781,
      "ask_price": 8900,
      "leading_bid_price": "[9000,9100]",
      "watchers": "[]"
    },
    {
      "id": 48,
      "artwork_id": 136034,
      "owner_id": 2,
      "open_at": 1733582217085,
      "close_at": 1734220851947,
      "ask_price": 5800,
      "leading_bid_price": "[]",
      "watchers": "[]"
    },
    {
      "id": 49,
      "artwork_id": 8768,
      "owner_id": 7,
      "open_at": 1732898903107,
      "close_at": 1734835207563,
      "ask_price": 2300,
      "leading_bid_price": "[2400,2500,2600]",
      "watchers": "[18]"
    },
    {
      "id": 50,
      "artwork_id": 105101,
      "owner_id": 2,
      "open_at": 1731719617773,
      "close_at": 1733951331444,
      "ask_price": 3300,
      "leading_bid_price": "[3400]",
      "watchers": "[6]"
    }
]


const auctionData = updateAuctionDate(ORIGINAL_DATA);
export default auctionData;