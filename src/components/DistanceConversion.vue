<template>
  <div class="container">
    <h1>Conversiones de Distancia</h1>
    <div class="card conversion-form">
      <label for="distance">Ingrese la distancia en metros:</label>
      <input type="number" id="distance" v-model="inputDistance">
      
      <label for="unit">Seleccione la unidad de conversión:</label>
      <select id="unit" v-model="selectedUnit">
        <option value="kilómetros">Kilómetros</option>
        <option value="centímetros">Centímetros</option>
        <option value="millas">Millas</option>
        <option value="yardas">Yardas</option>
        <option value="pies">Pies</option>
        <option value="pulgadas">Pulgadas</option>
      </select>
      
      <button @click="convert">Convertir</button>
    </div>
    <div class="card result" v-if="convertedDistance !== null">
      <p>Resultado:</p>
      <p>{{ convertedDistance }} {{ selectedUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputDistance: null,
      convertedDistance: null,
      selectedUnit: 'kilómetros'
    };
  },
  methods: {
    convert() {
      switch (this.selectedUnit) {
        case 'kilómetros':
          this.convertedDistance = (this.inputDistance / 1000).toFixed(2);
          break;
        case 'centímetros':
          this.convertedDistance = (this.inputDistance * 100).toFixed(2);
          break;
        case 'millas':
          this.convertedDistance = (this.inputDistance / 1609.34).toFixed(2);
          break;
        case 'yardas':
          this.convertedDistance = (this.inputDistance * 1.09361).toFixed(2);
          break;
        case 'pies':
          this.convertedDistance = (this.inputDistance * 3.28084).toFixed(2);
          break;
        case 'pulgadas':
          this.convertedDistance = (this.inputDistance * 39.3701).toFixed(2);
          break;
        default:
          this.convertedDistance = this.inputDistance;
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
