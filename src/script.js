var image_links;


image_links = ['images/banana.jpg', 'images/draw.jpg', 'images/vasepinkbg.jpg', 'images/livingroom.jpg', 'images/selfie.jpg', 'images/vasebluebg.jpg']



document.getElementById('next-button').addEventListener('click', (event) => {
  let element_images = document.getElementById('images');
  image_links.push(image_links.shift());
  element_images.setAttribute("src", image_links[0]);

});

document.getElementById('previous-button').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  image_links.unshift(image_links.pop());
  element_images2.setAttribute("src", image_links[0]);

});
