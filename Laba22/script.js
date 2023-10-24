{
    // Задание 1
    const InputString = "I like regular expressions in JavaScript";
    console.log(`Поиск: по строке ${InputString}`)
    console.log(/JavaScript/.exec(InputString)[0]);
}

{
    const inputString = "sdo  e ddsf saerwrwe ewds";
    const regexPattern = /\S+ /g;
    
    const matches = inputString.match(regexPattern);
    
    if (matches) {
      console.log(matches);
    } else {
      console.log("Совпадений не найдено.");
    }
}

{
    const fullName = "Иван Иванов";

    const swappedName = fullName.replace(/(\S+) (\S+)/, "$2 $1");
    console.log(`${fullName} => ${swappedName}`); 

}
    