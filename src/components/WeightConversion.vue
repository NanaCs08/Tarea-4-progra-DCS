<template>
  <div class="container">
    <h1>Conversiones de Peso</h1>
    <div class="card conversion-form">
      <label for="weight">Ingrese el peso en kilogramos:</label>
      <input type="number" id="weight" v-model="inputWeight">
      
      <label for="unit">Seleccione la unidad de conversión:</label>
      <select id="unit" v-model="selectedUnit">
        <option value="libras">Libras</option>
        <option value="onzas">Onzas</option>
      </select>
      
      <button @click="convert">Convertir</button>
    </div>
    <div class="card result" v-if="convertedWeight !== null">
      <p>Resultado:</p>
      <p>{{ convertedWeight }} {{ selectedUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWeight: null,
      convertedWeight: null,
      selectedUnit: 'libras'
    };
  },
  methods: {
    convert() {
      if (this.selectedUnit === 'libras') {
        this.convertedWeight = (this.inputWeight * 2.20462).toFixed(2);
      } else if (this.selectedUnit === 'onzas') {
        this.convertedWeight = (this.inputWeight * 35.274).toFixed(2);
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
