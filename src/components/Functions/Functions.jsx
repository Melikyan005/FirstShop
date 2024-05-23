// export function addTocart(item,cartData) {
//     let addedBool = false;

//     cartData.forEach((elem) => {
//       if (elem.id === item.id) {
//         addedBool = true;
//         setcartData((prev) => {
//           return prev.map((el) => {
//             if (el.id === item.id) {
//               return {
//                 ...el,
//                 count: ++el.count,
//                 initPrice: item.price * el.count,
//               };
//             } else {
//               return item;
//             }
//           });
//         });
//       }
//     });

//     if (!addedBool) {
//       setcartData((prev) => {
//         return [...prev, item];
//       });
//     }
//   }