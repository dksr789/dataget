
    document.addEventListener('DOMContentLoaded', function () {
      const beverageSelect = document.getElementById('drinkName');
      const temperatureRadios = document.querySelectorAll('input[name="temperature"]');
      
      temperatureRadios.forEach(radio => {
        radio.addEventListener('click', () => {
          // Reset other related values to their defaults
          resetValuesToDefault();
        });
      });
  
      // Function to reset values to default
      function resetValuesToDefault() {
        // Reset other related values here
        document.getElementById('drinkName').selectedIndex = 0; // Reset the beverage selection
        document.querySelector('input[name="size"]:checked').checked = false; // Uncheck the size radio buttons
        document.getElementById('quantity').value = ''; // Clear the quantity input
  
        // Clear the calculated nutrition values
        const resultDiv = document.getElementById('result-final-display');
        resultDiv.innerHTML = '';
      };
      beverageSelect.addEventListener('change', () => {
        // You can add any specific logic here if needed
      });
    });

    function calculateNutrition() {
      const beverageSelect = document.getElementById('drinkName');
      const size = document.querySelector('input[name="size"]:checked');
      const quantity = parseInt(document.getElementById('quantity').value, 10);

      const selectedBeverage = beverageSelect.value;
      // Define nutrition values (dummy values for demonstration purposes)
      const nutritionValues = {
        'Hot Coffee': {
          short: { calories: 100, fat: 5, cholesterol: 0, sodium: 5, carb: 1, sugar: 0, protein: 0, caffeine: 75 },
          tall: { calories: 150, fat: 10, cholesterol: 0, sodium: 10, carb: 2, sugar: 0, protein: 1, caffeine: 150 },
          grande: { calories: 200, fat: 15, cholesterol: 0, sodium: 10, carb: 2, sugar: 0, protein: 1, caffeine: 225 },
          venti: { calories: 250, fat: 15, cholesterol: 0, sodium: 15, carb: 3, sugar: 0, protein: 1, caffeine: 300 }
        },
        'Caffe Misto': {
          short: { calories: 120, fat: 6, cholesterol: 5, sodium: 10, carb: 2, sugar: 0, protein: 1, caffeine: 85 },
          tall: { calories: 170, fat: 9, cholesterol: 10, sodium: 15, carb: 3, sugar: 0, protein: 1, caffeine: 170 },
          grande: { calories: 220, fat: 12, cholesterol: 15, sodium: 20, carb: 4, sugar: 0, protein: 2, caffeine: 255 },
          venti: { calories: 270, fat: 15, cholesterol: 20, sodium: 25, carb: 5, sugar: 0, protein: 2, caffeine: 340 }
        },
        'Americano': {
          short: { calories: 5, fat: 0, cholesterol: 0, sodium: 5, carb: 1, sugar: 0, protein: 0, caffeine: 75 },
          tall: { calories: 10, fat: 0, cholesterol: 0, sodium: 10, carb: 1, sugar: 0, protein: 1, caffeine: 150 },
          grande: { calories: 15, fat: 0, cholesterol: 0, sodium: 10, carb: 2, sugar: 0, protein: 1, caffeine: 225 },
          venti: { calories: 15, fat: 0, cholesterol: 0, sodium: 15, carb: 3, sugar: 0, protein: 1, caffeine: 300 }
        },
        'Blonde Vanilla Latte':{
          short: { calories: 130, fat: 3.5, cholesterol: 15, sodium: 80, carb: 18, sugar: 17, protein: 6, caffeine: 85 },
          tall: { calories: 200, fat: 5, cholesterol: 20, sodium: 125, carb: 28, sugar: 27, protein: 9, caffeine: 85 },
          grande: { calories: 250, fat: 6, cholesterol: 25, sodium: 150, carb: 37, sugar: 35, protein: 12, caffeine: 170 },
          venti: { calories: 320, fat: 9, cholesterol: 35, sodium: 200, carb: 46, sugar: 44, protein: 15, caffeine: 170 } 
        },
        'Caffe Latte':{
          short: { calories: 100, fat: 3.5, cholesterol: 15, sodium: 85, carb: 10, sugar: 9, protein: 6, caffeine: 75 },
          tall: { calories: 150, fat: 6, cholesterol: 65, sodium: 135, carb: 15, sugar: 14, protein: 10, caffeine: 75 },
          grande: { calories: 190, fat: 7, cholesterol: 30, sodium: 170, carb: 19, sugar: 18, protein: 13, caffeine: 150 },
          venti: { calories: 250, fat: 9, cholesterol: 40, sodium: 220, carb: 24, sugar: 23, protein: 16, caffeine: 150 } 
        },

        'Caramel Brulee Latte':{
          short: {calories: 220,fat:8,cholesterol:30,sodium:160,carb:31,sugar:24,protein:5,caffeine:75 },
          tall: { calories:310,fat:11,cholesterol:40,sodium:250,carb:46,sugar:36,protein:9,caffeine:75 },
          grande: { calories:410,fat:14,cholesterol:50,sodium:340,carb:61,sugar:48,protein:12,caffeine:150 },
          venti: { calories:500,fat:15,cholesterol:55,sodium:430,carb:76,sugar:60,protein:15,caffeine:150 } 
        },
        // ... Add more nutrition values for other beverages
      };

      const sizeValue = size ? size.value : 'default'; // Use a default value if size is not selected
      const nutritionInfo = nutritionValues[selectedBeverage][sizeValue];

      const resultDiv = document.getElementById('result-final-display');
      resultDiv.innerHTML = `
        <p>Nutrition Facts for: ${quantity} ${sizeValue} ${selectedBeverage}(s):</p>
        <ul style="list-style: none; border: 2px solid black; border-radius: 5px; padding: 10px;">
          <li>Drink Name: ${selectedBeverage}</li>
          <li>Size: ${size ? size.value : 'Not specified'}</li>
          <li>Calories: ${nutritionInfo.calories * quantity || 'Not specified'} kcal</li>
          <li>Fat: ${nutritionInfo.fat * quantity || 'Not specified'} g</li>
          <li>Cholesterol: ${nutritionInfo.cholesterol * quantity || 'Not specified'} mg</li>
          <li>Sodium: ${nutritionInfo.sodium * quantity || 'Not specified'} mg</li>
          <li>Carb: ${nutritionInfo.carb * quantity || 'Not specified'} g</li>
          <li>Sugar: ${nutritionInfo.sugar * quantity || 'Not specified'} g</li>
          <li>Protein: ${nutritionInfo.protein * quantity || 'Not specified'} g</li>
          <li>Caffeine: ${nutritionInfo.caffeine * quantity || 'Not specified'} mg</li>
        </ul>
      `;
    }
