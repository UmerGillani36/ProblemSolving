const excerpt = (str) => {
    let stringLength = str.length;
    if (stringLength > 30) {
      str = str.substring(0, 30) + " ... ";
    }
    return str;
  }

  const result = excerpt('hey my name is syed umer shah gillani');

  console.log(result);