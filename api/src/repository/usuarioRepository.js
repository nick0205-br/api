import { con } from './connection.js'

export function loging (email, senha){
    const comando =
        `SELECT id_usuario 	id,
            nm_usuario		nome,
            ds_email	    	email
        FROM tb_usuario
        WHERE ds_email      	= ?
        AND ds_senha	        = ?`
    
    const resp = con.query(comando ,)
}
