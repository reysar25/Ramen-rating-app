document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");


  const ramens = [
      { id: 2, name: "Ramen mix", restaurant: "Koryu House", image: "images/Easy Japanese Ramen Recipe.jpeg", rating: 9, comment: "A bust of flavor, Amazing!" },
      { id: 3, name: "Vegan ramen", restaurant: "Mikatsu Delight", image: "images/Easy Saucy Ramen Noodles (Vegan Recipe).jpeg", rating: 9, comment: "All feelings of Delight at once!" },
      { id: 4, name: "Pork dumplings", restaurant: "Titsi Kitchen", image: "images/Chinese BBQ Pork Steamed Buns _ Marion's Kitchen.jpeg", rating: 7, comment: "Rich in flavor ,recommend it for those who like spice." },
      { id: 5, name: "Rice cake", restaurant: "Koruvyo Corner", image: "images/Rice cake.jpeg", rating: 8, comment: "Its something unique that!" },
      { id: 7, name: "Chiken katsu", restaurant: "Mikaryu Cravings", image: "images/Miso Ramen with Chicken Katsu - Easy and Delicious Recipe.jpeg", rating: 10, comment: "Cooked with love and tenderness!" }
  ];


  function displayRamenDetails(ramen) {
      console.log("Displaying ramen:", ramen.name);
      document.getElementById("selected-image").src = ramen.image;
      document.getElementById("selected-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
      document.getElementById("selected-rating").textContent = `Rating: ${ramen.rating}`;
      document.getElementById("selected-comment").textContent = `Comment: ${ramen.comment}`;
  }


  function displayRamens() {
      const imagesDiv = document.getElementById("images");
      imagesDiv.innerHTML = ""; // Clear previous images

      ramens.forEach((ramen) => {
          const img = document.createElement("img");
          img.src = ramen.image;
          img.alt = ramen.name;
          img.dataset.id = ramen.id;


          img.addEventListener("click", () => {
              console.log(`Clicked on: ${ramen.name}`);
              displayRamenDetails(ramen);
          });

          imagesDiv.appendChild(img);
      });
  }


  function addSubmitListener() {
      const form = document.getElementById("ramen-form");

      form.addEventListener("submit", (event) => {
          event.preventDefault();

          const newRamen = {
              id: ramens.length + 1,
              name: event.target.name.value,
              restaurant: event.target.restaurant.value,
              image: event.target.image.value,
              rating: event.target.rating.value,
              comment: event.target.comment.value
          };

          console.log("New ramen added:", newRamen);
          ramens.push(newRamen);
          const img = document.createElement("img");
          img.src = newRamen.image;
          img.alt = newRamen.name;
          img.dataset.id = newRamen.id;


          img.addEventListener("click", () => {
              console.log(`Clicked on: ${newRamen.name}`);
              displayRamenDetails(newRamen);
          });

          document.getElementById("images").appendChild(img);
          form.reset();
      });
  }


  displayRamens();
  addSubmitListener();

  if (ramens.length > 0) {
      displayRamenDetails(ramens[0]);
  }
});