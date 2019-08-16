const countingSheep = function(num) {
    if (num === 0) {
      console.log("All sheep jumped over the fence");
      return;
    }
    console.log(num + ": Another sheep jumped over the fence");
    countingSheep(num - 1);
}

countingSheep(4);