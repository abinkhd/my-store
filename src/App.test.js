import {
  fireEvent,
  getAllByRole,
  getByRole,
  render,
  screen,
  within,
} from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const textElement = screen.getByText("hello");
//   expect(textElement).toBeInTheDocument();
// });

// test('Check Hi in image alt and title', () => {
//   render(<App />);
//   const image = screen.getByRole('img');
//   expect(image).toHaveAttribute('Alt','hi');
//   expect(image).toHaveAttribute('title','This is an Image')
// });

// test('Check Input Attributes', () => {
//   render(<App />);
//   const myInput = screen.getByRole("textbox");
//   expect(myInput).toHaveAttribute('id','myinput');
//   expect(myInput).toHaveAttribute('name','myname');
//   expect(myInput).toHaveAttribute('value','Abhin');

// });

// test('Check Button Clicked ', () => {
//   render(<App/>);
//   const myButton=screen.getByRole('button');
//   fireEvent.click(myButton);
//   expect(screen.getByText(/Button Clicked/i)).toBeInTheDocument();
//   expect(myButton).toHaveTextContent('Clicked');
// })

// test('Check List',
//   ()=>{
//     render(<App/>)
//     const list=screen.getByRole('list');
//     const myList=within(list).getAllByRole('listitem');
//     myList[0].getElementsByClassName('abc');
//   }
// )

// describe("Check Styles of Buttons", () => {
//   render(<App />);
//   const buttons = screen.getAllByRole("button");
//   expect(buttons.length).toBe(2);
//   test("check Click button style", () => {
//     expect(buttons[0
//   }),
//   test("check button2 style", () => {
//     const btn2Style = getComputedStyle(buttons[1]);
//     expect(btn2Style.textAlign).toBe("center  ");
//   });
// });


test.skip('Check count increment',()=>{
  render(<App/>);
  const textElement=screen.getByTestId('display')
  let initialValue=0;
  expect(parseInt(textElement.textContent)).toBe(initialValue);
  const button=screen.getByRole('button')
  fireEvent.click(button);
  console.log(parseInt(textElement.textContent))
  expect(parseInt(textElement.textContent)).toBe(initialValue=initialValue+1);
  fireEvent.click(button);
  console.log(parseInt(textElement.textContent))
  expect(parseInt(textElement.textContent)).toBe(initialValue=initialValue+1);
  
})