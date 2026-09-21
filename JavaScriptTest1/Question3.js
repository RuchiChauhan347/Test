let s = "JavaScript makes web development interesting";

let w = s.split(" ");

let longest = "";

for (let i = 0; i < w.length; i++) {
    if (w[i].length > longest.length) {
        longest = w[i];
    }
}

console.log(longest);