fetch("https://backend-1-ryeq.onrender.com/api/reviews")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });