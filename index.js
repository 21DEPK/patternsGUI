const formElem = document.querySelector("form");
const outputElem = document.querySelector(".output");
const submitBtn = document.querySelector("[type='submit']");
outputElem.style.display = "none";

formElem.addEventListener("submit", function (event) {
  submitBtn.style.display = "none";
  event.preventDefault();
  outputElem.innerHTML = "";
  const formData = new FormData(this);
  const finalFormData = {};
  formData.forEach(function (value, key) {
    finalFormData[key] = value;
  });
  outputElem.style.display = "block";
  matchCase(finalFormData.patternName, finalFormData.rows);
});

async function matchCase(input, num) {
  switch (input) {
    case "squareFillPattern":
      await squareFillPattern(num);
      submitBtn.style.display = "block";
      break;
    case "butterflyStarPattern":
      await butterflyStarPattern(num);
      submitBtn.style.display = "block";
      break;
    case "diamondPattern":
      await diamondPattern(num);
      submitBtn.style.display = "block";
      break;
    case "hollowDiamondPyramidPattern":
      await hollowDiamondPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "hollowHourglassPattern":
      await hollowHourglassPattern(num);
      submitBtn.style.display = "block";
      break;
    case "hollowReverseTrianglePattern":
      await hollowReverseTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "hollowTrianglePattern":
      await hollowTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "kPattern":
      await kPattern(num);
      submitBtn.style.display = "block";
      break;
    case "leftHalfPyramidPattern":
      await leftHalfPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "mirrorImageTrianglePattern":
      await mirrorImageTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "numberChangingPyramidPattern":
      await numberChangingPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "numberIncreasingPyramidPattern":
      await numberIncreasingPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "numberIncreasingReversePyramidPattern":
      await numberIncreasingReversePyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "numberTrianglePattern":
      await numberTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "palindromeTriangularPattern":
      await palindromeTriangularPattern(num);
      submitBtn.style.display = "block";
      break;
    case "pascalsTrianglePattern":
      await pascalsTriangle(num);
      submitBtn.style.display = "block";
      break;
    case "reverseLeftHalfPyramidPattern":
      await reverseLeftHalfPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "reverseNumberTrianglePattern":
      await reverseNumberTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "reverseRightHalfPyramidPattern":
      await reverseRightHalfPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "rhombusPattern":
      await rhombusPattern(num);
      submitBtn.style.display = "block";
      break;
    case "rightHalfPyramidPattern":
      await rightHalfPyramidPattern(num);
      submitBtn.style.display = "block";
      break;
    case "rightPascalsTrianglePattern":
      await rightPascalsTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    case "squareHollowPattern":
      await squareHollowPattern(num);
      submitBtn.style.display = "block";
      break;
    case "triangleStarPattern":
      await triangleStarPattern(num);
      submitBtn.style.display = "block";
      break;
    case "zeroOneTrianglePattern":
      await zeroOneTrianglePattern(num);
      submitBtn.style.display = "block";
      break;
    default:
      console.log("Invalid Input");
      submitBtn.style.display = "block";
  }
}

