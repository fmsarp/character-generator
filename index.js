// JavaScript for handling character customization and download functionality

// Define arrays with image paths for each feature
const hairImages = [
  './assets/character-images-left-side/hair/hair-1.png',
  './assets/character-images-left-side/hair/hair-2.png',
  './assets/character-images-left-side/hair/hair-3.png',
  './assets/character-images-left-side/hair/hair-4.png',
  './assets/character-images-left-side/hair/hair-5.png',
  './assets/character-images-left-side/hair/hair-6.png'
];
const eyeImages = [
  './assets/character-images-left-side/eyes/eye-1.png',
  './assets/character-images-left-side/eyes/eye-2.png',
  './assets/character-images-left-side/eyes/eye-3.png',
  './assets/character-images-left-side/eyes/eye-4.png',
  './assets/character-images-left-side/eyes/eye-5.png',
  './assets/character-images-left-side/eyes/eye-6.png'
];

const earImages = [
  './assets/character-images-left-side/ears/ear-1.png',
  './assets/character-images-left-side/ears/ear-2.png',
  './assets/character-images-left-side/ears/ear-3.png',
  './assets/character-images-left-side/ears/ear-4.png',
  './assets/character-images-left-side/ears/ear-5.png',
  './assets/character-images-left-side/ears/ear-6.png'
];

const mouthImages = [
  './assets/character-images-left-side/mouth/mouth-1.png',
  './assets/character-images-left-side/mouth/mouth-2.png',
  './assets/character-images-left-side/mouth/mouth-3.png',
  './assets/character-images-left-side/mouth/mouth-4.png',
  './assets/character-images-left-side/mouth/mouth-5.png',
  './assets/character-images-left-side/mouth/mouth-6.png'
];

const backgroundImages = [
  './assets/character-images-left-side/eyes/eye-1.png',
  './assets/character-images-left-side/eyes/eye-2.png',
  './assets/character-images-left-side/eyes/eye-3.png',
  './assets/character-images-left-side/eyes/eye-4.png',
  './assets/character-images-left-side/eyes/eye-5.png',
  './assets/character-images-left-side/eyes/eye-6.png'
];

const accessoryImages = [
  './assets/character-images-left-side/eyes/eye-1.png',
  './assets/character-images-left-side/eyes/eye-2.png',
  './assets/character-images-left-side/eyes/eye-3.png',
  './assets/character-images-left-side/eyes/eye-4.png',
  './assets/character-images-left-side/eyes/eye-5.png',
  './assets/character-images-left-side/eyes/eye-6.png'
];
// Add more arrays for other features (ears, mouth, background, accessories)

const featureImages = {
  hair: hairImages,
  eyes: eyeImages,
  // Add more features
};

// Function to update the character image
function updateCharacterImage(feature, index) {
  const imagePath = featureImages[feature][index];
  document.querySelector(`img[alt="Character Image"]`).src = imagePath;
}

// Event listeners for feature buttons
document.querySelectorAll('.feature-button').forEach(button => {
  button.addEventListener('click', () => {
    const feature = button.getAttribute('data-feature');
    const randomIndex = Math.floor(Math.random() * featureImages[feature].length);
    updateCharacterImage(feature, randomIndex);
  });
});

// Event listener for random button
document.querySelector('.bg-blue-600').addEventListener('click', () => {
  for (const feature in featureImages) {
    const randomIndex = Math.floor(Math.random() * featureImages[feature].length);
    updateCharacterImage(feature, randomIndex);
  }
});

// Event listener for download button
document.querySelector('.bg-gray-200').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = document.querySelector(`img[alt="Character Image"]`).src;
  link.download = 'character.png';
  link.click();
});

// Placeholder function for changing background color
document.querySelectorAll('.grid div').forEach(div => {
  div.addEventListener('click', (e) => {
    document.querySelector('.w-64.h-64').className = `w-64 h-64 ${e.target.className}`;
  });
});
