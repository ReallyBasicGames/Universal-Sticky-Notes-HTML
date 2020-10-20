var stickysMade = 0;

// money + supply vs demand
var money = 10000;
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


// research

var factoryResearch = 0;
var button1;
var button1Text;

var autoBuying = false;
var autoBuyPurchased = false;

var resourceEfficiency = 0;

///////////////////////////////////




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
    if(factoryResearch == 0)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "Factories. Start automatic production. $100";
      button1.style.display = "block";
    }
    else if(factoryResearch == 1 && factory1Total > 1)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "Begin the long road of efficiency. Increase factory production by 20%. $500";
      button1.style.display = "block";
    }
    else if(factoryResearch == 2 && factory1Total > 10)
    {
      button1 = document.getElementById("research1Button");
      document.getElementById("research1Name").innerHTML = "More efficiencent factories. Increase factory production by another 50%. $2000";
      button1.style.display = "block";
    }
    else
    {
      button1 = document.getElementById("research1Button");
      button1.style.display = "none";
    }
  }
  if(!autoBuyPurchased && stickysMade >= 2000)
  {
    document.getElementById("research2Name").innerHTML = "Auto buyer. Automatically purchases resources when you run out. $1000";
    document.getElementById("research2Button").style.display = "block";
  }
  else
  {
    document.getElementById("research2Button").style.display = "none";
  }
  document.getElementById("research3Name").innerHTML = "";
  document.getElementById("research3Button").style.display = "none";
}

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

update();
setTimeout(buySticky, (1/demandPercent)*1000);
function update(){
  
  document.getElementById("myMoney").innerHTML = money.toFixed(2);
  document.getElementById("marketLvl").innerHTML = marketinglvl;
  document.getElementById("marketPrice").innerHTML = marketingPrice;
  document.getElementById("pricePerSticky").innerHTML = myPrice.toFixed(2);
  // set the demand
  demandPercent = ((demandPrice) / (myPrice))**2;
  document.getElementById("demandPercent").innerHTML = demandPercent.toFixed(2);
  document.getElementById("myStickys").innerHTML = stickyToSell;
  document.getElementById("stickysMade").innerHTML = stickysMade;
  document.getElementById("glueAmount").innerHTML = myGlue;
  document.getElementById("gluePrice").innerHTML = gluePrice.toFixed(2);
  document.getElementById("paperAmount").innerHTML = myPaper;
  document.getElementById("paperPrice").innerHTML = paperPrice.toFixed(2);
  document.getElementById("1factoryPrice").innerHTML = factory1Price.toFixed(2);
  document.getElementById("1factoryTotal").innerHTML = factory1Total;

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
    if(myGlue <= factory1Total*factory1E*2)
    {
      buyGlue();
    }
    if(myPaper <= factory1Total*factory1E*2)
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

function research1Button()
{
  if(!researchedSmallFactory && factoryResearch == 0)
  {
    if(money >= 100)
    {
      money -= 100;
      researchedSmallFactory = true;
      factoryResearch ++;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factoryResearch == 1)
  {
    if(money >= 500)
    {
      money -= 500;
      factoryResearch ++;
      factory1E*=1.2;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else if(factoryResearch == 2)
  {
    if(money >= 2000)
    {
      money -= 2000;
      factoryResearch ++;
      factory1E*=1.5;
    }
    else
    {
      document.getElementById("errorMessage").innerHTML = "Not enough money!";
    }
  }
  else
  {

  }
}

function research3Button()
{

}

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
}


function buySticky()
{
  if(stickyToSell > 0)
  {
    stickyToSell --;
    money += myPrice;
  }
  setTimeout(buySticky, (1/demandPercent)*1000);
}

function buyFactory1()
{
  if(money >= factory1Price)
  {
    money -= factory1Price;
    factory1Price *=1.05;
    factory1Total ++;
    if(factory1Total == 1)
    {
      makeStickyFactories();
    }
  }
  else
  {
    document.getElementById("errorMessage").innerHTML = "Not enough money!";
  }
}


makeStickyFactories(); // run the function at the start
function makeStickyFactories()
{
  for(i = 0; i < factory1Total*factory1E; i++)
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
