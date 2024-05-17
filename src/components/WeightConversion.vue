<template>
  <div class="container">
    <h1>Conversiones de Peso</h1>
    <div class="card conversion-form">
      <label for="weight">Ingrese el peso:</label>
      <input type="number" id="weight" v-model="inputWeight">
      
      <label for="fromUnit">Seleccione la unidad de origen:</label>
      <select id="fromUnit" v-model="fromUnit">
        <option value="kilogramos">Kilogramos</option>
        <option value="gramos">Gramos</option>
        <option value="toneladas">Toneladas métricas</option>
        <option value="libras">Libras</option>
        <option value="onzas">Onzas</option>
      </select>
      
      <label for="toUnit">Seleccione la unidad de conversión:</label>
      <select id="toUnit" v-model="toUnit">
        <option value="kilogramos">Kilogramos</option>
        <option value="gramos">Gramos</option>
        <option value="toneladas">Toneladas métricas</option>
        <option value="libras">Libras</option>
        <option value="onzas">Onzas</option>
      </select>
      
      <button @click="convert">Convertir</button>
    </div>
    <div class="card result" v-if="convertedWeight !== null">
      <p>Resultado:</p>
      <p>{{ convertedWeight }} {{ toUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWeight: null,
      convertedWeight: null,
      fromUnit: 'kilogramos',
      toUnit: 'libras'
    };
  },
  methods: {
    convert() {
      const weight = parseFloat(this.inputWeight);
      let result = null;

      if (this.fromUnit === 'kilogramos') {
        if (this.toUnit === 'gramos') {
          result = weight * 1000;
        } else if (this.toUnit === 'toneladas') {
          result = weight / 1000;
        } else if (this.toUnit === 'libras') {
          result = weight * 2.20462;
        } else if (this.toUnit === 'onzas') {
          result = weight * 35.274;
        } else {
          result = weight;
        }
      } else if (this.fromUnit === 'gramos') {
        if (this.toUnit === 'kilogramos') {
          result = weight / 1000;
        } else if (this.toUnit === 'toneladas') {
          result = weight / 1000000;
        } else if (this.toUnit === 'libras') {
          result = weight * 0.00220462;
        } else if (this.toUnit === 'onzas') {
          result = weight * 0.035274;
        } else {
          result = weight;
        }
      } else if (this.fromUnit === 'toneladas') {
        if (this.toUnit === 'kilogramos') {
          result = weight * 1000;
        } else if (this.toUnit === 'gramos') {
          result = weight * 1000000;
        } else if (this.toUnit === 'libras') {
          result = weight * 2204.62;
        } else if (this.toUnit === 'onzas') {
          result = weight * 35274;
        } else {
          result = weight;
        }
      } else if (this.fromUnit === 'libras') {
        if (this.toUnit === 'kilogramos') {
          result = weight * 0.453592;
        } else if (this.toUnit === 'gramos') {
          result = weight * 453.592;
        } else if (this.toUnit === 'toneladas') {
          result = weight * 0.000453592;
        } else if (this.toUnit === 'onzas') {
          result = weight * 16;
        } else {
          result = weight;
        }
      } else if (this.fromUnit === 'onzas') {
        if (this.toUnit === 'kilogramos') {
          result = weight * 0.0283495;
        } else if (this.toUnit === 'gramos') {
          result = weight * 28.3495;
        } else if (this.toUnit === 'toneladas') {
          result = weight * 2.835e-5;
        } else if (this.toUnit === 'libras') {
          result = weight * 0.0625;
        } else {
          result = weight;
        }
      }

      this.convertedWeight = result.toFixed(2);
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
