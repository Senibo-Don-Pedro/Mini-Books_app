import { useState } from "react"
import BookCreate from "./components/BookCreate"

const App = () => {
  const [books, setBooks] = useState([])

  const createBooks = (title) => {
    console.log("Add book with", title)
  }

  return (
    <div>
      <BookCreate onCreate={createBooks} />
    </div>
  )
}

export default App
