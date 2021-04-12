function error(errorh) {
  if (!errorh) {
    return "No error provided.";
  } else {
    return `{title:<:error:824627790573600839> Error...}{color:FF0000}{description:${errorh}}`;
  }
}

function quickEmbed({title:titleh,color:typeh,desc:desch}) {
  //let title = titleh;
  let color = `FF0000`
  let description = desch;
  
  return `$color[${color}]
  $description[${description}]`
}

module.exports = { error, quickEmbed }