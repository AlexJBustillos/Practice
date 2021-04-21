// [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// const openOrSenior = (data) => {
//     data.map((info) => {
//         if (info[0] >= 55 && info[1] > 7) {
//             return 'Senior';
//         } else {
//             return 'Open';
//         }
//     })
// }

const openOrSenior = (data) => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
