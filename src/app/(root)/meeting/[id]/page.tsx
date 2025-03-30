import MeetingClient from "./MeetingClient";
import { useParams } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

function MeetingPage() {
  const { id } = useParams();
  return <MeetingClient id={id as string} />;
}

export default MeetingPage;
