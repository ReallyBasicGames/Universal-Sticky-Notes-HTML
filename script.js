var stickysMade = 0;

// money + supply vs demand
var money = 100;
var stickyToSell = 0;

var myPrice = 1;

var demandPercent = 1;
var demandPrice = 1;

var priceOfSticky = 1;
///////////////////////

// my materials
var myPaper = 100;
var myGlue = 100;
/////////////////

// marketing
var marketinglvl = 1;
var marketingPrice = 100;
var marketingE = 1;

// glue
var gluePrice = 1;
var glueAmount = 10;
var glueE = 1;
////////////////////

// paper
var paperPrice = 1;
var paperAmount = 10;
var paperE = 1;
/////////////////////

// small factory
var researchedSmallFactory = false;

var factory1Total = 0;
var factory1Price = 100;
var factory1E = 1; //%
///////////////////////////////////

// large factory
var researchedLargeFactory = false;

var factory2Total = 0;
var factory2Price = 500;
var factory2E = 10; //%
///////////////////////////////////


// research

var factory1Research = 0; // level of this research
var button1;
var button1Text;

var autoBuying = false;
var autoBuyPurchased = false; // level of this research

var resourceEfficiency = 0; // level of this research

var factory2Research = 0; // level of this research

var marketingResearch = 0; // level of this research


///////////////////////////////////

// set the buttons invisible initially
document.getElementById("research4Button").style.visibility = "hidden";
document.getElementById("research3Button").style.visibility = "hidden";
document.getElementById("research2Button").style.visibility = "hidden";
document.getElementById("research1Button").style.visibility = "hidden";
document.getElementById("research5Button").style.visibility = "hidden";

// set heavy factories invisible
document.getElementById("Factory2").style.visibility = "hidden";

function buyGlue() {
  if(money >= gluePrice)
  {
    myGlue += 100*glueE;
    money -= gluePrice;
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money to buy this glue!";
  }
}

function increasePrice() {
  myPrice += 0.01;
}


function decreasePrice() {
  myPrice -= 0.01;

  if(myPrice <= 0.005)
  {
    myPrice = 0.01;
  }
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px")
  } else {
    console.log("Screen less than 500px")
  }
})

function buyPaper() {
  if(money >= paperPrice)
  {
    myPaper += 100*paperE;
    money -= paperPrice;
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money to buy this paper!";
  }
}


