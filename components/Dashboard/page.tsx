import { auth } from "@/auth";

const Dashboard = async () => {
    const session = await auth();
  return (
    <div className="bg-white rounded-lg shadow h-[200vh]">
      <h1>Dashboard</h1>
      <h2>
        Selamat Datang  Untuk:{" "}
        <span>
          {session?.user?.name} Role : {session?.user?.role}
        </span>
      </h2>
      {/*
      <p>{JSON.stringify(session)}</p>
      */}
    </div>
  )
}

export default Dashboard
