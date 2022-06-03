  export const getPersonGender = (value: number): string => {
    let gender: string = "";
    switch (value) {
      case 1: {
        gender = "Female";
        break;
      }
      case 2: {
        gender = "Male";
        break;
      }
      case 3: {
        gender = "Non-Binary";
        break;
      }
      default: {
        gender = "Not specified";
        break;
      }
    }
    return gender;
  };
