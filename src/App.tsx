import Form from "./components/Form"
import fetchUsers from "./lib/fetchUsers"

fetchUsers()

function App() {

  return (
    <main className="bg-slate-700 min-h-screen p-5">
      <Form />
    </main>
  )

}

export default App
