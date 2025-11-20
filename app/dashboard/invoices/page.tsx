export default async function Page() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
  });
  return <p>Invoices Page</p>;
}
