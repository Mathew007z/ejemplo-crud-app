



const CrudTableRow = ({db, setDataToEdit, deleteData}) => {
  return (
    <tr>
        <td>{db.name}</td>
        <td>{db.arma}</td>
        <td>
            <button onClick={() =>setDataToEdit(db)}>Editar</button>
            <button onClick={() =>deleteData(db.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow