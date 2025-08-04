import { listPeople } from "@/server/repositories/People";

export const dynamic = "force-dynamic";

export default async function Home() {
  const people = await listPeople();
  return (
    <div className="max-w-[800px] p-4 mx-auto">
      <h1 className="mb-2 font-bold text-2xl">People</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Postcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.postcode}</td>
              <td>{p.latitude}</td>
              <td>{p.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
