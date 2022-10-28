import fs from 'fs'

const eliminarArchivo = async (name: string) => {
  fs.unlink(name, (err) => {
    if(err){
      console.log(err)
    }
  })
}

export default eliminarArchivo