async function printContent(content) {
  let node = document.createElement("pre");
  await new Promise((resolve) => {
    setTimeout(() => {
      if (content) node.innerText = ` ${content} `;
      else node.innerText = ` `;
      resolve();
    }, 10);
  });
  outputElem.appendChild(node);
}
function nextLine() {
  let node = document.createElement("br");
  outputElem.appendChild(node);
}
function factorial(num) {
  if (num == 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) result *= i;
  return result;
}
function pascalCofficient(n, r) {
  let fact_n = factorial(n);
  let fact_r = factorial(r);
  let fact_n_minus_r = factorial(n - r);
  let result = fact_n / (fact_r * fact_n_minus_r);
  return result;
}
async function squareFillPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col != num) {
      await printContent("*");
      col++;
    }
    rows++;
    nextLine();
  }
}
async function butterflyStarPattern(num) {
  let row = 1;
  const last = 2 * num - 1;
  let middle = last;
  while (row <= last) {
    let col = 1;
    while (col <= last) {
      if (row <= num) {
        if ((col <= row || col >= last - row) && (row + col) % 2 == 0)
          await printContent("*");
        else await printContent(" ");
      } else {
        if ((col >= row || col <= middle) && (row + col) % 2 == 0)
          await printContent("*");
        else await printContent(" ");
      }
      col++;
    }
    nextLine();
    middle--;
    row++;
  }
}
async function diamondPattern(num) {
  let rows = 0;
  let temp = num - 2;
  while (rows != 2 * num - 1) {
    if (rows < num) {
      let col = 0;
      while (col < num - rows - 1) {
        await printContent("");
        col++;
      }
      col = 0;
      while (col <= rows) {
        await printContent("*");
        col++;
      }
    } else {
      let col = 0;
      while (col < num - temp - 1) {
        await printContent("");
        col++;
      }
      col = 0;
      while (col <= temp) {
        await printContent("*");
        col++;
      }
      temp--;
    }
    rows++;
    nextLine();
  }
}
async function hollowDiamondPyramidPattern(num) {
  let rows = 0;
  let temp = num - 2;
  while (rows != 2 * num - 1) {
    if (rows < num) {
      let col = 0;
      while (col < num - rows - 1) {
        await printContent("");
        col++;
      }
      col = 0;
      while (col <= rows) {
        if (col == rows || col == 0) await printContent("*");
        else await printContent(" ");
        col++;
      }
    } else {
      let col = 0;
      while (col < num - temp - 1) {
        await printContent("");
        col++;
      }
      col = 0;
      while (col <= temp) {
        if (col == 0 || col == temp) await printContent("*");
        else await printContent(" ");
        col++;
      }
      temp--;
    }
    rows++;
    nextLine();
  }
}
async function hollowHourglassPattern(num) {
  let rows = num - 1;
  while (rows >= 0) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      if (rows == num - 1 || col == 0 || col == rows) await printContent("*");
      else await printContent(" ");
      col++;
    }
    rows--;
    nextLine();
  }

  rows = 1;
  while (rows != num) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      if (col == 0 || col == rows || rows == num - 1) await printContent("*");
      else await printContent(" ");
      col++;
    }
    rows++;
    nextLine();
  }
}
async function hollowReverseTrianglePattern(num) {
  let rows = num - 1;
  while (rows >= 0) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      if (rows == num - 1 || col == 0 || col == rows) await printContent("*");
      else await printContent(" ");
      col++;
    }
    rows--;
    nextLine();
  }
}
async function hollowTrianglePattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      if (col == 0 || col == rows || rows == num - 1) await printContent("*");
      else await printContent(" ");
      col++;
    }
    rows++;
    nextLine();
  }
}
async function kPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = num - 1;
    while (col >= rows) {
      await printContent("*");
      col--;
    }
    rows++;
    nextLine();
  }
  rows = 1;
  while (rows != num) {
    let col = 0;
    while (col <= rows) {
      await printContent("*");
      col++;
    }
    rows++;
    nextLine();
  }
}
async function leftHalfPyramidPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 1;
    while (col != +num + 1) {
      if (col >= num - rows) await printContent("*");
      else await printContent(" ");
      col++;
    }
    rows++;
    nextLine();
  }
}
async function mirrorImageTrianglePattern(num) {
  let rows = num - 1;

  while (rows >= 0) {
    let count = num - rows;
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(count);
      count++;
      col++;
    }
    rows--;
    nextLine();
  }
  rows = 1;
  while (rows != num) {
    let count = num - rows;
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(count);
      count++;
      col++;
    }
    rows++;
    nextLine();
  }
}
async function numberChangingPyramidPattern(num) {
  let rows = 0;
  let temp = 1;
  while (rows != num) {
    let col = 1;
    while (col <= rows + 1) {
      await printContent(`${temp}`);
      await printContent(``);
      await printContent(``);
      temp++;
      col++;
    }
    rows++;
    nextLine();
  }
}
async function numberIncreasingPyramidPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 1;
    while (col <= rows + 1) {
      await printContent(col);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function numberIncreasingReversePyramidPattern(num) {
  let rows = num - 1;
  while (rows != num) {
    if (rows < 0) break;
    let col = 1;
    while (col <= rows + 1) {
      await printContent(col);
      col++;
    }
    rows--;
    nextLine();
  }
}
async function numberTrianglePattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(rows + 1);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function palindromeTriangularPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 2;
    let temp = 1;
    let temp2 = num;
    while (col <= 2 * num) {
      if (col <= num) {
        if (col < num - rows + 1) await printContent(" ");
        else await printContent(temp2);
      } else {
        if (temp <= rows + 1) await printContent(temp);
        temp++;
      }
      temp2--;
      col++;
    }
    rows++;
    nextLine();
  }
}

// not solved
async function pascalsTriangle(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent("");
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(pascalCofficient(rows, col));
      await printContent(" ");
      col++;
    }
    rows++;
    nextLine();
  }
}

async function zeroOneTrianglePattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 1;
    while (col <= rows + 1) {
      await printContent(`${(rows + col) % 2}`);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function reverseLeftHalfPyramidPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 1;
    while (col != +num + 1) {
      if (col < rows + 1) await printContent(` `);
      else await printContent(`*`);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function reverseNumberTrianglePattern(num) {
  let rows = num - 1;
  while (rows >= 0) {
    let count = num - rows;
    let col = 0;
    while (col < num - rows - 1) {
      await printContent(``);
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(count);
      count++;
      col++;
    }
    rows--;
    nextLine();
  }
}
async function reverseRightHalfPyramidPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = num - 1;
    while (col >= rows) {
      await printContent(`*`);
      col--;
    }
    rows++;
    nextLine();
  }
}
async function rhombusPattern(num) {
  let rows = 0;
  while (rows != +num + 1) {
    let col = 0;
    while (col < rows) {
      await printContent(``);
      col++;
    }
    col = 0;
    while (col != num) {
      await printContent(`*`);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function rightHalfPyramidPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col <= rows) {
      await printContent(`*`);
      col++;
    }
    rows++;
    nextLine();
  }
}
async function rightPascalsTrianglePattern(num) {
  let row = 0;
  let temp = 2 * +num - 1;
  while (row < 2 * +num - 1) {
    let col = 0;
    while (col < num) {
      if (col <= row && col < temp) {
        if ((row + col) % 2 == 0) await printContent(`*`);
        else await printContent(` `);
      }
      col++;
    }
    temp--;
    nextLine();
    row++;
  }
}
async function squareHollowPattern(num) {
  let rows = 0;
  while (rows != num) {
    let cols = 0;
    while (cols != num) {
      if (rows == 0 || cols == 0 || rows == num - 1 || cols == num - 1)
        await printContent(`*`);
      else await printContent(` `);
      cols++;
    }
    rows++;
    nextLine();
  }
}
async function triangleStarPattern(num) {
  let rows = 0;
  while (rows != num) {
    let col = 0;
    while (col < num - rows - 1) {
      await printContent(``);
      col++;
    }
    col = 0;
    while (col <= rows) {
      await printContent(`*`);
      col++;
    }
    rows++;
    nextLine();
  }
}
