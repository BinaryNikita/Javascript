for (let i = 1; i <= 5; i++) {
  let line = '';

  for (let j = 1; j <= 5 - i; j++) {
    line += ' ';
  }

  for (let j = 1; j <= i; j++) {
    line += '*';
  }

  console.log(line);
}

for (let i = 1; i <= 5; i++) {
  let line = '';

  for (let j = 1; j <= i; j++) {
    line += ' ';
  }

  for (let j = 1; j <= 5 - i; j++) {
    line += '*';
  }

  console.log(line);
}
