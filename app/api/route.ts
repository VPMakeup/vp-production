import { NextResponse } from "next/server";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const start = Number(searchParams.get("start") || 0);

  if (!category) {
    return NextResponse.json([]);
  }

  const projects = await getProjectsByCategoryPaginated(category, start, 9);

  return NextResponse.json(projects);
}
