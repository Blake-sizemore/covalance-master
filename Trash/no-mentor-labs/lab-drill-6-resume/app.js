let resume = {
    Name: "Christopher B Sizemore",
    Career: "Digital & Physical Designer / Print Enthusiast",
    Description: "My career has lead me through many different avenues of product design, development, management, marketing, billing and deployment.",
    Interests: ['Running', 'Process optimization', 'Traveling', 'Being a good human'],
    Positions: {
        position0:{
            company:"Whole Foods",
            title:"Packaging Print and Quality Control Manager",
            description:"Aid catogory purchasing teams with new, and existing, product packaging designs regarding material options and printing possibilities. Provide detailed instructions to marketing teams for design assest development. Facilitate internal and external stakeholder reviews to ensure compliacance of product claims and apperances for final product fulfillment. Create tools to better aid in communication and exacutation of all products across",
        },
        position1:{
            company:"Liasion Creative & Market",
            title:"Print Production Specalist",
            description:"Role Description: Provided print and digital marketing designs that conveyed client concepts, needs, and requests. Created and uploaded print ready files to in house production lines and 3rd party production vendors. Assisted customers and businesses with design, material, and costing decisions. Created and used templates for immediate in-house production, as well as third party vendors production, for an expanded range of printed products at improved rates. Assisted in digital ad creation and social media marketing.",
        },
        position2:{
            company:"PostNet",
            title:"Senior Designer, Production Coordinator, and Customer Success",
            description:"Created custom and templated designs for screen and sublimation printing, as well as embroidery. Produced and burned screens for print production team. Quality control and color management for all printed goods. Production supervisor and production associate for sublimation digital printing of garments and applicable accessories (Brother GT-351). Organized and archived art files (pre-existing and new) within Design and Pre-production Department for increased through-put. Prepared orders with clients and assisted them through the sales process, including garment choice and design decisions.",
        },
    },
    Skills: {
        skill1: {
            type:'Bam',
            skillName:'Marathon Running',},
        skill2: {
            type:'Bam',
            skillName:'Design Automation',},
        skill3: {
            type:'None',
            skillName:'Illustration',},
        skill4: {
            type:'none',
            skillName:'Adobe Creative Cloud',
        },
        skill4: {
            type:'none',
            skillName:'Project Managment',
        }   
        }
    }; 

let keyArr = Object.keys(resume); /* good - very basic console.log */
let valArr = Object.values(resume); /* good used a basic for loop and basic function to fully use this*/
let intArr = resume.Interests; /* good - used for of loop to log*/
let skiObj = resume.Skills; /* good *//* make a loop do this -> let skiValObj = Object.values(skiObj); console.log(skiValObj); */
let posObj = resume.Positions; /* good */
let posValObj = Object.values(posObj); /* good  */

console.log(keyArr[0]+': '+valArr[0].toUpperCase());
for(x=1;x<=2;++x) {
    console.log(keyArr[x]+': '+valArr[x]);
};
console.log(keyArr[3]);
for ( label of intArr){
    console.log('* '+label);
};
console.log(keyArr[4]); 
for (z=0;z<=2;++z){
   var p = Object.values(posValObj[z]) /* use var ( not let) inside of multi stack for loops */
   for ( y=0;y<1;++y) {
    displayPosition(p,y);
   }  
};
console.log(keyArr[5]);
for (w=0;w<=3;++w){
    var s = Object.values(skiObj);
    for (q=0;q<1;++q){
        var d = Object.values(s[w]);
        } console.log(displaySkill(d[0])+d[1]);
};

/* function */
function displaySkill(v1) {
    if (v1.length==3) {
        return '* BAM '
    } else {return'* '}
}
function displayPosition(var1, var2){
    console.log('* '+var1[var2+1]+' at '+var1[var2]+' - '+var1[var2+2])
}

/* Keep coming back to this to build more compressed coding for travel complex objects, try and get rid of all exrenal let vars and turn into functions */

/* Bad attempts */
/* Position object entrance - also used other working code to complete the above -
    let pos0ValArr = Object.values(pos0);console.log(pos0ValArr);
    let pos1ValArr = Object.values(pos1);console.log(pos1ValArr);
    let pos2ValArr = Object.values(pos2);console.log(pos2ValArr);
    let posKeyObj = Object.keys(posObj); console.log(posKeyObj);
    let pos0KeyArr = Object.keys(pos0);console.log(pos0KeyArr);
    let pos0 = posObj.position0; console.log(pos0);
    let pos1 = posObj.position1; console.log(pos1);
    let pos2 = posObj.position2; console.log(pos2);
    console.log(pos0ValArr[1]+' at '+pos0ValArr[0]+' - '+pos0ValArr[2]);
    console.log(pos1ValArr[1]+' at '+pos1ValArr[0]+' - '+pos1ValArr[2]);
    console.log(pos2ValArr[1]+' at '+pos2ValArr[0]+' - '+pos2ValArr[2]); */