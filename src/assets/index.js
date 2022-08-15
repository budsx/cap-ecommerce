// * Function to import all assets
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
}

const images = importAll(
  require.context('./products', false, /\.(png|jpe?g|svg)$/)
);

export { images };
