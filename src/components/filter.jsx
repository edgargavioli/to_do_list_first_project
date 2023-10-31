 const filter = ({filter, setFilter, setOrder}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completos">Completos</option>
                    <option value="Incompletos">Incompletos</option>
                </select>
            </div>

            <div>
                <p>Ordem alfabética</p>
                <button onClick={() => setOrder("Asc")}>Asc</button>
                <button onClick={() => setOrder("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default filter