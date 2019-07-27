console.log('works');

// function DNAStrand(dna) {
//     //your code here
//     let convertedDNA = [];
//     for (let i = 0; i < dna.length; i++) {
//         switch (dna[i]) {
//             case 'T':
//                 convertedDNA.push('A');
//                 break;
//             case 'A':
//                 convertedDNA.push('T');
//                 break;
//             case 'G':
//                 convertedDNA.push('C');
//                 break;
//             case 'C':
//                 convertedDNA.push('G');
//                 break;
//         }
//     }

//     return convertedDNA.join('');
// }

function DNAStrand(dna) {
    this.pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };
    return dna.replace(/./g, letter => pairs[letter]);
}

console.log(DNAStrand('TTTGC'));
