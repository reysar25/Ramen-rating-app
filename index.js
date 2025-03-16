const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https:/images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Menya", image: "https://images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "https://images/naruto.jpg",rating: 4.5,comment:"A must try!" },
    { id: 4, name: "Kojiro ramen", restaurant:"Ippuda",  image: "https://images/kojiro.jpg", rating: 3.5, comment: "Good presentation!"},
    { id: 5, name: "Gyukotsu ramen", restaurant:"Tsuta",  image: "https://images/gyukotsu.jpg", rating: 4, comment: "Comforting!"},
 ];

 function displayRamens(){
    const ramenMenuDiv = Document.getElementById('ramen-menu')
    ramens.forEach(ramen=>{
        const imgElement = document.createElement('img');
        imgElement.src =ramen.imageUrl:
        imgElement.alt = ramen.name;
        imgElement.classList.add('ramen-image');
        imgElement.addEventListener('click',()=>handleClick(ramen));
        ramenMenuDiv.appendChild(imgElement)
    });
 }


 function handleClick(ramen){
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restuarant').textContent = ramen.restaurant;
    document.getElementById('ramen-rating').textContent = ramen.rating;
    document.getElementById('ramen-comment').textContent = ramen.comment;
 }
 
 // Array to store ramen data
const ramens = [];

// Function to handle form submission
function addSubmitListener() {
  const form = document.getElementById('ramen-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting in the default way

    // Get values from the form
    const name = document.getElementById('ramen-name-input').value;
    const restaurant = document.getElementById('ramen-restaurant-input').value;
    const rating = document.getElementById('ramen-rating-input').value;
    const comment = document.getElementById('ramen-comment-input').value;
    const imageUrl = document.getElementById('ramen-image-input').value;

    // Create ramen object
    const ramen = {
      name,
      restaurant,
      rating,
      comment,
      imageUrl
    };

    // Add ramen to the array
    ramens.push(ramen);

    // Clear the form inputs after submission
    form.reset();

    // Display the ramen images
    displayRamens();
  });
}

// Function to display ramen images and details
function displayRamens() {
  const ramenImagesContainer = document.getElementById('ramen-images-container');
  ramenImagesContainer.innerHTML = ''; // Clear existing images

  ramens.forEach((ramen, index) => {
    // Create a small image element for each ramen
    const imgElement = document.createElement('img');
    imgElement.src = ramen.imageUrl;
    imgElement.alt = ramen.name;
    imgElement.classList.add('ramen-image'); // Add a class for styling
    imgElement.addEventListener('click', () => {
      displayRamenDetail(ramen);
    });

    // Append the image to the container
    ramenImagesContainer.appendChild(imgElement);
  });
}

// Function to display ramen details when clicking a ramen image
function displayRamenDetail(ramen) {
  document.getElementById('ramen-name-detail').textContent = ramen.name;
  document.getElementById('ramen-restaurant-detail').textContent = `Restaurant: ${ramen.restaurant}`;
  document.getElementById('ramen-rating-detail').textContent = `Rating: ${ramen.rating}/5`;
  document.getElementById('ramen-comment-detail').textContent = `Comment: ${ramen.comment}`;
  document.getElementById('ramen-large-image').src = ramen.imageUrl;
  document.getElementById('ramen-large-image').alt = ramen.name;
}

// Initialize the app once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  addSubmitListener();

  // Preload some ramen images (in case you want to show some initial ramen items)
  ramens.push({
    name: 'Gyukotsu Ramen',
    restaurant: 'Tonkotsu Express',
    rating: 4,
    comment: 'Delicious, rich broth with tender beef slices.',
    imageUrl: 'images/gyukotsu.jpg'
  });

  ramens.push({
    name: 'Kojiro Ramen',
    restaurant: 'Ramen Kojiro',
    rating: 5,
    comment: 'Amazing broth, perfect noodles, and rich flavor.',
    imageUrl: 'images/kojiro.jpg'
  });

  ramens.push({
    name: 'Naruto Ramen',
    restaurant: 'Ichiraku Ramen',
    rating: 5,
    comment: 'Perfect for a ninja, with fresh ingredients and a rich broth!',
    imageUrl: 'images/naruto.jpg'
  });

  ramens.push({
    name: 'Nirvana Ramen',
    restaurant: 'Ramen Nirvana',
    rating: 4,
    comment: 'A calming bowl of ramen with a perfect balance of flavors.',
    imageUrl: 'images/nirvana.jpg'
  });

  ramens.push({
    name: 'Shoyu Ramen',
    restaurant: 'Shoyu Ramen House',
    rating: 3,
    comment: 'A classic shoyu ramen with a light and savory broth.',
    imageUrl: 'images/shoyu.jpg'
  });

  // Display the ramen images
  displayRamens();
});
