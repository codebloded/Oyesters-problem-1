const processData = input => {
    const lines = input.split('\n');
    const birds = lines[1].split(' ').map(i => parseInt(i));
    const birdsCounts = [];
    for(let i = 0; i < birds.length; i++) {
        if(birdsCounts[birds[i]]) {
            birdsCounts[birds[i]] = ++birdsCounts[birds[i]];
        } else {
            birdsCounts[birds[i]] = 1
        }
    }
 
    let maxBirdType = 0;
    let maxBirdTypeCount = 0;
    for(let i = 0; i < birds.length; i++) {
        if(birdsCounts[birds[i]] > maxBirdTypeCount) {
            maxBirdTypeCount = birdsCounts[birds[i]];
            maxBirdType = birds[i]
        }
    }
  
    let minBirdType=Math.min(...birds) ;
    
    let res = [maxBirdType , minBirdType]
    console.log(res)
};