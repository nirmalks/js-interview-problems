for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j < 5; j++) {
    row += '*';
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += `${j + 1}`;
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += `${i + 1}`;
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 5; j > i; j--) {
    row += `*`;
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let row = '';
  for (let j = 5; j > i; j--) {
    row += `${5 - j + 1}`;
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';
  for (let j = 0; j < n - i - 1; j++) {
    row += ' ';
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    row += '*';
  }

  for (let j = 0; j < n - i - 1; j++) {
    row += ' ';
  }
  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';

  for (j = 0; j < i; j++) {
    row += ' ';
  }
  for (j = 0; j < 2 * n - (2 * i + 1); j++) {
    row += '*';
  }

  for (j = 0; j < i; j++) {
    row += ' ';
  }

  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';

  for (j = 0; j <= i; j++) {
    row += '*';
  }

  for (j = i + 1; j < n - 1; j++) {
    row += ' ';
  }

  console.log(row);
  console.log('');
}
console.log('final');
for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';

  for (j = 0; j <= n - i - 1; j++) {
    row += '*';
  }

  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';

  for (j = 0; j <= n - i - 1; j++) {
    row += '*';
  }

  console.log(row);
  console.log('');
}

for (let i = 0; i < 5; i++) {
  let n = 5;
  let row = '';
  let start = 0;
  if (i % 2 == 0) {
    start = 1;
  } else {
    start = 0;
  }
  for (j = 0; j <= i; j++) {
    row += start;
    start = 1 - start;
  }
  console.log(row);
  console.log('');
}

let n = 5;
let spaces = 2 * (n - 1);
for (let i = 0; i <= 5; i++) {
  let n = 5;
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }

  for (let j = 1; j <= spaces; j++) {
    row += ' ';
  }

  for (let j = i; j >= 1; j--) {
    row += j;
  }

  console.log(row);

  spaces -= 2;
}

for (let i = 0; i <= 5; i++) {
  let n = 5;
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }

  for (let j = 1; j <= spaces; j++) {
    row += ' ';
  }

  for (let j = i; j >= 1; j--) {
    row += j;
  }

  console.log(row);

  spaces -= 2;
}
let counter = 1;
for (let i = 0; i <= 5; i++) {
  let n = 5;
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '' + counter;
    counter++;
  }

  for (let j = n - i; j <= n; j++) {
    row += ' ';
  }

  console.log(row);
}
