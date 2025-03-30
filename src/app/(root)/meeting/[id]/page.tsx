export async function generateStaticParams() {
  return [];
}

import MeetingClient from "./MeetingClient";

function MeetingPage({ params }: { params: { id: string } }) {
  return <MeetingClient id={params.id} />;
}

export default MeetingPage;
