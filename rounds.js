// function buildMatchesTable(numberOfTeams) {
//   const startSet = [];
//   Array.from({length: numberOfTeams - 1}, (_, l) => {
//     return Array.from({length: numberOfTeams - 1 - l}, (_, y) => {
//       return [l + 1, numberOfTeams - y];
//     })
//       .reverse()
//       .map((el) => startSet.push(el));
//   });
//   let unicSet = [...startSet];

//   let tournament = [];
//   const rounds = numberOfTeams - 1;
//   const games = numberOfTeams / 2;

//   for (let round = 1; tournament.length < rounds; round++) {
//     let currentRound = [];
//     for (let game = 1; currentRound.length < games; game++) {
//       let currentGame = [round, game + 1];
//       currentRound.push(currentGame);
//     }
//     tournament.push(currentRound);
//     currentRound = [];
//   }
//   return tournament;
// }

function buildMatchesTable(numOfTeams) {
  let fixtures = [];
  if (numOfTeams % 2 !== 0) {
    numOfTeams++;
  }
  const rounds = numOfTeams - 1;
  const halfOfTeams = numOfTeams / 2;
  const teams = [];
  for (let i = 1; i <= numOfTeams; i++) {
    teams.push(i);
  }
  for (let i = 0; i < rounds; i++) {
    const round = [];
    for (let j = 0; j < halfOfTeams; j++) {
      const match = [];
      const team1Index = j;
      const team2Index = numOfTeams - 1 - j;
      match.push(teams[team1Index]);
      match.push(teams[team2Index]);
      round.push(match);
    }
    fixtures.push(round);
    teams.splice(1, 0, teams.pop()); // перемещаем команды, кроме первой
  }
  return fixtures;
}

console.log('8 :>> ', buildMatchesTable(8));
