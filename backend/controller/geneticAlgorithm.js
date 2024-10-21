function initializePopulation(popSize, halls, lectures, timeslots) {
  let population = [];
  for (let i = 0; i < popSize; i++) {
    let chromosome = [];
    const usedTimeslots = {}; // Track used timeslots for each hall

    lectures.forEach((lecture) => {
      let randomHall, randomTimeslot;

      // Ensure no conflicts with hall timeslot availability
      do {
        randomHall = halls[Math.floor(Math.random() * halls.length)];
        randomTimeslot =
          timeslots[Math.floor(Math.random() * timeslots.length)];
      } while (
        usedTimeslots[randomHall.hallName] &&
        usedTimeslots[randomHall.hallName].includes(randomTimeslot)
      );

      // Add timeslot to hall's usage tracker
      if (!usedTimeslots[randomHall.hallName]) {
        usedTimeslots[randomHall.hallName] = [];
      }
      usedTimeslots[randomHall.hallName].push(randomTimeslot);

      chromosome.push({
        ...lecture,
        hallName: randomHall.hallName,
        timeslot: randomTimeslot,
      });
    });
    population.push(chromosome);
  }
  return population;
}

function fitnessFunction(chromosome, halls) {
  let score = 0;
  const timeConflicts = new Set();
  const lecturerSchedule = {};

  chromosome.forEach((class1) => {
    const hall = halls.find((hall) => hall.hallName === class1.hallName);

    // Check hall capacity
    if (class1.studentCount <= hall.capacity) {
      score++;
    }

    // Track lecturer schedules
    if (!lecturerSchedule[class1.lecturer]) {
      lecturerSchedule[class1.lecturer] = [];
    }
    lecturerSchedule[class1.lecturer].push(class1.timeslot);

    // Check for conflicts
    chromosome.forEach((class2) => {
      if (class1 !== class2) {
        // Time conflict for batch or lecturer
        if (
          (class1.batch === class2.batch ||
            class1.lecturer === class2.lecturer) &&
          class1.timeslot === class2.timeslot
        ) {
          timeConflicts.add(class1.timeslot);
        }
      }
    });
  });

  // Penalize conflicts
  score -= timeConflicts.size;

  // Penalize lecturer overload (more than 10 lectures per week)
  Object.values(lecturerSchedule).forEach((schedule) => {
    if (schedule.length > 10) {
      score -= schedule.length - 10;
    }
  });

  return score;
}

function selection(population, halls) {
  return population
    .sort((a, b) => fitnessFunction(b, halls) - fitnessFunction(a, halls))
    .slice(0, population.length / 2);
}

function crossover(parent1, parent2) {
  const crossoverPoint = Math.floor(Math.random() * parent1.length);
  const child1 = [
    ...parent1.slice(0, crossoverPoint),
    ...parent2.slice(crossoverPoint),
  ];
  const child2 = [
    ...parent2.slice(0, crossoverPoint),
    ...parent1.slice(crossoverPoint),
  ];
  return [child1, child2];
}

function mutate(chromosome, halls, timeslots) {
  const usedTimeslots = {}; // Track used timeslots for each hall
  const index = Math.floor(Math.random() * chromosome.length);
  let randomTimeslot;

  do {
    randomTimeslot = timeslots[Math.floor(Math.random() * timeslots.length)];
  } while (
    usedTimeslots[chromosome[index].hallName] &&
    usedTimeslots[chromosome[index].hallName].includes(randomTimeslot)
  );

  chromosome[index].timeslot = randomTimeslot;

  // Update used timeslots for the hall
  if (!usedTimeslots[chromosome[index].hallName]) {
    usedTimeslots[chromosome[index].hallName] = [];
  }
  usedTimeslots[chromosome[index].hallName].push(randomTimeslot);

  return chromosome;
}

function geneticAlgorithm(popSize, generations, halls, lectures, timeslots) {
  let population = initializePopulation(popSize, halls, lectures, timeslots);

  for (let generation = 0; generation < generations; generation++) {
    population = selection(population, halls);

    let newPopulation = [];
    for (let i = 0; i < population.length; i += 2) {
      const [child1, child2] = crossover(
        population[i],
        population[i + 1] || population[0]
      );
      newPopulation.push(mutate(child1, halls, timeslots));
      newPopulation.push(mutate(child2, halls, timeslots));
    }

    population = newPopulation;
  }

  return population[0];
}

export { geneticAlgorithm };
