let lab1=[5,5,0,5,5,10,10];
let lab2=[5,5,5,5,5,5,10];
let lab3=[5,9,10,15];
let lab4_5=[10,5,3,5,5,5,10,10,10,8,5];
let lab6=[5,5,10,5,5,10];
let lab8=[5,10,10,10,5];

let quiz1=34;



function get_sum(lab) {
	let sum_lab=0;
    let i=0;
    while (i<lab.length) {
	sum_lab+=lab[i]
	i++;
}
return sum_lab
}


function main(first,second,third,forth,fifth,sixth){
       a=get_sum(first);
       b=get_sum(second);
       c=get_sum(third);
       d=get_sum(forth);
       e=get_sum(fifth);
       f=get_sum(sixth);

       total= quiz1+(a+b+c+d+e+f)*6/28;
       const results = {
	lab1:lab1, // array of scores for lab1
	lab2:lab2, // array of scores for lab2
	lab3:lab3, // array of scores for lab3
	lab4_5:lab4_5, // array of scores for lab4 and 5
	lab6:lab6, // array of scores for lab6
	lab8:lab8, // array of scores for lab8
	quiz1:quiz1 , // score of quiz1
	sums:[a,b,c,d,e,f],
	sumtotal:a+b+c+d+e+f, // array of sums of each lab
	total_score: total, // computed total score
};
      return results
}

let object=main(lab1,lab2,lab3,lab4_5,lab6,lab8);


console.log(object);