function research()
{
  if(stickysMade >= 1000)
  {
    if(factory1Research == 0)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "Factories. Start automatic production. $100";
      button1.style.display = "block";
      button1.style.visibility = "visible";
    }
    else if(factory1Research == 1 && factory1Total >= 5)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "Begin the long road of efficiency. Increase factory production by 20%. $500";
      button1.style.display = "block";
      button1.style.visibility = "visible";
    }
    else if(factory1Research == 2 && factory1Total >= 10)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "More efficiencent factories. Increase factory production by another 50%. $2000";
      button1.style.display = "block";
      button1.style.visibility = "visible";
    }
    else if(factory1Research == 3 && factory1Total >= 20)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "More efficiencent factories. Increase factory production by another 150%. $4000";
      button1.style.display = "block";
      button1.style.visibility = "visible";
    }
    else if(factory1Research == 4 && factory1Total >= 50)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "More efficiencent factories. Increase factory production by another 500%. $10000";
      button1.style.display = "block";
      button1.style.visibility = "visible";
    }
    else
    {
      button1 = document.getElementById("research1Button");
      button1.style.display = "none";
      button1.style.visibility = "hidden";
    }
  }
  if(!autoBuyPurchased && stickysMade >= 2000)
  {
    document.getElementById("research2Name").innerHTML = "Auto buyer. Automatically purchases resources when you run out. $1000";
    document.getElementById("research2Button").style.display = "block";
    document.getElementById("research2Button").style.visibility = "visible";
  }
  else
  {
    document.getElementById("research2Button").style.display = "none";
    document.getElementById("research2Button").style.visibility = "hidden";
  }
  if(stickysMade >= 2000)
  {
    if(resourceEfficiency == 0)
    {
      document.getElementById("research3Name").innerHTML = "Resource efficiency boost. Get 50% more paper and glue with every purchase. $500";
      document.getElementById("research3Button").style.display = "block";
      document.getElementById("research3Button").style.visibility = "visible";
    }
    else if(resourceEfficiency == 1)
    {
      document.getElementById("research3Name").innerHTML = "Resource efficiency boost. Get 100% more paper and glue with every purchase. $1000";
      document.getElementById("research3Button").style.display = "block";
      document.getElementById("research3Button").style.visibility = "visible";
    }
    else if(resourceEfficiency == 2)
    {
      document.getElementById("research3Name").innerHTML = "Resource efficiency boost. Get another 200% more paper and glue with every purchase. $2000";
      document.getElementById("research3Button").style.display = "block";
      document.getElementById("research3Button").style.visibility = "visible";
    }
    else if(resourceEfficiency == 3)
    {
      document.getElementById("research3Name").innerHTML = "Resource efficiency boost. Get another 200% more paper and glue with every purchase. $4000";
      document.getElementById("research3Button").style.display = "block";
      document.getElementById("research3Button").style.visibility = "visible";
    }
    else
    {
      document.getElementById("research3Name").innerHTML = "";
      document.getElementById("research3Button").style.display = "none";
      document.getElementById("research2Button").style.visibility = "hidden";
    }
  }
  if(factory1Total >= 20 && stickysMade >= 10000)
  {
    if(factory2Research == 0)
    {
      document.getElementById("research4Name").innerHTML = "Heavier factories. Produce 10 stickys a second. $2000";
      document.getElementById("research4Button").style.display = "block";
      document.getElementById("research4Button").style.visibility = "visible";
    }
    else if (factory2Research == 1)
    {
      document.getElementById("research4Name").innerHTML = "Increase heavy factory efficiency by 100%. $5000";
      document.getElementById("research4Button").style.display = "block";
      document.getElementById("research4Button").style.visibility = "visible";
    }
    else if (factory2Research == 2)
    {
      document.getElementById("research4Name").innerHTML = "Increase heavy factory efficiency by another 200%. $10000";
      document.getElementById("research4Button").style.display = "block";
      document.getElementById("research4Button").style.visibility = "visible";
    }
    else if (factory2Research == 3)
    {
      document.getElementById("research4Name").innerHTML = "Increase heavy factory efficiency by another 250%. $20000";
      document.getElementById("research4Button").style.display = "block";
      document.getElementById("research4Button").style.visibility = "visible";
    }
    else
    {
      document.getElementById("research4Name").innerHTML = "";
      document.getElementById("research4Button").style.display = "none";
      document.getElementById("research4Button").style.visibility = "hidden";
    }
  }
  if(stickysMade >= 3000)
  {
    
    if(marketingResearch == 0)
    {
      document.getElementById("research5Name").innerHTML = "Billboards. Increases marketing efficiency by 50%. $5000";
      document.getElementById("research5Button").style.visibility = "visible";
    }
    else if(marketingResearch == 1)
    {
      document.getElementById("research5Name").innerHTML = "Internet Ads. Increases marketing efficiency by 100%. $12500";
      document.getElementById("research5Button").style.visibility = "visible";
    }
    else if(marketingResearch == 2)
    {
      document.getElementById("research5Name").innerHTML = ". Increases marketing efficiency by 200%. $25000";
      document.getElementById("research5Button").style.visibility = "visible";
    }
    else
    {
      document.getElementById("research5Name").innerHTML = "";
      document.getElementById("research5Button").style.visibility = "hidden";
    }
  }
}
/*
<p id="Factory2" style.visibility="hidden">
Level 2 Factories: <a id="2factoryTotal"></a><br>
Price: $ <a id="2factoryPrice"></a><br>
<button onclick="buyFactory2()">Buy Lvl 2 Factory</button>
</p>
*/
/////// end of research function ////////////////////////////


function buyMarketing()
{
  if(money >= marketingPrice)
  {
    money -= marketingPrice;
    marketinglvl ++;
    marketingPrice *= 2;
    demandPrice ++;
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money!";
  }
}

