const participants = [
    { name: "ALVIN", age: 21, cameTme: 10 },
    { name: "MOISE", age: 22, cameTme: 11 },
    { name: "EMILE", age: 25, cameTme: 9 },
    { name: "PATRICK", age: 23, cameTme: 10 },
    { name: "GLORIA", age: 21, cameTme: 11 },
    { name: "AUTHOR", age: 19, cameTme: 11 },
    { name: "LILIANE", age: 21, cameTme: 9 },
    { name: "CHANICE", age: 21, cameTme: 10 },
  ];
  const participantsObj = [];
  for (let i in participants){
      if(participants[i].age > 20 && participants[i].cameTme === 10){
        participantsObj.push(participants[i]);
      }
  }
  console.log(participantsObj);