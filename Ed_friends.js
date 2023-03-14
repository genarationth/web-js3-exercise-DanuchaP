
//Part1
const friend = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
  };
  //Part2
  const ageFriend = (age) => new Date().getFullYear() - age;
  //Part3
  const greet = (name1, age1, name2, age2, name3, age3) => {
    console.log(
      `Welcome ${name1}, you are ${ageFriend(
        age1
      )}. Welcome ${name2}, you are ${ageFriend(
        age2
      )}. Welcome ${name3}, you are ${ageFriend(age3)}.`
    );
  };
  

  greet("Daniel", 1996, "Paul", 1997, "Samia", 1990);