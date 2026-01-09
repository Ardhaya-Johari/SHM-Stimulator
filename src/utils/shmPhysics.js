// Angular frequency for spring-mass
export function calculateOmega(k, m) {
  return Math.sqrt(k / m);
}

// Displacement
export function displacement(A, omega, t) {
  return A * Math.cos(omega * t);
}

// Velocity
export function velocity(A, omega, t) {
  return -A * omega * Math.sin(omega * t);
}

// Potential Energy
export function potentialEnergy(k, x) {
  return 0.5 * k * x * x;
}

// Kinetic Energy
export function kineticEnergy(m, v) {
  return 0.5 * m * v * v;
}

// Pendulum angular frequency
export function pendulumOmega(g, L) {
  return Math.sqrt(g / L);
}
