export const handleError = (error: any) => {
  console.log("=".repeat(40));
  console.log("❌ Error occurred while fetching data.");
  console.log(error);
  console.log("=".repeat(40));
};
