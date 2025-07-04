function Header({ addCards, setTurns }) {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-4">Memory Match</h1>
      <button className="border-2 border-black p-1 bg-purple-200" onClick={() => { addCards(), setTurns(0) }}>New Match</button>
    </div>
  )

}

export default Header