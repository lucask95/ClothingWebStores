var currentPage = 1;
var nStart = 0;
var nDisplay = 25;

function displayTable() {
    $("#storesTable").html("");

    for(var i = nStart; i < (nStart + nDisplay); i++) {
        var store = storesList[i];
        var rowText = "<tr><td><a href=\"" + store.URL + "\">" + store.Name +
            "</a></td><td>" + store.Keywords + "</td><td>" + store.Price +
            "</td><td>" + store.Country + "</td><td>" + store.Notes + "</td></tr>";
        $("#storesTable").append(rowText);
    }
}

function displayPagination() {
    var numPages = Math.ceil(storesList.length / nDisplay);
    currentPage = Math.floor(nStart / nDisplay) + 1;

    $("#pageSwitch").html("");
    $("#pageSwitch").append("<li><a class=\"circleBtn\" onClick=\"prevPage()\"><</a></li>");

    for(var i = 1; i <= numPages; i++) {
        if (i == currentPage)
            $("#pageSwitch").append("<li><strong>" + i + "</strong></li>");
        else
            $("#pageSwitch").append("<li><a href=\"#\" onClick=\"goToPage(" + i + ")\">" + i + "</a></li>");
    }

    $("#pageSwitch").append("<li><a class=\"circleBtn\" onClick=\"nextPage()\">></a></li>");
}

function redrawPage() {
    displayPagination();
    displayTable();
}

function prevPage() {
    if (nStart == 0)
        return;
    nStart -= nDisplay;
    redrawPage();
}

function nextPage() {
    var newStart = nStart + nDisplay;
    if (newStart > storesList.length - 1)
        return;
    nStart += nDisplay;
    redrawPage();
}

function goToPage(n) {
    nStart = (n - 1) * nDisplay;
    redrawPage();
}

function displayNStores() {
    var selectedVal = $("#displayNumber").val();
    if (selectedVal == "all")
        nDisplay = storesList.length;
    else
        nDisplay = Number(selectedVal);
    nStart = 0;
    redrawPage();
}

$(document).ready(function() {
    displayTable();
    displayPagination();
    $("#displayNumber").on("change", displayNStores)
});

