# SHM Stimulator

An **interactive simulation tool** for visualizing **Simple Harmonic Motion (SHM)**, including **spring-mass systems** and **pendulums**. Users can adjust parameters such as mass, spring constant, and pendulum length, and see dynamic graphs of motion, energy, and phase diagrams in real time.

## Table of Contents

- [Features](#features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Technologies](#technologies)  
- [Connect](#connect)  
- [Contributing](#contributing)  
- [License](#license)  

---


## Features

- Spring-mass and pendulum configurations  
- Adjustable mass, spring constant, and pendulum length  
- Real-time motion graphs of displacement, velocity, and acceleration  
- Energy bars displaying **Kinetic Energy (KE)** and **Potential Energy (PE)**  
- Phase diagrams for better understanding of oscillatory motion  
- Interactive canvas with smooth animations  

---

## Project Structure

```
src/
 ├─ App.jsx                  # Main application component
 ├─ main.jsx                 # Entry point for React app
 ├─ index.css                # Global styles
 ├─ components/
 │   ├─ Controls.jsx         # UI controls for parameter adjustments
 │   ├─ SHMCanvas.jsx        # Canvas component for spring-mass simulation
 │   ├─ PendulumCanvas.jsx   # Canvas component for pendulum simulation
 │   ├─ EnergyBarsComponent.jsx # Displays KE and PE bars
 │   └─ Graph.jsx            # Real-time motion and phase graph
 └─ utils/
     └─ shmPhysics.js        # Physics calculations for SHM and pendulum
```

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd shm-stimulator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```
http://localhost:5173
```

---

## Usage

- Use the **Controls panel** to set:
  - Mass (m)  
  - Spring constant (k)  
  - Pendulum length (L)  
  - Initial amplitude (A)  
- Click **Play** to start the simulation  
- Observe dynamic motion on canvas and live graphs  
- Toggle between spring-mass and pendulum modes  

---

## Technologies

- **React 18** – Frontend UI framework  
- **Chart.js** – Real-time motion and phase plotting  
- **HTML5 Canvas API** – Smooth physics animation  
- **Tailwind CSS** – Styling  
- **JavaScript** – Core logic in `shmPhysics.js`  

---

## Connect

- **GitHub**: [https://github.com/Ardhaya-Johari](https://github.com/Ardhaya-Johari)  
- **LinkedIn**: [https://www.linkedin.com/in/ardhaya-johari-819275321/](https://www.linkedin.com/in/ardhaya-johari-819275321/)

---

## Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

