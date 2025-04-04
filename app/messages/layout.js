// export const revalidate = 5;
// export const dynamic = 'force-dynamic'

export default async function MessagesLayout({ children }) {
  const response = await fetch("http://localhost:8080/messages", {
    // next: {
    //   revalidate: 5
    // },
    headers: {
      "X-ID": "layout",
    },
  });
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
