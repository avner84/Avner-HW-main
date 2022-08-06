const cars = [{
        brand: "מאזדה",
        model: "CX-5",
        image: "https://img.yad2.co.il/Pic/202205/20/1_3/o/y2_1_09884_20220520203253.jpeg",
        year: 2014,
        hand: 2,
        engineCapacity: 1997,
        price: 73000,
    },
    {
        brand: "יונדאי",
        model: "i30CW",
        image: "https://img.yad2.co.il/Pic/202204/17/1_1/o/y2_1_08418_20220417102529.jpeg",
        year: 2014,
        hand: 2,
        engineCapacity: 1591,
        price: 36970,
    },
    {
        brand: "מרצדס",
        model: "C-Class קופה / קבריולט",
        image: "https://img.yad2.co.il/Pic/202205/17/1_1/o/y2_1_04730_20220517155320.jpeg",
        year: 2019,
        hand: 2,
        engineCapacity: 3982,
        price: 480000,
    },
    {
        brand: "פיג'ו",
        model: "206",
        image: "https://img.yad2.co.il/Pic/202205/16/1_1/o/y2_1_07388_20220516183039.jpeg",
        year: 2001,
        hand: 2,
        engineCapacity: 1360,
        price: 8000,
    },
    {
        brand: "קיה",
        model: "פיקנטו",
        image: "https://img.yad2.co.il/Pic/202203/26/1_1/o/y2_1_04880_20220326232322.jpeg",
        year: 2015,
        hand: 3,
        engineCapacity: 1248,
        price: 37000,
    },
    {
        brand: "פיג'ו",
        model: "3008",
        image: "https://img.yad2.co.il/Pic/202205/18/1_1/o/y2_1_05137_20220518173508.jpeg",
        year: 2012,
        hand: 2,
        engineCapacity: 1598,
        price: 25000,
    },

    {
        brand: "מיני קופר",
        model: "קבריולט",
        image: "https://img.yad2.co.il/Pic/202204/25/1_1/o/y2_1_07572_20220425114501.jpeg",
        year: 2013,
        hand: 4,
        engineCapacity: 1598,
        price: 48300,
    },
    {
        brand: "קאדילק",
        model: "XT5",
        image: "https://img.yad2.co.il/Pic/202205/16/1_3/o/y2_1_06906_20220516210126.jpeg",
        year: 2022,
        hand: 1,
        engineCapacity: 3649,
        price: 345000,
    },
    {
        brand: "סקודה",
        model: "אוקטביה",
        image: "https://img.yad2.co.il/Pic/202205/15/1_1/o/y2_1_06359_20220515222556.jpeg",
        year: 2014,
        hand: 2,
        engineCapacity: 1197,
        price: 52500,
    },

    {
        brand: "רנו",
        model: "סניק דור 3",
        image: "https://img.yad2.co.il/Pic/202205/15/1_1/o/y2_1_01556_20220515171643.jpeg",
        year: 2012,
        hand: 3,
        engineCapacity: 1997,
        price: 295000,
    },
    {
        brand: "שברולט",
        model: "בלייזר",
        image: "https://img.yad2.co.il/Pic/202205/20/1_3/o/y2_1_04425_20220520115956.jpeg",
        year: 2021,
        hand: 2,
        engineCapacity: 1461,
        price: 219000,
    },
    {
        brand: "ב.מ.וו",
        model: "סדרה 5",
        image: "https://img.yad2.co.il/Pic/202205/23/1_1/o/y2_1_04286_20220523101752.jpeg",
        year: 2015,
        hand: 1,
        engineCapacity: 1997,
        price: 125000,
    },
    {
        brand: "מאזדה",
        model: "CX-5",
        image: "https://img.yad2.co.il/Pic/202204/24/1_3/o/y2_1_09746_20220424105754.jpeg",
        year: 2018,
        hand: 2,
        engineCapacity: 2488,
        price: 150000,
    },
    {
        brand: "מיצובישי",
        model: "האוטלנדר",
        image: "https://img.yad2.co.il/Pic/202205/23/1_3/o/y2_1_04473_20220523101818.jpeg",
        year: 2019,
        hand: 1,
        engineCapacity: 1998,
        price: 150000,
    },

    {
        brand: "טויוטה",
        model: "לנד קרוזר ארוך",
        image: "https://img.yad2.co.il/Pic/202205/05/1_3/o/y2_1_08486_20220505215319.jpeg",
        year: 2019,
        hand: 2,
        engineCapacity: 2982,
        price: 210000,
    },
];

var toApend = "";

cars.forEach(car => {

    toApend += `<div class="card">
    <div class="cardsTop">
        <div class="mainDetails">
            <h2>${car.brand}</h2>
            <h3>${car.model}</h3>
        </div>

        <div class="imgDiv">
            <img src="${car.image}"/>
        </div>
    </div>
    <div class="cardsBottom">
        <div class="cardsTopBottom">
            <div class="year">
                <h5>שנה:</h5>
                <p>${car.year}</p>
            </div>
            <div class="handNumber">
                <h5>יד:</h5>
                <p>${car.hand}</p>
            </div>
            <div class="engineCapacity">
                <h5>סמ"ק:</h5>
                <p>${car.engineCapacity}</p>
            </div>
        </div>
        <div class="cardsBottomBottom">
            <h4>מחיר: ${car.price} ש"ח</h4>
        </div>
    </div>
</div>`;

});

document.getElementById("cont").innerHTML = toApend;