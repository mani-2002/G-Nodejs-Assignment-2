const path = process.env.PATH;

if (path) {
  console.log(`The PATH variable is set to: ${path}`);
} else {
  console.log('The PATH variable is not set.');
}
