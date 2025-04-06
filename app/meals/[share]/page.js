export default async function SharePage({ params }) {
  const { share } = await params;
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        {share}
      </h1>
    </main>
  );
}
