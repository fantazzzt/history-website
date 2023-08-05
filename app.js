const star = document.querySelector('#mobile-menu');
const link = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;


/*For mobile and small window */

star.addEventListener('click', function() {
  star.classList.toggle('is-active');
  link.classList.toggle('active');
});


/* Disappearing Scroll */
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  }else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});



function showDropdown() {
  var dropdown = document.getElementById("realmDropdown");
  if (star.classList.contains('is-active')) {
    
  } 
  else{
  dropdown.style.display = "block";
  }
}

function hideDropdown() {
  var dropdown = document.getElementById("realmDropdown");
  dropdown.style.display = "none";
}


/* Interactable Map */


document.addEventListener("DOMContentLoaded", function() {
  var overlay1 = document.querySelector(".overlayAdrian");
  var overlay2 = document.querySelector(".overlayChalons");
  var textBox = document.getElementById("textBox");

  overlay1.addEventListener("click", function() {
    textBox.value = "Battle of Adrianople 378, Where Emperor Valens suffered a disastrous defeat at the hands of the Goths.";
  });
  overlay2.addEventListener("click", function() {
    textBox.value = "Battle of Chalons 451 CE, Where the Roman and Foederati faces off against a confederation of Huns.";
  });
});

/*Create a histogram */
// fetch('http://localhost:5000/')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const jsonStr = JSON.stringify(data, null, 2);
//     document.getElementById('json-container').textContent = jsonStr;
//   })
//   .catch(error => console.error('Error:', error));

var canvas = document.getElementById('histogram');

fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(data => {

    var coinMints = data.map(item => item[0]);

    var coinCounts = coinMints.reduce(function (counts, coin) {
      counts[coin] = (counts[coin] || 0) + 1;
      return counts;
    }, {});

    var labels = Object.keys(coinCounts);
    var counts = Object.values(coinCounts);

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Coin Mints',
          data: counts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Coin Mints'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Frequency'
            }
          }
        }
      }
    });
  });



async function displaySampleCoins() {
  try {
    const coins = await getData('/coins');
    const coinList = document.getElementById('coinList');
    coins.forEach(coin => {
      const listItem = document.createElement('li');
      listItem.textContent = coin.cg_mint; 
      coinList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching sample coins:', error);
  }
}


// Fetch a specific coin by its ID and display its details
async function displayCoinDetails(coinId) {
  try {
    const coin = await getData(`/coins/${coinId}`);
    const coinDetails = document.getElementById('coinDetails');
    coinDetails.textContent = JSON.stringify(coin); 
  } catch (error) {
    console.error(`Error fetching details for coin ${coinId}:`, error);
  }
}

async function searchCoins(params) {
  try {
    const url = new URL('/coins/search', window.location.origin);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    const coins = await getData(url);
    const searchResults = document.getElementById('searchResults');
    coins.forEach(coin => {
      const listItem = document.createElement('li');
      listItem.textContent = coin.cg_mint;
      searchResults.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}
/*Debug*/
var svgImage = document.querySelector('img[src="images/pic1.svg"]');
var width = svgImage.naturalWidth;
var height = svgImage.naturalHeight;
console.log("Width: " + width + "px, Height: " + height + "px");
