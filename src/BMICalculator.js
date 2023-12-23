import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState(''); // Рост в метрах
  const [weight, setWeight] = useState(''); // Вес в килограммах
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = async () => {
    const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6f8debbf54mshf94eb85b2f51c53p1cd1b8jsn39010b96d49c',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Предполагается, что ответ в формате JSON
      setBmiResult(result);
      setError('');
    } catch (error) {
      setError('Failed to calculate BMI. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Height in meters"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmiResult && <div>BMI Result: {JSON.stringify(bmiResult)}</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default BMICalculator;
