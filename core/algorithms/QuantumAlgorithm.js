import { QuantumSimulator } from 'quantum-simulator';

class QuantumAlgorithm {
  async solveOptimizationProblem(problem) {
    const simulator = new QuantumSimulator();
    const solution = await simulator.run(problem);
    return solution;
  }
}

export default new QuantumAlgorithm();
