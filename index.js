 // JavaScript for handling character customization and download functionality

      // Placeholder functions for randomizing and downloading character
      document.querySelector('.bg-blue-600').addEventListener('click', () => {
        alert('Randomize character');
      });

      document.querySelector('.bg-gray-200').addEventListener('click', () => {
        alert('Download character');
      });

      // Placeholder function for changing background color
      document.querySelectorAll('.grid div').forEach(div => {
        div.addEventListener('click', (e) => {
          document.querySelector('.w-64.h-64').className = `w-64 h-64 ${e.target.className}`;
        });
      });

/* This is an example JavaScript file, feel free to remove/edit it anytime */
console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");