update(); // update function, refresh the values on the html page
setTimeout(buySticky, (1/demandPercent)*1000);
function update(){
  
  document.getElementById("myMoney").innerHTML = money.toFixed(2);
  document.getElementById("marketLvl").innerHTML = marketinglvl;
  document.getElementById("marketPrice").innerHTML = marketingPrice;
  document.getElementById("pricePerSticky").innerHTML = myPrice.toFixed(2);
  // set the demand
  demandPercent = ((demandPrice) / (myPrice))**2 * marketingE;
  document.getElementById("demandPercent").innerHTML = demandPercent.toFixed(2);
  document.getElementById("myStickys").innerHTML = stickyToSell;
  document.getElementById("stickysMade").innerHTML = stickysMade;
  document.getElementById("glueAmount").innerHTML = myGlue;
  document.getElementById("gluePrice").innerHTML = gluePrice.toFixed(2);
  document.getElementById("paperAmount").innerHTML = myPaper;
  document.getElementById("paperPrice").innerHTML = paperPrice.toFixed(2);
  document.getElementById("1factoryPrice").innerHTML = factory1Price.toFixed(2);
  document.getElementById("1factoryTotal").innerHTML = factory1Total;
  document.getElementById("2factoryPrice").innerHTML = factory2Price.toFixed(2);
  document.getElementById("2factoryTotal").innerHTML = factory2Total;

  // set the autobuy check box properties
  // set the autobuy checkbox visible if purchased
  var autoBuyCheckBox = document.getElementById("AutobuyCheckbox");
  if(autoBuyPurchased)
  {
    document.getElementById("autobuyer").style.visibility = "visible";
  }
  else // else set invisible
  {
    document.getElementById("autobuyer").style.visibility = "none";
  }
  // if checked, purchase glue and paper when out
  if(autoBuyCheckBox.checked) 
  {
    if(myGlue <= (factory1Total*factory1E+ factory2Total*factory2E)*3)
    {
      buyGlue();
    }
    if(myPaper <= (factory1Total*factory1E+ factory2Total*factory2E)*3)
    {
      buyPaper();
    }
  }
  //////////////////////////////////////////////////////////
  // update potential research stuffs
  research();

  // if researched factories, set that section visible
  if(researchedSmallFactory)
  {
    document.getElementById("factories").style.visibility = "visible";
  }
  else
  {
    document.getElementById("factories").style.visibility = "hidden";
  }
  //////////////////////////////////////////////////////////

  // buying of stickys
  setTimeout(update, 100/6); // run update 60 times per sec

}

