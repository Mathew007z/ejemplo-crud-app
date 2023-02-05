import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";
import {useState} from 'react';
import './crudapp.css';




const initialDb = [
  {
    id: 1,
    name: "Thor",
    arma: "martillo",
  },
  {
    id: 2,
    name: "Hulk",
    arma: "fuerza",
  },
  {
    id: 3,
    name: "IronMan",
    arma: "Trajes",
  },
  {
    id: 4,
    name: "DoctorStrange",
    arma: "Gema del tiempo",
  },
  {
    id: 5,
    name: "Capitan America",
    arma: "Escudo",
  },
];


const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    // Cuando este Null significa que va a haber una insercion de datos
    // Si da true, significa que se hara una edicion de datos.
    const [dataToEdit, setDataToEdit] = useState(null);
  // PUT
    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }
    // POST
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    }
    // DELETE
    const deleteData = (id) => {
        let isDelete = window.confirm(`Estas seguro de querer eliminar el registro ${id}?`)
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }else{
            return
        }
    }


  return(
    <div className="content-form">
        <h2>MARVEL</h2>
        <CrudForm 
        createData={createData} 
        updateData={updateData}
        dataToEdit={dataToEdit}
        // Necesitamos la actualizacion para poder editar los datos.
        setDataToEdit={setDataToEdit}
        />
        <CrudTable 
        db={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />
    </div>
  )
};

export default CrudApp;
