import Messages from "@/components/messages";

export default async function MessagesPage() {
  const response = await fetch("http://localhost:8080/messages", {
    // cache: 'force-cache',
    next: {
      tags: ["msg"],
    },
    headers: {
      "X-ID": "page",
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
