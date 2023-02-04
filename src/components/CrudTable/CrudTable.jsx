import CrudTableRow from "../CrudTableRow/CrudTableRow"




const CrudTable = ({db, deleteData, setDataToEdit}) => {
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Arma</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    db.length === 0 ? <tr><td colSpan='3'>Sin Datos</td></tr>
                    : db.map((db) => (
                        <CrudTableRow 
                        db={db} 
                        key={db.id}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                        />
                    )) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable