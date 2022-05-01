const jobsToSearch = [
  "Screenplay",
  "Writer",
  "Director",
  "Creator",
  "Novel",
  "Characters",
  "Story",
];

export function filterPeople(people: any[]) {
  let filteredPeople: any[] | undefined = [];
  if(people!== undefined){

  people.forEach((person) => {
    let valid: boolean = false;
    let job: string;
    let objectAsArray = Object.entries(person);

    objectAsArray.filter(([key, value]) => {
      if (key === "job" && jobsToSearch.includes(value as string)) {
        valid = true;
        job = value as string;
      }
    });
    objectAsArray.filter(([key, value]) => {
      if (key === "name" && valid === true) {
        filteredPeople!.push({ value, job });
      }
    });
  });
  }
  return filteredPeople;
}


