<template>
  <div class="container">
    <h1>Conversiones de Temperatura</h1>
    <div class="card conversion-form">
      <label for="temperature">Ingrese la temperatura en Celsius:</label>
      <input type="number" id="temperature" v-model="inputTemperature">

      <label for="unit">Seleccione la unidad de conversión:</label>
      <select id="unit" v-model="selectedUnit">
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>

      <button @click="convert">Convertir</button>
    </div>
    <div class="card result" v-if="convertedTemperature !== null">
      <p>Resultado:</p>
      <p>{{ convertedTemperature }} °{{ selectedUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTemperature: null,
      convertedTemperature: null,
      selectedUnit: 'Fahrenheit'
    };
  },
  methods: {
    convert() {
      if (this.selectedUnit === 'Fahrenheit') {
        this.convertedTemperature = (this.inputTemperature * 9/5) + 32;
      } else if (this.selectedUnit === 'Kelvin') {
        this.convertedTemperature = parseFloat(this.inputTemperature) + 273.15;
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.card {
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9fb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

input, select {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.result p {
  margin: 0;
  font-size: 20px;
  color: #333;
  text-align: center;
}

.result p:first-child {
  margin-bottom: 10px;
  font-weight: bold;
}
</style>

