import { listPeople } from "@/server/repositories/People";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const people = await listPeople();
  return NextResponse.json(people);
}
