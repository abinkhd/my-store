// program to find the largest among three numbers

// take input from the user

export const largestNumber = (num1, num2, num3) => {
  let largest = 0;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  console.log(largest);
  return largest;
};

largestNumber(3, 2, 1);
largestNumber(4, 3, 1);
