import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";




function App() {
  const[username, setUserName]= useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop]= useState(false);
  const [earned, setEarned]= useState("$ 0");
   

  const data = [
    {
      id: 1,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "Txt",
          correct: false,
        },
        {
          text: "string",
          correct: true,
        },
        {
          text: "String",
          correct: false,
        },
        {
          text: "myString",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,
        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How do you insert COMMENTS in C++ code?",
      answers: [
        {
          text: "# This is a comment",
          correct: false,
        },
        {
          text: "/* This is a comment",
          correct: false,
        },
        {
          text: "%* This is a comment",
          correct: false,
        },
        {
          text: "// This is a comment",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which operator is used to add together two values?",
      answers: [
        {
          text: "The & sign",
          correct: false,
        },
        {
          text: "The * sign",
          correct: false,
        },
        {
          text: "The + sign",
          correct: true,
        },
        {
          text: "The / sign",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which header file lets us work with input and output objects?",
      answers: [
        {
          text: "#include <stream>",
          correct: false,
        },
        {
          text: "#include <iostream>",
          correct: true,
        },
        {
          text: "#include <iosstring>",
          correct: false,
        },
        {
          text: "#include <inputstr>",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which operator can be used to compare two values?",
      answers: [
        {
          text: "==",
          correct: true,
        },
        {
          text: ">=",
          correct: false,
        },
        {
          text: "=",
          correct: false,
        },
        {
          text: "<>",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "To declare an array in C++, define the variable type with:",
      answers: [
        {
          text: "()",
          correct: false,
        },
        {
          text: "{}",
          correct: false,
        },
        {
          text: "[]",
          correct: true,
        },
        {
          text: "none of above",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How do you create a function in C++?",
      answers: [
        {
          text: "functionName[]",
          correct: false,
        },
        {
          text: "functionName()",
          correct: true,
        },
        {
          text: "functionName.",
          correct: false,
        },
        {
          text: "(functionName)",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which keyword is used to create a class in C++?",
      answers: [
        {
          text: "class",
          correct: true,
        },
        {
          text: "className",
          correct: false,
        },
        {
          text: "class()",
          correct: false,
        },
        {
          text: "myClass",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which method can be used to find the highest value of x and y?",
      answers: [
        {
          text: "maxNum(x,y)",
          correct: false,
        },
        {
          text: "maximum(x,y)",
          correct: false,
        },
        {
          text: "largest(x,y)",
          correct: false,
        },
        {
          text: "max(x,y)",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which operator is used to multiply numbers?",
      answers: [
        {
          text: "%",
          correct: false,
        },
        {
          text: "&",
          correct: false,
        },
        {
          text: "*",
          correct: true,
        },
        {
          text: "#",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "How do you create a reference variable of an existing variable?",
      answers: [
        {
          text: "With the REF word",
          correct: false,
        },
        {
          text: "With the & operator",
          correct: true,
        },
        {
          text: "With the ref word",
          correct: false,
        },
        {
          text: "With the * operator",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "How do you start writing an if statement in C++?",
      answers: [
        {
          text: "if x > y then:",
          correct: false,
        },
        {
          text: "if x > y:",
          correct: false,
        },
        {
          text: "if (x > y)",
          correct: true,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "How do you start writing a while loop in C++?",
      answers: [
        {
          text: "x > y while {",
          correct: false,
        },
        {
          text: "while x > y :",
          correct: false,
        },
        {
          text: "while (x > y)",
          correct: false,
        },
        {
          text: "while x > y {",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which keyword is used to return a value inside a method?",
      answers: [
        {
          text: "get",
          correct: false,
        },
        {
          text: "return",
          correct: true,
        },
        {
          text: "void",
          correct: false,
        },
        {
          text: "break",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which statement is used to stop a loop?",
      answers: [
        {
          text: "break",
          correct: true,
        },
        {
          text: "stop",
          correct: false,
        },
        {
          text: "exit",
          correct: false,
        },
        {
          text: "continue",
          correct: false,
        },
      ],
    },
  ];
  
  
  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"₹ 1000"},
      {id:2, amount:"₹ 2000"},
      {id:3, amount:"₹ 3000"},
      {id:4, amount:"₹ 5000"},
      {id:5, amount:"₹ 10000"},
      {id:6, amount:"₹ 20000"},
      {id:7, amount:"₹ 40000"},
      {id:8, amount:"₹ 80000"},
      {id:9, amount:"₹ 160000"},
      {id:10, amount:"₹ 320000"},
      {id:11, amount:"₹ 640000"},
      {id:12, amount:"₹ 1250000"},
      {id:13, amount:"₹ 2500000"},
      {id:14, amount:"₹ 5000000"},
      {id:15, amount:"₹ 10000000"},
    ].reverse(),
  

  []);
  
 
  useEffect(() => {
    questionNumber > 1 && 
       setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
  }, [ moneyPyramid, questionNumber]);

     
  return (
    <div className="app">
    {username ? (
      <>
      <div className="main">
      {stop ? <h1 className="endText">You Earned: {earned} </h1> : (
<>       
        <div className="top">
          <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber} />
           </div>

        </div>
        <div className="bottom">
           <Trivia
            data={data} 
            setStop={setStop} 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            />
          </div> </>
          )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span> 
          </li>
        ))}
          </ul>
      </div>

      </>
    ) : <Start setUserName={setUserName} />}
      
    </div>
  );
}

export default App;
