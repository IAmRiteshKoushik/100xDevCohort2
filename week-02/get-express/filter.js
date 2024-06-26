let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

ans = arr.filter(find);
console.log(ans);

arr = arr.map(transform);
console.log(arr);

function transform(i){
    return i * 2;
}

function find(i){
    return i % 2 == 0;
}