var storesList = [
  {
    "Name": "3sixteen",
    "Keywords": "Denim",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.3sixteen.com/",
    "Notes": ""
  },
  {
    "Name": "424 on Fairfax",
    "Keywords": "Streetwear",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://shop.fourtwofouronfairfax.com/",
    "Notes": ""
  },
  {
    "Name": "45 RPM",
    "Keywords": "General",
    "Price": "$$$$",
    "Country": "Japan",
    "URL": "http://www.45rpm.co.jp/en/",
    "Notes": ""
  },
  {
    "Name": "A Cold Wall",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://a-cold-wall.com/",
    "Notes": ""
  },
  {
    "Name": "A Kind of Guise",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "Germany",
    "URL": "http://akindofguise.com/shop/",
    "Notes": ""
  },
  {
    "Name": "A.P.C.",
    "Keywords": "Minimalist",
    "Price": "$$$",
    "Country": "France",
    "URL": "http://usonline.apc.fr/",
    "Notes": ""
  },
  {
    "Name": "AB Fits",
    "Keywords": "Americana",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.abfits.com/",
    "Notes": ""
  },
  {
    "Name": "Ace Hotel",
    "Keywords": "Casual, Lifestyle",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://shop.acehotel.com/",
    "Notes": ""
  },
  {
    "Name": "Acrimony",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.shopacrimony.com/",
    "Notes": ""
  },
  {
    "Name": "ADER Error",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "South Korea",
    "URL": "http://adererror.com/",
    "Notes": ""
  },
  {
    "Name": "Adsum",
    "Keywords": "Minimalist, General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.adsumnyc.com/",
    "Notes": ""
  },
  {
    "Name": "Adyn",
    "Keywords": "Militaristic",
    "Price": "$$",
    "Country": "UK",
    "URL": "http://adyn.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Aether",
    "Keywords": "Minimalist, Techwear, Casual",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.aetherapparel.com/collections/men",
    "Notes": ""
  },
  {
    "Name": "Aime Leon Dore",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://aimeleondore.com/",
    "Notes": ""
  },
  {
    "Name": "Airbag Craftworks",
    "Keywords": "General",
    "Price": "$$",
    "Country": "Germany",
    "URL": "http://airbagcraftworks.com/en/shop/",
    "Notes": ""
  },
  {
    "Name": "Alessandrini New York",
    "Keywords": "Punk, Streetwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://alessandrini-newyork.com/",
    "Notes": ""
  },
  {
    "Name": "Alex Mill",
    "Keywords": "Americana",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.alex-mill.com/",
    "Notes": ""
  },
  {
    "Name": "Alex Mostella",
    "Keywords": "Streetwear, Basics",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.alexmostella.com/products",
    "Notes": ""
  },
  {
    "Name": "All At Sea",
    "Keywords": "Pajamas, Casual",
    "Price": "$$$$",
    "Country": "Denmark",
    "URL": "https://all-at-sea-copenhagen.myshopify.com/",
    "Notes": ""
  },
  {
    "Name": "All Citizens",
    "Keywords": "Underwear",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.allcitizensapparel.com/",
    "Notes": ""
  },
  {
    "Name": "Allen Edmonds",
    "Keywords": "Shoes",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.allenedmonds.com/",
    "Notes": ""
  },
  {
    "Name": "Allsaints",
    "Keywords": "General",
    "Price": "$$",
    "Country": "Multiple",
    "URL": "http://www.us.allsaints.com/",
    "Notes": "Buy On-sale, Frequent Sales, UK cheaper than US"
  },
  {
    "Name": "Alpha Shadows",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://www.alphashadows.com/",
    "Notes": "Specializes in Japanese brands."
  },
  {
    "Name": "Alternative Apparel",
    "Keywords": "Basics",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.alternativeapparel.com/",
    "Notes": ""
  },
  {
    "Name": "Altru Apparel",
    "Keywords": "Casual",
    "Price": "$",
    "Country": "USA",
    "URL": "https://www.altruapparel.com/",
    "Notes": ""
  },
  {
    "Name": "American Apparel",
    "Keywords": "Basics",
    "Price": "$",
    "Country": "USA",
    "URL": "http://store.americanapparel.net/",
    "Notes": ""
  },
  {
    "Name": "American Eagle",
    "Keywords": "General, Americana",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.ae.com/",
    "Notes": ""
  },
  {
    "Name": "American Giant",
    "Keywords": "Sweatshirts, Basics",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.american-giant.com/",
    "Notes": ""
  },
  {
    "Name": "American Rag Cie",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://americanrag.com/",
    "Notes": ""
  },
  {
    "Name": "American Trench",
    "Keywords": "Outerwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.americantrench.com/",
    "Notes": ""
  },
  {
    "Name": "AMI",
    "Keywords": "Minimalist, General",
    "Price": "$$$",
    "Country": "France",
    "URL": "http://amiparis.fr/en/shop-online.html",
    "Notes": ""
  },
  {
    "Name": "Amoire Officielle",
    "Keywords": "Minimalist, General",
    "Price": "$$$",
    "Country": "Denmark",
    "URL": "http://armoireofficielle.com/",
    "Notes": ""
  },
  {
    "Name": "And Wander",
    "Keywords": "Techwear",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://shop.andwander.com/",
    "Notes": ""
  },
  {
    "Name": "Animal Traffic",
    "Keywords": "Americana, Casual",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.animaltrafficpdx.com/",
    "Notes": ""
  },
  {
    "Name": "Apolis",
    "Keywords": "Americana",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.apolisglobal.com/",
    "Notes": ""
  },
  {
    "Name": "Aptmnt",
    "Keywords": "Streetwear, Lifestyle",
    "Price": "$$",
    "Country": "Australia",
    "URL": "https://aptmnt.myshopify.com/",
    "Notes": "Has lots of Japanese streetwear brands."
  },
  {
    "Name": "Arrivals",
    "Keywords": "Outerwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://thearrivals.com/",
    "Notes": ""
  },
  {
    "Name": "Arte Antwerp",
    "Keywords": "Casual, Outerwear",
    "Price": "$$",
    "Country": "Belgium",
    "URL": "https://shop.arte-antwerp.com/",
    "Notes": ""
  },
  {
    "Name": "AS Colour",
    "Keywords": "Basics",
    "Price": "$",
    "Country": "Australia",
    "URL": "http://www.ascolour.com/",
    "Notes": ""
  },
  {
    "Name": "Asket",
    "Keywords": "Basics",
    "Price": "$$",
    "Country": "Sweden",
    "URL": "https://www.asket.com/",
    "Notes": ""
  },
  {
    "Name": "ASOS",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://us.asos.com/",
    "Notes": ""
  },
  {
    "Name": "Atelier",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.ateliernewyork.com/",
    "Notes": ""
  },
  {
    "Name": "Attachment",
    "Keywords": "General, Designer",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://www.attachment-ec.com/",
    "Notes": ""
  },
  {
    "Name": "Azalea",
    "Keywords": "Everything",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://www.azaleasf.com/",
    "Notes": ""
  },
  {
    "Name": "Babylon",
    "Keywords": "Skate, Streetwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://babylon.la/",
    "Notes": ""
  },
  {
    "Name": "Baldwin",
    "Keywords": "Denim, General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://baldwin.co/",
    "Notes": ""
  },
  {
    "Name": "Ball and Buck",
    "Keywords": "Americana",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://ballandbuck.com/",
    "Notes": ""
  },
  {
    "Name": "Banana Republic",
    "Keywords": "General, Designer",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://bananarepublic.gap.com/",
    "Notes": "Buy On-sale, Frequent Sales, Stocks tall sizes"
  },
  {
    "Name": "Barneys",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.barneys.com/",
    "Notes": ""
  },
  {
    "Name": "Battenwear",
    "Keywords": "Activewear, Americana",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://battenwear.com/collections/everything",
    "Notes": ""
  },
  {
    "Name": "Beckett Simonon",
    "Keywords": "Shoes, Crowdfunded",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.beckettsimonon.com/",
    "Notes": ""
  },
  {
    "Name": "Belief Moscow",
    "Keywords": "Everything, Streetwear",
    "Price": "$$$-$$$$",
    "Country": "Russia",
    "URL": "http://beliefmoscow.com/",
    "Notes": ""
  },
  {
    "Name": "Benny Gold",
    "Keywords": "Skate, Streetwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "https://bennygold.com/",
    "Notes": ""
  },
  {
    "Name": "Bergdorf Goodman",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.bergdorfgoodman.com/index.jsp",
    "Notes": ""
  },
  {
    "Name": "Bethnals",
    "Keywords": "Indigo Stuff, General",
    "Price": "$$",
    "Country": "UK",
    "URL": "http://bethnals.com/",
    "Notes": ""
  },
  {
    "Name": "Blanc",
    "Keywords": "Basics",
    "Price": "$$",
    "Country": "Netherlands",
    "URL": "https://www.blanc-essentials.com/",
    "Notes": ""
  },
  {
    "Name": "Blends",
    "Keywords": "Streetwear, Sneakers",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.blendsus.com/",
    "Notes": ""
  },
  {
    "Name": "Blue Button Shop",
    "Keywords": "Denim, Americana",
    "Price": "$$-$$$",
    "Country": "Canada",
    "URL": "https://www.bluebuttonshop.com/bluebutton/splash.php",
    "Notes": ""
  },
  {
    "Name": "Blue in Green",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://blueingreensoho.com/",
    "Notes": "Lots of Japanese brands."
  },
  {
    "Name": "Blue Owl",
    "Keywords": "Denim, Americana",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "https://www.blueowl.us/",
    "Notes": ""
  },
  {
    "Name": "Bluefly",
    "Keywords": "Designer",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://www.bluefly.com/",
    "Notes": ""
  },
  {
    "Name": "Bodega",
    "Keywords": "Streetwear",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://shop.bdgastore.com/",
    "Notes": ""
  },
  {
    "Name": "Bonobos",
    "Keywords": "General",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.bonobos.com/",
    "Notes": ""
  },
  {
    "Name": "Brandblack",
    "Keywords": "Sneakers",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://brandblack.com/",
    "Notes": ""
  },
  {
    "Name": "Bristol",
    "Keywords": "Casual, Streetwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://brstl.la/",
    "Notes": ""
  },
  {
    "Name": "Brooks Brothers",
    "Keywords": "Shirts, Menswear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.brooksbrothers.com/",
    "Notes": ""
  },
  {
    "Name": "Browns Fashion",
    "Keywords": "Designer, Everything",
    "Price": "$$$-$$$$",
    "Country": "UK",
    "URL": "https://www.brownsfashion.com/man",
    "Notes": ""
  },
  {
    "Name": "Brut",
    "Keywords": "Vintage",
    "Price": "$$",
    "Country": "France",
    "URL": "http://brut-clothing.com/",
    "Notes": ""
  },
  {
    "Name": "Buck Mason",
    "Keywords": "Basics, General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.buckmason.com/",
    "Notes": ""
  },
  {
    "Name": "Bureau",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "Ireland",
    "URL": "https://www.thebureaubelfast.com/shop/",
    "Notes": ""
  },
  {
    "Name": "By George",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://bygeorgeaustin.com/",
    "Notes": ""
  },
  {
    "Name": "By H",
    "Keywords": "Monochrome",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.byhnewyork.com/products",
    "Notes": ""
  },
  {
    "Name": "C by Loredana Pinasco",
    "Keywords": "Monochrome, Streetwear",
    "Price": "$$",
    "Country": "Italy",
    "URL": "https://cbyloredanapinasco.com/en/",
    "Notes": ""
  },
  {
    "Name": "C2H4",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.c2h4.us/",
    "Notes": ""
  },
  {
    "Name": "Carhartt WIP",
    "Keywords": "General",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://shop.carhartt-wip.com/view/us/home",
    "Notes": ""
  },
  {
    "Name": "Carrier Co.",
    "Keywords": "Workwear, Bags",
    "Price": "$$",
    "Country": "UK",
    "URL": "http://www.carriercompany.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Carven",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "France",
    "URL": "http://www.carven.com/en_fr/",
    "Notes": ""
  },
  {
    "Name": "Casbia",
    "Keywords": "Sneakers",
    "Price": "$$$",
    "Country": "Italy",
    "URL": "http://www.casbia.com/e-shop/",
    "Notes": ""
  },
  {
    "Name": "CDLP",
    "Keywords": "Underwear",
    "Price": "$$",
    "Country": "Sweden",
    "URL": "http://cdlp.com/shop/",
    "Notes": ""
  },
  {
    "Name": "Celect",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.thecelect.com/",
    "Notes": ""
  },
  {
    "Name": "Chapter",
    "Keywords": "Monochrome, Casual",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://shop.joinchapter.com/",
    "Notes": ""
  },
  {
    "Name": "Charles Tyrwhitt",
    "Keywords": "Shirts",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.ctshirts.com/",
    "Notes": "Frequent Sales, Buy On-Sale"
  },
  {
    "Name": "CHCM",
    "Keywords": "Designer",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.chcmshop.com/",
    "Notes": ""
  },
  {
    "Name": "Chichi Masion",
    "Keywords": "Streetwear",
    "Price": "$$",
    "Country": "",
    "URL": "http://www.chichimaison.com/",
    "Notes": "Couldn't find location information anywhere."
  },
  {
    "Name": "Christian Kimber",
    "Keywords": "Sneakers, Accessories",
    "Price": "$$$",
    "Country": "Australia",
    "URL": "http://christiankimber.com/",
    "Notes": ""
  },
  {
    "Name": "Clae",
    "Keywords": "Sneakers",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.clae.com/",
    "Notes": ""
  },
  {
    "Name": "Classroom",
    "Keywords": "Everything",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://theclassroomshop.com/",
    "Notes": ""
  },
  {
    "Name": "Clothing Brigade",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.clothingbrigade.com/",
    "Notes": ""
  },
  {
    "Name": "Club 75",
    "Keywords": "Streetwear",
    "Price": "$$",
    "Country": "France",
    "URL": "http://www.club75.fr/club-75",
    "Notes": ""
  },
  {
    "Name": "Club Monaco",
    "Keywords": "General",
    "Price": "$$",
    "Country": "Multiple",
    "URL": "http://www.clubmonaco.com/category/index.jsp?categoryId=12243591&ab=global_men",
    "Notes": ""
  },
  {
    "Name": "Cncpts International",
    "Keywords": "Footwear, Streetwear, Activewear",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://www.cncptsintl.com/",
    "Notes": ""
  },
  {
    "Name": "Coggles",
    "Keywords": "Designer, Everything",
    "Price": "$-$$$",
    "Country": "UK",
    "URL": "http://www.coggles.com/man.list",
    "Notes": "Only a few cheap brands like Levi's and Herschel. Mostly in the $$$ price bracket."
  },
  {
    "Name": "Cole Haan",
    "Keywords": "Shoes",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://www.colehaan.com/",
    "Notes": ""
  },
  {
    "Name": "Combatent Gentleman",
    "Keywords": "Suits, Menswear",
    "Price": "$",
    "Country": "USA",
    "URL": "https://combatgent.com/",
    "Notes": ""
  },
  {
    "Name": "Commissary",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://commissarystores.com/",
    "Notes": ""
  },
  {
    "Name": "Common",
    "Keywords": "Streetwear, Monochrome",
    "Price": "$$$",
    "Country": "Canada",
    "URL": "https://www.commonshop.com/",
    "Notes": ""
  },
  {
    "Name": "Commonplace",
    "Keywords": "Accessories, Lifestyle",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://commonplaceshop.com/",
    "Notes": ""
  },
  {
    "Name": "Concept",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://www.conceptshop.com.hk/",
    "Notes": ""
  },
  {
    "Name": "Context",
    "Keywords": "Everything",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.contextclothing.com/",
    "Notes": ""
  },
  {
    "Name": "COS",
    "Keywords": "Minimal, General",
    "Price": "$$",
    "Country": "Multiple",
    "URL": "http://www.cosstores.com/",
    "Notes": ""
  },
  {
    "Name": "Cosmotog",
    "Keywords": "General",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://www.cosmotog.com/",
    "Notes": ""
  },
  {
    "Name": "Cotton On",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://shop.cottonon.com/",
    "Notes": ""
  },
  {
    "Name": "Couverture and the Garbstore",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://couvertureandthegarbstore.com/",
    "Notes": ""
  },
  {
    "Name": "CQP",
    "Keywords": "Sneakers",
    "Price": "$$$",
    "Country": "Sweden",
    "URL": "http://www.c-qp.com/",
    "Notes": ""
  },
  {
    "Name": "Craft Atlantic",
    "Keywords": "Minimal, General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.craftatlantic.com/",
    "Notes": ""
  },
  {
    "Name": "Curated",
    "Keywords": "Militaristic, Streetwear",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://www.curatedatl.com/",
    "Notes": ""
  },
  {
    "Name": "CXX",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.thecxx.com/",
    "Notes": ""
  },
  {
    "Name": "Dana Lee",
    "Keywords": "General",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.danaleenewyork.com/",
    "Notes": ""
  },
  {
    "Name": "Daniel Patrick",
    "Keywords": "Streetwear, Militaristic",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://shop.danielpatrick.net/",
    "Notes": ""
  },
  {
    "Name": "Darklands",
    "Keywords": "Designer, All-Black (tentative keyword)",
    "Price": "$$$-$$$$",
    "Country": "Germany",
    "URL": "http://www.darklandsberlin.com/site/",
    "Notes": ""
  },
  {
    "Name": "David Naman",
    "Keywords": "General",
    "Price": "$$",
    "Country": "Italy",
    "URL": "http://www.davidnaman.com/",
    "Notes": ""
  },
  {
    "Name": "Ddugoff",
    "Keywords": "General, Casual",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://shop.ddugoff.com/",
    "Notes": ""
  },
  {
    "Name": "Denimio",
    "Keywords": "Denim, Americana, General",
    "Price": "$$-$$$",
    "Country": "Japan",
    "URL": "https://www.denimio.com/",
    "Notes": "Free worldwide shipping"
  },
  {
    "Name": "Descendant of Thieves",
    "Keywords": "Business Casual",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://descendantofthieves.com/",
    "Notes": ""
  },
  {
    "Name": "Diverse Web",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://www.diverse-web.com/",
    "Notes": ""
  },
  {
    "Name": "Dope Factory",
    "Keywords": "Everything, Designer",
    "Price": "$-$$$$",
    "Country": "Sardinia, Italy",
    "URL": "http://www.dope-factory.com/",
    "Notes": ""
  },
  {
    "Name": "Dot Comme",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "Australia",
    "URL": "https://www.dotcomme.net/",
    "Notes": ""
  },
  {
    "Name": "Dover Street Market",
    "Keywords": "Designer, Streetwear",
    "Price": "$$$",
    "Country": "Multiple",
    "URL": "http://newyork.doverstreetmarket.com/",
    "Notes": ""
  },
  {
    "Name": "Drole de Monsier",
    "Keywords": "Casual",
    "Price": "$$$",
    "Country": "France",
    "URL": "http://droledemonsieur.com/e-shop/",
    "Notes": ""
  },
  {
    "Name": "Drop Dead",
    "Keywords": "Streetwear",
    "Price": "$$",
    "Country": "UK",
    "URL": "http://www.dropdead.co/",
    "Notes": ""
  },
  {
    "Name": "East Dane",
    "Keywords": "Everything",
    "Price": "$-$$$$",
    "Country": "Multiple",
    "URL": "http://www.eastdane.com/",
    "Notes": ""
  },
  {
    "Name": "Easy Money",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.shopeasymoney.com/",
    "Notes": ""
  },
  {
    "Name": "eBay",
    "Keywords": "Secondhand",
    "Price": "",
    "Country": "Multiple",
    "URL": "http://www.ebay.com/rpp/mens-clothing",
    "Notes": ""
  },
  {
    "Name": "Eleventh Hr",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "USA",
    "URL": "http://elvnthhr.com/",
    "Notes": ""
  },
  {
    "Name": "Elwood",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.elwoodclothing.com/",
    "Notes": ""
  },
  {
    "Name": "END",
    "Keywords": "Everything",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://www.endclothing.com/",
    "Notes": ""
  },
  {
    "Name": "Enfin Leve",
    "Keywords": "Streetwear",
    "Price": "$$$-$$$$",
    "Country": "",
    "URL": "http://store.enfinleve.com/",
    "Notes": ""
  },
  {
    "Name": "Enharmonic Tavern",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://shop.enharmonictavern.jp/",
    "Notes": ""
  },
  {
    "Name": "Epaulet",
    "Keywords": "Business Casual, General",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://epauletnewyork.com/",
    "Notes": ""
  },
  {
    "Name": "EPTM.",
    "Keywords": "Streetwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.eptmusa.com/",
    "Notes": ""
  },
  {
    "Name": "Erik Schedin",
    "Keywords": "Sneakers",
    "Price": "$$$",
    "Country": "Sweden",
    "URL": "http://erikschedin.com/",
    "Notes": ""
  },
  {
    "Name": "Everlane",
    "Keywords": "Basics",
    "Price": "$",
    "Country": "USA",
    "URL": "https://www.everlane.com/",
    "Notes": ""
  },
  {
    "Name": "Express",
    "Keywords": "General, Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://www.express.com/",
    "Notes": ""
  },
  {
    "Name": "Fair Ends",
    "Keywords": "Hats",
    "Price": "$",
    "Country": "USA",
    "URL": "http://fairends.com/",
    "Notes": ""
  },
  {
    "Name": "Fanmail",
    "Keywords": "Basics, Casual",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://fanmail-us.com/shop",
    "Notes": ""
  },
  {
    "Name": "Farfetch",
    "Keywords": "Designer",
    "Price": "$-$$$$",
    "Country": "Multiple",
    "URL": "http://www.farfetch.com/",
    "Notes": ""
  },
  {
    "Name": "Farida",
    "Keywords": "Designer",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://www.farida-apparel.com/",
    "Notes": ""
  },
  {
    "Name": "FDMTL",
    "Keywords": "Denim, Americana",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://store.catii.jp/",
    "Notes": ""
  },
  {
    "Name": "Feature Sneaker Boutique",
    "Keywords": "Sneakers, Everything",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "https://www.featuresneakerboutique.com/",
    "Notes": ""
  },
  {
    "Name": "Feit",
    "Keywords": "Shoes, Sneakers",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.feitdirect.com/",
    "Notes": ""
  },
  {
    "Name": "Filip Roth",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://filiproth.com/",
    "Notes": ""
  },
  {
    "Name": "Filling Pieces",
    "Keywords": "Sneakers",
    "Price": "$$$",
    "Country": "Netherlands",
    "URL": "https://www.fillingpieces.com/",
    "Notes": ""
  },
  {
    "Name": "Fingers Crossed",
    "Keywords": "Casual, Streetwear",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://www.thefingerscrossed.com/shop/",
    "Notes": ""
  },
  {
    "Name": "Firmament",
    "Keywords": "Streetwear, Accessories, Lifestyle",
    "Price": "$$-$$$",
    "Country": "Germany",
    "URL": "http://www.firmamentberlin.com/store.php",
    "Notes": ""
  },
  {
    "Name": "Folk",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "UK",
    "URL": "https://www.folkclothing.com/men",
    "Notes": ""
  },
  {
    "Name": "Forever 21",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://www.forever21.com/",
    "Notes": ""
  },
  {
    "Name": "Forty Percents Against Rights",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://www.fparmg.com/",
    "Notes": ""
  },
  {
    "Name": "Fott",
    "Keywords": "Sneakers",
    "Price": "$-$$",
    "Country": "Russia",
    "URL": "http://fott.ru/",
    "Notes": ""
  },
  {
    "Name": "Four Horsemen",
    "Keywords": "Streetwear, Casual",
    "Price": "$$-$$$",
    "Country": "Canada",
    "URL": "http://www.fourhorsemen.ca/",
    "Notes": ""
  },
  {
    "Name": "Frances May",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.francesmay.com/",
    "Notes": ""
  },
  {
    "Name": "Frank and Oak",
    "Keywords": "General",
    "Price": "$",
    "Country": "Canada",
    "URL": "https://www.frankandoak.com/",
    "Notes": ""
  },
  {
    "Name": "Freaks Store",
    "Keywords": "General",
    "Price": "$$-$$$",
    "Country": "Japan",
    "URL": "http://www.ec.freaksstore.com/",
    "Notes": ""
  },
  {
    "Name": "Freeman",
    "Keywords": "Americana",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://freemanseattle.com/",
    "Notes": ""
  },
  {
    "Name": "Freeman's Sporting Club",
    "Keywords": "Americana",
    "Price": "$$$",
    "Country": "USA, Japan",
    "URL": "http://freemanssportingclub.com/",
    "Notes": ""
  },
  {
    "Name": "Frenn",
    "Keywords": "General",
    "Price": "$$",
    "Country": "Finland",
    "URL": "http://www.frenncompany.com/",
    "Notes": ""
  },
  {
    "Name": "Frye",
    "Keywords": "Boots, Shoes",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.thefryecompany.com/mens",
    "Notes": "Don't buy at retail price."
  },
  {
    "Name": "Further",
    "Keywords": "",
    "Price": "$$$",
    "Country": "Japan",
    "URL": "http://further-online-store.com/",
    "Notes": ""
  },
  {
    "Name": "FWRD",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.fwrd.com/?d=Mens&navsrc=global",
    "Notes": ""
  },
  {
    "Name": "Gap",
    "Keywords": "General",
    "Price": "$",
    "Country": "",
    "URL": "http://www.gap.com/",
    "Notes": "Stocks tall sizes."
  },
  {
    "Name": "Garmentory",
    "Keywords": "General",
    "Price": "$$",
    "Country": "USA, Canada",
    "URL": "http://www.garmentory.com/",
    "Notes": ""
  },
  {
    "Name": "General Quarters",
    "Keywords": "Americana",
    "Price": "$$-$$$",
    "Country": "USA",
    "URL": "http://generalquartersstore.com/",
    "Notes": ""
  },
  {
    "Name": "Gentry NYC",
    "Keywords": "Everything",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.gentrynyc.com/",
    "Notes": ""
  },
  {
    "Name": "Gilt",
    "Keywords": "Discount, Everything",
    "Price": "$-$$$$",
    "Country": "USA",
    "URL": "http://www.gilt.com/",
    "Notes": ""
  },
  {
    "Name": "Goodhood",
    "Keywords": "Streetwear, General",
    "Price": "$$-$$$",
    "Country": "UK",
    "URL": "http://goodhoodstore.com/",
    "Notes": ""
  },
  {
    "Name": "Grailed",
    "Keywords": "Secondhand",
    "Price": "$-$$$$",
    "Country": "Multiple",
    "URL": "https://www.grailed.com/",
    "Notes": ""
  },
  {
    "Name": "Gravitypope",
    "Keywords": "Footwear, General",
    "Price": "$$-$$$$",
    "Country": "Canada",
    "URL": "http://www.gravitypope.com/",
    "Notes": ""
  },
  {
    "Name": "Greats",
    "Keywords": "Sneakers, Footwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.greats.com/",
    "Notes": ""
  },
  {
    "Name": "Guerilla Group",
    "Keywords": "Techwear",
    "Price": "$$$",
    "Country": "",
    "URL": "http://www.guerrilla-group.co/",
    "Notes": ""
  },
  {
    "Name": "Gustin",
    "Keywords": "Americana, Crowdfunded",
    "Price": "$$",
    "Country": "USA",
    "URL": "https://www.weargustin.com/",
    "Notes": ""
  },
  {
    "Name": "Guyi Consignment",
    "Keywords": "Consignment, Secondhand",
    "Price": "",
    "Country": "Japan",
    "URL": "http://guyiconsignment.com/",
    "Notes": ""
  },
  {
    "Name": "H Lorenzo",
    "Keywords": "Designer, Everything",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://shop.hlorenzo.com/",
    "Notes": ""
  },
  {
    "Name": "H&M",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "https://www.hm.com/us/",
    "Notes": ""
  },
  {
    "Name": "Harmony",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "France",
    "URL": "http://www.harmony-paris.com/en/collection-homme.html",
    "Notes": ""
  },
  {
    "Name": "Have a Good Time",
    "Keywords": "Streetwear",
    "Price": "$$",
    "Country": "Japan",
    "URL": "http://shop.have-a-goodtime.com/",
    "Notes": ""
  },
  {
    "Name": "Haven",
    "Keywords": "Everything",
    "Price": "$$$-$$$$",
    "Country": "Canada",
    "URL": "http://havenshop.ca/",
    "Notes": ""
  },
  {
    "Name": "Hazel 21",
    "Keywords": "Streetwear",
    "Price": "$-$$",
    "Country": "",
    "URL": "http://hazel21.com/en/",
    "Notes": ""
  },
  {
    "Name": "Hesperios",
    "Keywords": "Knitwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "https://www.hesperios.com/",
    "Notes": ""
  },
  {
    "Name": "The Hill-Side",
    "Keywords": "Americana, General",
    "Price": "$-$$",
    "Country": "USA",
    "URL": "https://thehill-side.com/",
    "Notes": ""
  },
  {
    "Name": "Hip Store",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://thehipstore.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Horisaki",
    "Keywords": "Brimmed Hats",
    "Price": "",
    "Country": "Sweden",
    "URL": "http://horisaki.com/index.html",
    "Notes": ""
  },
  {
    "Name": "HUF",
    "Keywords": "Skate, Streetwear",
    "Price": "",
    "Country": "USA",
    "URL": "http://store.hufworldwide.com/",
    "Notes": ""
  },
  {
    "Name": "Huffer",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "New Zealand",
    "URL": "http://www.huffer.co.nz/",
    "Notes": ""
  },
  {
    "Name": "Human Scales",
    "Keywords": "General",
    "Price": "",
    "Country": "Sweden",
    "URL": "http://shop.humanscales.se/",
    "Notes": ""
  },
  {
    "Name": "Hunting Ensemble",
    "Keywords": "Designer, General, Everything",
    "Price": "",
    "Country": "Netherlands",
    "URL": "https://www.thehuntingensemble.nl/",
    "Notes": ""
  },
  {
    "Name": "Hut",
    "Keywords": "Everything, Designer",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.thehut.com/catalogue/men.list",
    "Notes": ""
  },
  {
    "Name": "Hypebeast",
    "Keywords": "Streetwear, Everything",
    "Price": "",
    "Country": "USA",
    "URL": "http://hbx.com/",
    "Notes": ""
  },
  {
    "Name": "Hypland",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.hypland.com/",
    "Notes": ""
  },
  {
    "Name": "I Love Ugly",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "New Zealand",
    "URL": "https://www.iloveugly.com/",
    "Notes": ""
  },
  {
    "Name": "Idle Man",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://theidleman.com/",
    "Notes": ""
  },
  {
    "Name": "IISE",
    "Keywords": "Backpacks, Streetwear",
    "Price": "",
    "Country": "Korea",
    "URL": "http://www.ii-se.co/",
    "Notes": ""
  },
  {
    "Name": "Incu",
    "Keywords": "Everything, Designer",
    "Price": "",
    "Country": "Australia",
    "URL": "https://www.incu.com/",
    "Notes": ""
  },
  {
    "Name": "Independence Chicago",
    "Keywords": "Americana",
    "Price": "",
    "Country": "USA",
    "URL": "http://independence-chicago.com/",
    "Notes": ""
  },
  {
    "Name": "Index",
    "Keywords": "Techwear",
    "Price": "",
    "Country": "Canada",
    "URL": "https://indexamo.com/",
    "Notes": ""
  },
  {
    "Name": "Ink",
    "Keywords": "Designer",
    "Price": "",
    "Country": "China",
    "URL": "https://www.ink-clothing.com/en/main.php",
    "Notes": ""
  },
  {
    "Name": "Iro",
    "Keywords": "General,",
    "Price": "",
    "Country": "France",
    "URL": "http://www.iroparis.com/",
    "Notes": "SLP Aesthetic"
  },
  {
    "Name": "Isaora",
    "Keywords": "Techwear",
    "Price": "",
    "Country": "USA",
    "URL": "https://www.isaora.com/",
    "Notes": ""
  },
  {
    "Name": "J. Crew",
    "Keywords": "T I M E L E S S, General",
    "Price": "$",
    "Country": "USA",
    "URL": "https://www.jcrew.com/",
    "Notes": "Stocks tall sizes."
  },
  {
    "Name": "J. Crew Factory",
    "Keywords": "General",
    "Price": "$",
    "Country": "USA",
    "URL": "http://factory.jcrew.com/",
    "Notes": ""
  },
  {
    "Name": "Jack Erwin",
    "Keywords": "Shoes, Footwear",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.jackerwin.com/",
    "Notes": ""
  },
  {
    "Name": "Joe Fresh",
    "Keywords": "General",
    "Price": "$",
    "Country": "Canada",
    "URL": "https://www.joefresh.com/us/",
    "Notes": ""
  },
  {
    "Name": "John Elliott",
    "Keywords": "Streetwear, Basics",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.johnelliott.co/",
    "Notes": ""
  },
  {
    "Name": "Jomers",
    "Keywords": "Business Casual",
    "Price": "$",
    "Country": "USA",
    "URL": "https://jomers.com/",
    "Notes": ""
  },
  {
    "Name": "Joyrich",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "Multiple",
    "URL": "http://www.joyrichstore.com/",
    "Notes": ""
  },
  {
    "Name": "Kamakura",
    "Keywords": "Shirts",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.kamakurashirts.net/shop/default.aspx",
    "Notes": ""
  },
  {
    "Name": "Kennedy",
    "Keywords": "Denim, Basics",
    "Price": "",
    "Country": "USA",
    "URL": "http://kennedydenim.us/",
    "Notes": ""
  },
  {
    "Name": "Kestin Hare",
    "Keywords": "General, Basics",
    "Price": "",
    "Country": "UK",
    "URL": "https://kestinhare.com/",
    "Notes": ""
  },
  {
    "Name": "KHND",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "Sweden",
    "URL": "http://khndstudios.com/",
    "Notes": ""
  },
  {
    "Name": "Kids of the Future",
    "Keywords": "Streetwear",
    "Price": "$$$",
    "Country": "USA",
    "URL": "http://www.thekidsofthefuture.com/",
    "Notes": ""
  },
  {
    "Name": "Kikonobu",
    "Keywords": "Designer, General",
    "Price": "",
    "Country": "Japan",
    "URL": "http://kikunobu.shop-pro.jp/",
    "Notes": ""
  },
  {
    "Name": "Killspencer",
    "Keywords": "Bags, Leather Goods",
    "Price": "",
    "Country": "USA",
    "URL": "http://killspencer.com/",
    "Notes": ""
  },
  {
    "Name": "Kith",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "USA",
    "URL": "http://kithnyc.com/",
    "Notes": ""
  },
  {
    "Name": "Kneyew",
    "Keywords": "Streetwear, Basics",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.knyew.com/",
    "Notes": ""
  },
  {
    "Name": "Knickerbocker Mfg",
    "Keywords": "Hats, Casual, Basics",
    "Price": "",
    "Country": "USA",
    "URL": "http://knickerbockermfg.co/",
    "Notes": ""
  },
  {
    "Name": "Koromo",
    "Keywords": "General",
    "Price": "",
    "Country": "Japan",
    "URL": "http://shop.koromo-kyoto.com/",
    "Notes": ""
  },
  {
    "Name": "Land's End",
    "Keywords": "General",
    "Price": "$",
    "Country": "USA",
    "URL": "http://www.landsend.com/",
    "Notes": "Stocks tall sizes."
  },
  {
    "Name": "Landlord",
    "Keywords": "Casual",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.landlordnewyork.com/",
    "Notes": ""
  },
  {
    "Name": "Layer Co.",
    "Keywords": "",
    "Price": "",
    "Country": "South Korea",
    "URL": "http://liful.co.kr/",
    "Notes": ""
  },
  {
    "Name": "Lazy Oaf",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.lazyoaf.com/",
    "Notes": ""
  },
  {
    "Name": "Le Coq Sportif",
    "Keywords": "",
    "Price": "",
    "Country": "France",
    "URL": "http://www.lecoqsportif.com/uk-en/e-shop/shoes-man",
    "Notes": ""
  },
  {
    "Name": "Lemaire",
    "Keywords": "Designer",
    "Price": "",
    "Country": "France",
    "URL": "http://www.lemaire.fr/",
    "Notes": ""
  },
  {
    "Name": "Lentrian",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://lentrian.com/",
    "Notes": ""
  },
  {
    "Name": "Les Geometries",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.lesgeometries.com/",
    "Notes": ""
  },
  {
    "Name": "Levis",
    "Keywords": "Denim, Americana, General",
    "Price": "",
    "Country": "USA",
    "URL": "http://us.levi.com/",
    "Notes": ""
  },
  {
    "Name": "Libertine Libertine",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://libertine-libertine.com/",
    "Notes": ""
  },
  {
    "Name": "Lifted Anchors",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://liftedanchors.com/",
    "Notes": ""
  },
  {
    "Name": "Little Burgundy",
    "Keywords": "Boots, Shoes",
    "Price": "",
    "Country": "",
    "URL": "http://www.littleburgundyshoes.com/",
    "Notes": ""
  },
  {
    "Name": "LL Bean",
    "Keywords": "General, Americana",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.llbean.com/",
    "Notes": ""
  },
  {
    "Name": "LN-CC",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.ln-cc.com/en_en/home",
    "Notes": ""
  },
  {
    "Name": "Lodge Goods",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://lodgegoods.com/",
    "Notes": ""
  },
  {
    "Name": "Loreak Mendian",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.loreakmendian.com/?___store=english&___from_store=default",
    "Notes": ""
  },
  {
    "Name": "Low Key Ltd.",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.lowkeyltd.bigcartel.com/",
    "Notes": ""
  },
  {
    "Name": "Luisviaroma",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "Italy",
    "URL": "https://www.luisaviaroma.com/",
    "Notes": ""
  },
  {
    "Name": "Lululemon",
    "Keywords": "Activewear",
    "Price": "",
    "Country": "",
    "URL": "http://shop.lululemon.com/",
    "Notes": ""
  },
  {
    "Name": "Luxire",
    "Keywords": "Made-to-Measure",
    "Price": "$$",
    "Country": "",
    "URL": "https://custom.luxire.com/collections/home",
    "Notes": ""
  },
  {
    "Name": "M+RC Noir",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://mrcnoir.bigcartel.com/",
    "Notes": ""
  },
  {
    "Name": "m0851",
    "Keywords": "Bags, Luxury Leather Goods",
    "Price": "",
    "Country": "",
    "URL": "https://www.m0851.com/store/m0_usd_en/",
    "Notes": ""
  },
  {
    "Name": "Maas and Stacks",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.maasandstacks.com/",
    "Notes": ""
  },
  {
    "Name": "Machus",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.machusonline.com/",
    "Notes": ""
  },
  {
    "Name": "Magic Stick",
    "Keywords": "Japanese Streetwear",
    "Price": "",
    "Country": "Japan",
    "URL": "https://magicstick.stores.jp/",
    "Notes": ""
  },
  {
    "Name": "Maharishi",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.maharishistore.com/",
    "Notes": ""
  },
  {
    "Name": "Maiden Noir",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.maidennoir.com/shop",
    "Notes": ""
  },
  {
    "Name": "Makr",
    "Keywords": "Wallets, Accessories",
    "Price": "",
    "Country": "",
    "URL": "https://makr.com/",
    "Notes": ""
  },
  {
    "Name": "Mango",
    "Keywords": "General",
    "Price": "",
    "Country": "",
    "URL": "https://shop.mango.com/",
    "Notes": ""
  },
  {
    "Name": "Maniere De Voir",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.manieredevoir.com/",
    "Notes": ""
  },
  {
    "Name": "Margaret Howell",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.margarethowell.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Massimo Dutti",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.massimodutti.com/",
    "Notes": ""
  },
  {
    "Name": "Menlook",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.menlook.com/us/Home",
    "Notes": ""
  },
  {
    "Name": "Mercer",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://merceramsterdam.com/collection",
    "Notes": ""
  },
  {
    "Name": "Mevyn",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://meyvnshop.com/",
    "Notes": ""
  },
  {
    "Name": "Milkmade",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.milkmade.us/",
    "Notes": ""
  },
  {
    "Name": "Misbhv",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://misbhv.com/shop/men.html",
    "Notes": ""
  },
  {
    "Name": "Mister Freedom",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.misterfreedom.com/index.html",
    "Notes": ""
  },
  {
    "Name": "MKI",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.mkistore.co.uk/index.php",
    "Notes": ""
  },
  {
    "Name": "Moc-O",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://store.moc-o.com/",
    "Notes": ""
  },
  {
    "Name": "Modern Day Madness",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://moderndaymadness.com/products",
    "Notes": ""
  },
  {
    "Name": "Modern Tailor",
    "Keywords": "Made-to-Measure",
    "Price": "",
    "Country": "",
    "URL": "http://moderntailor.com/",
    "Notes": ""
  },
  {
    "Name": "Mohawk General Store",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.mohawkgeneralstore.com/",
    "Notes": ""
  },
  {
    "Name": "Mollusk",
    "Keywords": "",
    "Price": "",
    "Country": "USA",
    "URL": "http://mollusksurfshop.com/",
    "Notes": ""
  },
  {
    "Name": "Moncler",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.moncler.com/gb/us/",
    "Notes": ""
  },
  {
    "Name": "Moonstar",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.moonstar-onlineshop.com/",
    "Notes": ""
  },
  {
    "Name": "Moreporks",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://moreporks.com/",
    "Notes": ""
  },
  {
    "Name": "Morrison",
    "Keywords": "Knitwear, Everything",
    "Price": "",
    "Country": "Belgium",
    "URL": "http://www.morrison.be/",
    "Notes": ""
  },
  {
    "Name": "Mr. Completely",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://mrcompletelystore.com/",
    "Notes": ""
  },
  {
    "Name": "Mr. Porter",
    "Keywords": "Designer",
    "Price": "$$$",
    "Country": "",
    "URL": "http://www.mrporter.com/en-us/?spinlogo=1",
    "Notes": ""
  },
  {
    "Name": "Muji",
    "Keywords": "Basics, Lifestyle",
    "Price": "",
    "Country": "",
    "URL": "http://www.muji.us/store/apparel/men-s-clothing.html",
    "Notes": ""
  },
  {
    "Name": "Multee",
    "Keywords": "Basics",
    "Price": "",
    "Country": "",
    "URL": "http://multeeproject.com/collections/all",
    "Notes": ""
  },
  {
    "Name": "Muttonhead",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.muttonheadstore.com/",
    "Notes": ""
  },
  {
    "Name": "My Habit",
    "Keywords": "Discount",
    "Price": "",
    "Country": "",
    "URL": "http://www.myhabit.com/#page=g&dept=men&ref=qd_nav_tab_men",
    "Notes": ""
  },
  {
    "Name": "Naissance",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.naissance-tokyo.com/",
    "Notes": ""
  },
  {
    "Name": "Nanamica",
    "Keywords": "Japanese, General, Techwear",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.nanamica.com/shopping/index.php",
    "Notes": ""
  },
  {
    "Name": "Nautica",
    "Keywords": "",
    "Price": "$",
    "Country": "",
    "URL": "http://www.nautica.com/?locale=en_US",
    "Notes": ""
  },
  {
    "Name": "Need Supply Co",
    "Keywords": "Everything",
    "Price": "",
    "Country": "",
    "URL": "http://needsupply.com/",
    "Notes": ""
  },
  {
    "Name": "Needs and Wants",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://needsandwantsstudios.com/",
    "Notes": ""
  },
  {
    "Name": "Neigbour",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.shopneighbour.com/",
    "Notes": ""
  },
  {
    "Name": "Nepenthes",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://nepenthes.shop-pro.jp/",
    "Notes": ""
  },
  {
    "Name": "New Originals",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.theneworiginals.eu/",
    "Notes": ""
  },
  {
    "Name": "Nid De Guepes",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://nid-de-guepes.com/",
    "Notes": ""
  },
  {
    "Name": "Nitty Gritty",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.nittygrittystore.com/",
    "Notes": ""
  },
  {
    "Name": "No Man Walks Alone",
    "Keywords": "Menswear, General",
    "Price": "",
    "Country": "",
    "URL": "http://www.nomanwalksalone.com/index.php/",
    "Notes": ""
  },
  {
    "Name": "Noah",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://noahny.com/",
    "Notes": ""
  },
  {
    "Name": "Nomad",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://nomadshop.net/",
    "Notes": ""
  },
  {
    "Name": "Nomad Atelier",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "https://www.nomadatelier.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Nordstrom",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.nordstrom.com/c/men?dept=8000001&origin=topnav",
    "Notes": ""
  },
  {
    "Name": "Nordstrom Rack",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.nordstromrack.com/",
    "Notes": ""
  },
  {
    "Name": "Norse Store",
    "Keywords": "Minimal, General",
    "Price": "",
    "Country": "",
    "URL": "http://www.norsestore.com/",
    "Notes": ""
  },
  {
    "Name": "North American Quality Purveyors",
    "Keywords": "Americana",
    "Price": "",
    "Country": "Canada",
    "URL": "https://shopnorthamerican.com/",
    "Notes": ""
  },
  {
    "Name": "Not Just a Label",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.notjustalabel.com/",
    "Notes": ""
  },
  {
    "Name": "Notre",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.notre-shop.com/",
    "Notes": ""
  },
  {
    "Name": "Nudie Jeans",
    "Keywords": "Denim",
    "Price": "",
    "Country": "",
    "URL": "http://www.nudiejeans.com/shop/jeans/s/1",
    "Notes": ""
  },
  {
    "Name": "Number 3",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.number3store.com/",
    "Notes": ""
  },
  {
    "Name": "Nummb Workshop",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.numbworkshop.com/",
    "Notes": ""
  },
  {
    "Name": "Oak",
    "Keywords": "",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.oaknyc.com/",
    "Notes": ""
  },
  {
    "Name": "Obscura",
    "Keywords": "Lifestyle",
    "Price": "",
    "Country": "",
    "URL": "http://www.obscura-magazine.com/en/shop/?c=store",
    "Notes": ""
  },
  {
    "Name": "Odeur",
    "Keywords": "",
    "Price": "$$",
    "Country": "",
    "URL": "http://odeur.se/",
    "Notes": ""
  },
  {
    "Name": "Odin",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.odinnewyork.com/",
    "Notes": ""
  },
  {
    "Name": "Off Broadway",
    "Keywords": "Shoes, Discount",
    "Price": "",
    "Country": "",
    "URL": "https://www.offbroadwayshoes.com/",
    "Notes": ""
  },
  {
    "Name": "Oi Polloi",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.oipolloi.com/",
    "Notes": ""
  },
  {
    "Name": "Oki-Ni",
    "Keywords": "Designer",
    "Price": "",
    "Country": "",
    "URL": "https://www.oki-ni.com/",
    "Notes": ""
  },
  {
    "Name": "Olaf Hussein",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://store.olafhussein.com/collections/all",
    "Notes": ""
  },
  {
    "Name": "Old Navy",
    "Keywords": "Fast Fashion, General",
    "Price": "$",
    "Country": "",
    "URL": "http://oldnavy.gap.com/",
    "Notes": ""
  },
  {
    "Name": "Only",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://onlynylives.com/",
    "Notes": ""
  },
  {
    "Name": "Ontour",
    "Keywords": "",
    "Price": "",
    "Country": "Netherlands",
    "URL": "http://ontour.nl/",
    "Notes": ""
  },
  {
    "Name": "Open in Five",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://store.openninefive.com/",
    "Notes": ""
  },
  {
    "Name": "Opening Ceremony",
    "Keywords": "Streetwear, Designer",
    "Price": "",
    "Country": "",
    "URL": "http://www.openingceremony.us/",
    "Notes": ""
  },
  {
    "Name": "Orvis",
    "Keywords": "Americana, General",
    "Price": "",
    "Country": "",
    "URL": "http://www.orvis.com/",
    "Notes": ""
  },
  {
    "Name": "Other",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.other-shop.com/",
    "Notes": ""
  },
  {
    "Name": "Our Legacy",
    "Keywords": "Designer",
    "Price": "",
    "Country": "",
    "URL": "http://www.ourlegacy.se/",
    "Notes": ""
  },
  {
    "Name": "Outclass",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://outclass.ca/",
    "Notes": ""
  },
  {
    "Name": "Outdoor Voices",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.outdoorvoices.com/",
    "Notes": ""
  },
  {
    "Name": "Ovate",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://ovate.ca/",
    "Notes": ""
  },
  {
    "Name": "Pancho and Lefty",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://panchoandlefty.se/",
    "Notes": ""
  },
  {
    "Name": "Paper, Denim, and Cloth",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://paperdenimandcloth.com/collections/man",
    "Notes": ""
  },
  {
    "Name": "Parca Equipment Co",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://parcaequipmentco.com/",
    "Notes": ""
  },
  {
    "Name": "PARK-ing",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "Japan",
    "URL": "http://park-ing-ginza.com/",
    "Notes": ""
  },
  {
    "Name": "Paterson",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.patersonleague.com/",
    "Notes": ""
  },
  {
    "Name": "Peggs and Son",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.peggsandson.com/",
    "Notes": ""
  },
  {
    "Name": "Penfield",
    "Keywords": "Jackets",
    "Price": "",
    "Country": "",
    "URL": "http://penfield.com/",
    "Notes": ""
  },
  {
    "Name": "Percival",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.percivalclo.com/",
    "Notes": ""
  },
  {
    "Name": "PF Flyers",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "",
    "URL": "http://www.pfflyers.com/",
    "Notes": ""
  },
  {
    "Name": "Pieces Uniques",
    "Keywords": "",
    "Price": "",
    "Country": "France",
    "URL": "http://piecesuniques-paris.com/",
    "Notes": ""
  },
  {
    "Name": "Pistol Lake",
    "Keywords": "Basics",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.pistollake.com/collections/all",
    "Notes": ""
  },
  {
    "Name": "Poler",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.polerstuff.com/",
    "Notes": ""
  },
  {
    "Name": "Post Overalls",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.postoveralls.com/",
    "Notes": ""
  },
  {
    "Name": "Premium Co.",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.shop-premium.com/",
    "Notes": ""
  },
  {
    "Name": "Present",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://present-london.com/",
    "Notes": ""
  },
  {
    "Name": "Pretty Green",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.prettygreen.com/",
    "Notes": ""
  },
  {
    "Name": "Primury",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://primury.com/",
    "Notes": ""
  },
  {
    "Name": "Private Policy",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.privatepolicyny.com/",
    "Notes": ""
  },
  {
    "Name": "Prly",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.prlystore.com/products",
    "Notes": ""
  },
  {
    "Name": "Profound Co.",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://profoundco.com/",
    "Notes": ""
  },
  {
    "Name": "Proper Cloth",
    "Keywords": "Made-to-Measure",
    "Price": "",
    "Country": "USA",
    "URL": "https://propercloth.com/",
    "Notes": ""
  },
  {
    "Name": "Publish Brand",
    "Keywords": "Streetwear, General",
    "Price": "",
    "Country": "",
    "URL": "http://publishbrand.com/",
    "Notes": ""
  },
  {
    "Name": "Pyer Moss",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://pyermoss.com/",
    "Notes": ""
  },
  {
    "Name": "Qasimi",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.qasimi.com/",
    "Notes": ""
  },
  {
    "Name": "Rag & Bone",
    "Keywords": "",
    "Price": "$$",
    "Country": "",
    "URL": "http://www.rag-bone.com/",
    "Notes": ""
  },
  {
    "Name": "Ragtag",
    "Keywords": "Secondhand",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.ragtag.jp/",
    "Notes": ""
  },
  {
    "Name": "Rainmaker",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://rainmaker-kyoto.shop-pro.jp/",
    "Notes": ""
  },
  {
    "Name": "Rains",
    "Keywords": "Rain Jackets",
    "Price": "$",
    "Country": "",
    "URL": "http://www.rains.dk/",
    "Notes": ""
  },
  {
    "Name": "Rakuten Global - Men's Clothing",
    "Keywords": "Secondhand",
    "Price": "Varies",
    "Country": "",
    "URL": "http://global.rakuten.com/en/category/551177/?l-id=rgm_4852-en-navi-men",
    "Notes": ""
  },
  {
    "Name": "Rakuten Japan - Men's Clothing",
    "Keywords": "Secondhand",
    "Price": "Varies",
    "Country": "",
    "URL": "http://www.rakuten.co.jp/category/mensfashion/?l-id=top_normal_use_genre01",
    "Notes": ""
  },
  {
    "Name": "Rancourt",
    "Keywords": "Shoes",
    "Price": "$$",
    "Country": "USA",
    "URL": "http://www.rancourtandcompany.com/",
    "Notes": ""
  },
  {
    "Name": "Ransom Holding Co.",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "",
    "URL": "https://ransomholdingco.com/",
    "Notes": ""
  },
  {
    "Name": "Re-Porter",
    "Keywords": "",
    "Price": "",
    "Country": "Canada",
    "URL": "http://re-porter.ca/",
    "Notes": ""
  },
  {
    "Name": "Reigning Champ",
    "Keywords": "Sweatshirts, Basics",
    "Price": "$$",
    "Country": "Canada",
    "URL": "http://reigningchamp.com/",
    "Notes": ""
  },
  {
    "Name": "Represent",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://representclothing.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Revolve",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.revolveclothing.com/",
    "Notes": ""
  },
  {
    "Name": "Rhude",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.rh-ude.com/",
    "Notes": ""
  },
  {
    "Name": "Riccardi",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.riccardiboston.com/",
    "Notes": ""
  },
  {
    "Name": "Richard and Grace",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.richardandgrace.com/",
    "Notes": ""
  },
  {
    "Name": "River Island",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.riverisland.com/",
    "Notes": ""
  },
  {
    "Name": "Roden Gray",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://rodengray.com/",
    "Notes": ""
  },
  {
    "Name": "Ronin Division",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://www.ronindivision.com/",
    "Notes": ""
  },
  {
    "Name": "Roux",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://weareroux.com/shop",
    "Notes": ""
  },
  {
    "Name": "Royal Republiq",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "Netherlands",
    "URL": "http://www.royalrepubliq.com/",
    "Notes": ""
  },
  {
    "Name": "RPM West",
    "Keywords": "Denim",
    "Price": "",
    "Country": "",
    "URL": "http://rpmwest.com/",
    "Notes": ""
  },
  {
    "Name": "RRL",
    "Keywords": "Americana",
    "Price": "",
    "Country": "",
    "URL": "http://www.ralphlauren.com/shop/index.jsp?categoryId=11588650",
    "Notes": ""
  },
  {
    "Name": "Sak's Fifth Ave",
    "Keywords": "Designer",
    "Price": "$$$-$$$$",
    "Country": "USA",
    "URL": "http://www.saksfifthavenue.com/",
    "Notes": ""
  },
  {
    "Name": "Sandinista",
    "Keywords": "Basics",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.sndnst.com/store/top/",
    "Notes": ""
  },
  {
    "Name": "Sandro",
    "Keywords": "",
    "Price": "$$",
    "Country": "Multiple",
    "URL": "http://us.sandro-paris.com/en/mens/fall-collection/",
    "Notes": ""
  },
  {
    "Name": "Sasquatch Fabrix",
    "Keywords": "Japanese, Streetwear",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.sasquatchfabrix.com/",
    "Notes": ""
  },
  {
    "Name": "Saturdays",
    "Keywords": "Streetwear, General, Minimalist",
    "Price": "",
    "Country": "",
    "URL": "http://www.saturdaysnyc.com/",
    "Notes": ""
  },
  {
    "Name": "Save Khaki",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://savekhaki.com/",
    "Notes": ""
  },
  {
    "Name": "Scond Layer",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.secondlayer.us/",
    "Notes": ""
  },
  {
    "Name": "Scotch & Soda",
    "Keywords": "",
    "Price": "$",
    "Country": "",
    "URL": "http://webstore-us.scotch-soda.com/",
    "Notes": ""
  },
  {
    "Name": "SCRT",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://scrt.onl/",
    "Notes": ""
  },
  {
    "Name": "Sean Kelly",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.sean-kelly.us/",
    "Notes": ""
  },
  {
    "Name": "SEH Kelly",
    "Keywords": "Americana",
    "Price": "",
    "Country": "",
    "URL": "http://www.sehkelly.com/shop/",
    "Notes": ""
  },
  {
    "Name": "Self Edge",
    "Keywords": "Denim",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.selfedge.com/",
    "Notes": ""
  },
  {
    "Name": "Sifr",
    "Keywords": "Basics",
    "Price": "",
    "Country": "",
    "URL": "http://sifrsite.com/",
    "Notes": ""
  },
  {
    "Name": "Sisyphe",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.iamsisyphe.com/",
    "Notes": ""
  },
  {
    "Name": "Size",
    "Keywords": "",
    "Price": "UK",
    "Country": "",
    "URL": "https://www.size.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Slam Jam Socialism",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.slamjamsocialism.com/",
    "Notes": ""
  },
  {
    "Name": "Slou",
    "Keywords": "",
    "Price": "",
    "Country": "Portugal",
    "URL": "http://www.sloulisbon.com/en/",
    "Notes": ""
  },
  {
    "Name": "Sneakerboy",
    "Keywords": "",
    "Price": "",
    "Country": "Australia",
    "URL": "http://www.sneakerboy.com/",
    "Notes": ""
  },
  {
    "Name": "Sneakerboy",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.sneakersnstuff.com/",
    "Notes": ""
  },
  {
    "Name": "Snow Peak",
    "Keywords": "Activewear, Techwear",
    "Price": "",
    "Country": "",
    "URL": "http://snowpeak.com/",
    "Notes": ""
  },
  {
    "Name": "Sol-Sol",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://solsolmenswearstore.bigcartel.com/",
    "Notes": ""
  },
  {
    "Name": "Solestruck",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.solestruck.com/",
    "Notes": ""
  },
  {
    "Name": "Solovair",
    "Keywords": "Boots",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.solovair.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Son of a Stag",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.sonofastag.com/",
    "Notes": ""
  },
  {
    "Name": "Sophnet",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://store.soph.net/shop/",
    "Notes": ""
  },
  {
    "Name": "Sou-Sou",
    "Keywords": "",
    "Price": "",
    "Country": "USA",
    "URL": "http://www.sousouus.com/",
    "Notes": ""
  },
  {
    "Name": "Soulection",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://soulection.supply/",
    "Notes": ""
  },
  {
    "Name": "Soulland",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://soulland.com/",
    "Notes": ""
  },
  {
    "Name": "Spalwart",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "",
    "URL": "http://spalwart.com/home/",
    "Notes": ""
  },
  {
    "Name": "Spence",
    "Keywords": "Designer, Discount",
    "Price": "",
    "Country": "",
    "URL": "https://www.spenceclothing.com/",
    "Notes": ""
  },
  {
    "Name": "Spinns",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://www.spinns.jp/",
    "Notes": ""
  },
  {
    "Name": "Squad Co.",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.the-squad.co/collections",
    "Notes": ""
  },
  {
    "Name": "Ssense",
    "Keywords": "",
    "Price": "",
    "Country": "Canada",
    "URL": "https://www.ssense.com/",
    "Notes": ""
  },
  {
    "Name": "St-Die",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.st-die.com/",
    "Notes": ""
  },
  {
    "Name": "Stag Provisions",
    "Keywords": "Americana, General, Lifestyle",
    "Price": "",
    "Country": "",
    "URL": "http://stagprovisions.com/",
    "Notes": ""
  },
  {
    "Name": "Stampd",
    "Keywords": "Militaristic",
    "Price": "",
    "Country": "",
    "URL": "http://www.stampd.com/",
    "Notes": ""
  },
  {
    "Name": "Standard and Strange",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://standardandstrange.com/",
    "Notes": ""
  },
  {
    "Name": "Stevenson Overall Co",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.soc-la.com/",
    "Notes": ""
  },
  {
    "Name": "Stock Mfg",
    "Keywords": "Americana",
    "Price": "",
    "Country": "",
    "URL": "https://www.stockmfg.co/",
    "Notes": ""
  },
  {
    "Name": "Stoy",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://stoy.com/en/",
    "Notes": ""
  },
  {
    "Name": "Strike Mvmnt",
    "Keywords": "Sneakers, Activewear",
    "Price": "",
    "Country": "",
    "URL": "http://strike-mvmnt.com/",
    "Notes": ""
  },
  {
    "Name": "Style Creep",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.stylecreep.com/",
    "Notes": ""
  },
  {
    "Name": "Sunspel",
    "Keywords": "Basics",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.sunspel.com/us/",
    "Notes": ""
  },
  {
    "Name": "Superdenim",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.superdenim.com/",
    "Notes": ""
  },
  {
    "Name": "Superism",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.superism.co/collections/all",
    "Notes": ""
  },
  {
    "Name": "Supply Store",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "Australia",
    "URL": "http://www.supplystore.com.au/",
    "Notes": ""
  },
  {
    "Name": "Surf is Dead",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "",
    "URL": "http://surfisdead.com/",
    "Notes": ""
  },
  {
    "Name": "Suspension Point",
    "Keywords": "",
    "Price": "",
    "Country": "Canada",
    "URL": "http://suspensionpoint.ca/",
    "Notes": ""
  },
  {
    "Name": "SV",
    "Keywords": "",
    "Price": "",
    "Country": "Russia",
    "URL": "http://svmoscow.com/men/new",
    "Notes": ""
  },
  {
    "Name": "Tanner Goods",
    "Keywords": "Wallets, Belts, General",
    "Price": "",
    "Country": "",
    "URL": "http://www.tannergoods.com/",
    "Notes": ""
  },
  {
    "Name": "Taylor Stitch",
    "Keywords": "General",
    "Price": "",
    "Country": "",
    "URL": "https://www.taylorstitch.com/",
    "Notes": ""
  },
  {
    "Name": "The Common-Folk",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://thecommon-folk.com/?currency=USD",
    "Notes": ""
  },
  {
    "Name": "The Last Conspiracy",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.thelastconspiracy.com/collections/men",
    "Notes": ""
  },
  {
    "Name": "Theory",
    "Keywords": "Minimalist",
    "Price": "",
    "Country": "",
    "URL": "http://www.theory.com/",
    "Notes": ""
  },
  {
    "Name": "They",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://theynewyork.com/",
    "Notes": ""
  },
  {
    "Name": "Tie Bar",
    "Keywords": "Ties",
    "Price": "$",
    "Country": "",
    "URL": "http://www.thetiebar.com/",
    "Notes": ""
  },
  {
    "Name": "Todd Snyder",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.toddsnyder.com/",
    "Notes": ""
  },
  {
    "Name": "Tom Cridland",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.tomcridland.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Tonsure",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.tonsure.eu/",
    "Notes": ""
  },
  {
    "Name": "Topman",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://us.topman.com/webapp/wcs/stores/servlet/TopCategoriesDisplay?storeId=13051&catalogId=33059",
    "Notes": ""
  },
  {
    "Name": "Totokaelo",
    "Keywords": "Designer",
    "Price": "$$$",
    "Country": "",
    "URL": "http://totokaelo.com/",
    "Notes": ""
  },
  {
    "Name": "Tres Bien",
    "Keywords": "Designer, Streetwear(?)",
    "Price": "$$$",
    "Country": "",
    "URL": "http://tres-bien.com/",
    "Notes": ""
  },
  {
    "Name": "Trinitas",
    "Keywords": "Streetwear",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.trinitas-shop.com/",
    "Notes": ""
  },
  {
    "Name": "Tropiano",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.tropiano.co.com/tropiano-%7C-shop",
    "Notes": ""
  },
  {
    "Name": "Trove",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://shop.trove.co.jp/",
    "Notes": ""
  },
  {
    "Name": "Ubiq",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.ubiqlife.com/",
    "Notes": ""
  },
  {
    "Name": "Ugmonk",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://ugmonk.com/",
    "Notes": ""
  },
  {
    "Name": "Uncle Otis",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://uncleotis.com/",
    "Notes": ""
  },
  {
    "Name": "Unconditional",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.unconditional.uk.com/",
    "Notes": ""
  },
  {
    "Name": "Underated",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.underatedco.com/",
    "Notes": ""
  },
  {
    "Name": "Uniforms for the Dedicated",
    "Keywords": "Minimalist, Monochrome",
    "Price": "$$$",
    "Country": "Sweden",
    "URL": "http://uniformsforthededicated.com/",
    "Notes": ""
  },
  {
    "Name": "Union",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://store.unionlosangeles.com/",
    "Notes": ""
  },
  {
    "Name": "Unionmade Goods",
    "Keywords": "Americana",
    "Price": "",
    "Country": "",
    "URL": "http://unionmadegoods.com/",
    "Notes": ""
  },
  {
    "Name": "Uniqlo",
    "Keywords": "U N I Q L O, General",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://www.uniqlo.com/",
    "Notes": ""
  },
  {
    "Name": "Unis",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://unisnewyork.com/",
    "Notes": ""
  },
  {
    "Name": "United Arrows",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://store.united-arrows.co.jp/",
    "Notes": ""
  },
  {
    "Name": "United Stock Dry Goods",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://unitedstockdrygoods.com/",
    "Notes": ""
  },
  {
    "Name": "Universal Works",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "http://www.universalworks.co.uk/",
    "Notes": ""
  },
  {
    "Name": "Unknwn",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://shop.unknwn.com/",
    "Notes": ""
  },
  {
    "Name": "Unmade",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.unmade.com/",
    "Notes": ""
  },
  {
    "Name": "Up There",
    "Keywords": "",
    "Price": "",
    "Country": "Australia",
    "URL": "https://uptherestore.com/",
    "Notes": ""
  },
  {
    "Name": "Upstate Stock",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.upstatestock.com/",
    "Notes": ""
  },
  {
    "Name": "Urban Outfitters",
    "Keywords": "Fast Fasion",
    "Price": "",
    "Country": "",
    "URL": "http://www.urbanoutfitters.com/",
    "Notes": ""
  },
  {
    "Name": "Used Future",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.usedfutureeshop.com/",
    "Notes": ""
  },
  {
    "Name": "Vertice",
    "Keywords": "",
    "Price": "",
    "Country": "UK",
    "URL": "https://www.verticelondon.com/",
    "Notes": ""
  },
  {
    "Name": "Victor Athletics",
    "Keywords": "Activewear",
    "Price": "",
    "Country": "",
    "URL": "http://victorathletics.com/",
    "Notes": ""
  },
  {
    "Name": "Vier",
    "Keywords": "",
    "Price": "",
    "Country": "Belgium",
    "URL": "https://vierantwerp.com/",
    "Notes": ""
  },
  {
    "Name": "Viva",
    "Keywords": "",
    "Price": "",
    "Country": "South Korea",
    "URL": "http://www.vivastudio.co.kr/",
    "Notes": ""
  },
  {
    "Name": "Void",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://voidthebrand.com/",
    "Notes": ""
  },
  {
    "Name": "Vor",
    "Keywords": "Sneakers",
    "Price": "",
    "Country": "Germany",
    "URL": "https://vor.shoes/",
    "Notes": ""
  },
  {
    "Name": "Voyager",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.thevoyagershop.com/",
    "Notes": ""
  },
  {
    "Name": "W Concept",
    "Keywords": "Everything",
    "Price": "$$",
    "Country": "",
    "URL": "http://us.wconcept.com/",
    "Notes": ""
  },
  {
    "Name": "Wacko Maria Guilty Parties",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://wackomaria-paradisetokyo.co.jp/",
    "Notes": ""
  },
  {
    "Name": "Want Les Essentiels",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.wantlesessentiels.com/de_en/",
    "Notes": ""
  },
  {
    "Name": "Weekday",
    "Keywords": "Minimalist",
    "Price": "$",
    "Country": "UK",
    "URL": "http://shop.weekday.com/gb/",
    "Notes": ""
  },
  {
    "Name": "Weekend Casual",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.weekendcasual.com/",
    "Notes": ""
  },
  {
    "Name": "Welter Shelter",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.weltershelter.com/",
    "Notes": ""
  },
  {
    "Name": "Westerlin Outdoor",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.westerlindoutdoor.com/",
    "Notes": ""
  },
  {
    "Name": "Whiz Ltd",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://shopping.whiz.jp/pc/",
    "Notes": ""
  },
  {
    "Name": "Who Is Jacov",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://whoisjacov.com/collections/collection-ll",
    "Notes": ""
  },
  {
    "Name": "Wil Fry",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://wilfry.com/",
    "Notes": ""
  },
  {
    "Name": "Wild Style",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.wildstylela.com/",
    "Notes": ""
  },
  {
    "Name": "Wings + Horns",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.wingsandhorns.com/",
    "Notes": ""
  },
  {
    "Name": "With Camels",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.withcamels.ca/",
    "Notes": ""
  },
  {
    "Name": "Wolf vs. Goat",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "http://www.wolfvsgoat.com/",
    "Notes": ""
  },
  {
    "Name": "Wood Wood",
    "Keywords": "",
    "Price": "",
    "Country": "Denmark",
    "URL": "http://www.woodwood.dk/",
    "Notes": ""
  },
  {
    "Name": "Wrong Weather",
    "Keywords": "",
    "Price": "",
    "Country": "",
    "URL": "https://www.wrongweather.net/",
    "Notes": ""
  },
  {
    "Name": "Wut",
    "Keywords": "",
    "Price": "",
    "Country": "Germany",
    "URL": "http://www.wutberlin.com/",
    "Notes": ""
  },
  {
    "Name": "Yoox",
    "Keywords": "Designer, Discount",
    "Price": "$$$-$$$$",
    "Country": "",
    "URL": "http://www.yoox.com/",
    "Notes": ""
  },
  {
    "Name": "You Must Create",
    "Keywords": "General",
    "Price": "$$$",
    "Country": "UK",
    "URL": "http://www.youmustcreate.com/",
    "Notes": ""
  },
  {
    "Name": "Zanerobe",
    "Keywords": "Streetwear",
    "Price": "$",
    "Country": "",
    "URL": "http://zanerobe.com/",
    "Notes": ""
  },
  {
    "Name": "Zappos",
    "Keywords": "Everything",
    "Price": "$",
    "Country": "",
    "URL": "http://www.zappos.com/",
    "Notes": ""
  },
  {
    "Name": "Zara",
    "Keywords": "Fast Fashion",
    "Price": "$",
    "Country": "Multiple",
    "URL": "http://www.zara.com/",
    "Notes": ""
  },
  {
    "Name": "Zozotown",
    "Keywords": "Everything, Secondhand",
    "Price": "$-$$$$",
    "Country": "Japan",
    "URL": "http://zozo.jp/",
    "Notes": ""
  },
  {
    "Name": "Bridge",
    "Keywords": "",
    "Price": "",
    "Country": "Japan",
    "URL": "http://bridgetokyo.com/",
    "Notes": ""
  },
  {
    "Name": "The Real Real",
    "Keywords": "Consignment, Secondhand",
    "Price": "",
    "Country": "USA",
    "URL": "https://www.therealreal.com/",
    "Notes": ""
  }
];
