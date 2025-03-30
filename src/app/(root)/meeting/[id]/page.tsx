export async function generateStaticParams() {
  // 🚀 Giả sử có các ID sẵn, có thể lấy từ database hoặc API
  const ids = ["123", "456", "789"];

  return ids.map((id) => ({ id }));
}

import MeetingClient from "./MeetingClient";

function MeetingPage({ params }: { params: { id: string } }) {
  return <MeetingClient id={params.id} />;
}

export default MeetingPage;
