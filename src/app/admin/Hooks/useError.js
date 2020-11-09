/**
 * the use error hook
 */

 // deze functies worden gedestructerd in de component zelf

 export const useError = () => {
     const handleGqlError = (({graphQlErrors}) => {
         graphQlErrors.forEach(({message, extensions}) => {
             console.error(message);
         });
     });

     const handleError = e => {
         console.error(e.message);
     };

     return {handleGqlError, handleError}
 }