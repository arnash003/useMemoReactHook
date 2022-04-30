import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";

export default function MemoTutorial () {
  const [data, setData] = useState(null);

  useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data);
    })
  }, []);

  const findLongestName =(comments: any) => {
    if (!comments) return null;

    let longestName = "";
    for (let i =0; i <comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
  
    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  return (
    <div className= "App">
      <div>
        {findLongestName(data)}
        </div>
      </div>
  );
}