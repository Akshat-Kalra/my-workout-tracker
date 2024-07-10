// Exercise.js

class Exercise {
    constructor(number, exerciseName, sets, reps, weight) {
      this.exerciseNumber = number;
      this.exerciseName = exerciseName;
      this.sets = sets;
      this.reps = reps;
      this.weight = weight;
    }
  
    getExerciseNumber() {
      return this.exerciseNumber;
    }
  
    getExerciseName() {
      return this.exerciseName;
    }
  
    getSets() {
      return this.sets;
    }
  
    getReps() {
      return this.reps;
    }
  
    getWeight() {
      return this.weight;
    }
  
    exerciseVolume() {
      return this.sets * this.reps * this.weight;
    }
  }
  
  export default Exercise;
  