function research1Button() // small factory  --> research this
{
  if(!researchedSmallFactory && factory1Research == 0)
  {
    if(money >= 100)
    {
      money -= 100;
      researchedSmallFactory = true;
      factory1Research ++;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factory1Research == 1)
  {
    if(money >= 500)
    {
      money -= 500;
      factory1Research ++;
      factory1E*=1.2;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factory1Research == 2)
  {
    if(money >= 2000)
    {
      money -= 2000;
      factory1Research ++;
      factory1E*=1.5;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factory1Research == 3)
  {
    if(money >= 4000)
    {
      money -= 4000;
      factory1Research ++;
      factory1E*=2.5;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factory1Research == 4)
  {
    if(money >= 10000)
    {
      money -= 10000;
      factory1Research ++;
      factory1E*=5;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else
  {
    button1.style.display = "none";
    // should be invisible here.
  }
}

///////////// End of small factory research //////////////////


// large factory research 

// resource efficiency research /////////////
function research3Button()
{
  if(resourceEfficiency == 0)
  {
    if(money >= 500)
    {
      money -= 500;
      resourceEfficiency ++;
      glueE *=1.50;
      paperE *=1.50;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if (resourceEfficiency == 1)
  {
    if(money >= 1000)
    {
      money -= 1000;
      resourceEfficiency ++;
      glueE *=2.00;
      paperE *=2.00;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if (resourceEfficiency == 2)
  {
    if(money >= 2000)
    {
      money -= 2000;
      resourceEfficiency ++;
      glueE *=3.00;
      paperE *=3.00;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if (resourceEfficiency == 3)
  {
    if(money >= 4000)
    {
      money -= 4000;
      resourceEfficiency ++;
      glueE *=3.00;
      paperE *=3.00;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else
  {
    document.getElementById("research2Button").style.display = "none";
    // should be invisible
  }
}
// end of large factory research

// autobuy research
document.getElementById("autobuyer").style.visibility = "hidden";
function research2Button()
{
  if(money >= 1000)
  {
    autoBuyPurchased = true;
    money -= 1000;
    document.getElementById("autobuyer").style.visibility = "visible";
  }
  else
  {
    // not enough money
  }
  if(autoBuyPurchased)
  {
    document.getElementById("research2Button").style.display = "none";
  }
}
// marketing research
/*
    if(marketingResearch == 0)
    {
      document.getElementById("research5Name").innerHTML = "Billboards. Increases marketing efficiency by 50%. $5000";
      document.getElementById("research5Button").style.visibility = "visible";
    }
    else if(marketingResearch == 1)
    {
      document.getElementById("research5Name").innerHTML = "Internet Ads. Increases marketing efficiency by 100%. $12500";
      document.getElementById("research5Button").style.visibility = "visible";
    }
    else if(marketingResearch == 2)
    {
      document.getElementById("research5Name").innerHTML = ". Increases marketing efficiency by 200%. $25000";
      document.getElementById("research5Button").style.visibility = "visible";
    }
*/
function research5Button()
{
  if(marketingResearch == 0)
  {
    if(money >= 5000)
    {
      money -= 5000;
      marketingResearch ++;
      marketingE *= 1.5;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(marketingResearch == 1)
  {
    if(money >= 12500)
    {
      money -= 12500;
      marketingResearch ++;
      marketingE *= 2.0;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(marketingResearch == 2)
  {
    if(money >= 25000)
    {
      money -= 25000;
      marketingResearch ++;
      marketingE *= 3.0;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else
  {
    document.getElementById("research5Button").style.visibility = "hidden";
  }
}
//////////////////// end marketing research ////////////////////////

// large factory research 
function research4Button()
{
  if(money>=2000 && factory2Research == 0) // research large factory
  {
    money -= 2000;
    factory2Research ++;
    researchedLargeFactory = true;
    document.getElementById("Factory2").style.visibility = "visible";
  }
  else if(money >= 5000 && factory2Research == 1) // add 100% efficiency
  {
    money -= 5000
    factory2Research ++;
    factory2E += 1.00;
  }
  else if(money >= 10000 && factory2Research == 2) // add 200% efficiency
  {
    money -= 10000
    factory2Research ++;
    factory2E += 3.00;
  }
  else if(money >= 20000 && factory2Research == 2) // add 250% efficiency
  {
    money -= 20000
    factory2Research ++;
    factory2E += 3.50;
  }
  else
  {
    // should be invisible
    document.getElementById("research4Button").style.display = "none";
  }
}
// end of large factory research ////////////////////////////


// people bought a sticky note
function buySticky()
{
  //demandPercent = ((demandPrice) / (myPrice))**2
  var tempDP = demandPercent;
  var divisor = 1;
  while(tempDP >= 1)
  {
    divisor *=2;
    tempDP /=2;
  }
  for(i = 0; i < (divisor); i++)
  {
    if(stickyToSell > 0)
    {
      stickyToSell --;
      money += myPrice;
    }
  }
  setTimeout(buySticky, (1/tempDP)*1000);
}

// player purchased a small factory
function buyFactory1()
{
  if(money >= factory1Price)
  {
    money -= factory1Price;
    factory1Price *=1.05;
    factory1Total ++;
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money!";
  }
}

// player purchased a large factory
function buyFactory2()
{
  if(money >= factory2Price)
  {
    money -= factory2Price;
    factory2Price *=1.05;
    factory2Total ++;
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money!";
  }
}


// factories producing 
makeStickyFactories(); // run the function at the start
function makeStickyFactories()
{
  for(i = 0; i < (factory1Total*factory1E + factory2Total*factory2E); i++)
  {
    if(myPaper > 0 && myGlue > 0)
    {
      myPaper --;
      myGlue --;
      stickysMade ++;
      stickyToSell ++;
    }
  }

  setTimeout(makeStickyFactories, 1000);
}

function makeSticky() {
  if(myPaper > 0 && myGlue > 0)
  {
    myPaper --;
    myGlue --;
    stickysMade ++;
    stickyToSell ++;
  }
  else
  {
    if(myGlue == 0)
    {
      document.getElementById("errorMessage").innerHTML = "Not enough glue!";
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough paper!";
    }
  }
}
