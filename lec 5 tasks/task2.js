function findLongestName(...names) {
    console.log(names);
    if(names.length > 10) {
        console.log("You can only enter 10 names.");
    }else{
        let longestName = names[0];
        names.forEach(name => {
            if(name.length > longestName.length) {
                longestName = name;
            }
        })
        console.log(longestName);
    }

}
findLongestName("Ahmad", "Mohammad", "Ali", "Kamelia");