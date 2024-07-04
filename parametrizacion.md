# 1. Roles de Usuarios

    -User
    -Admin
    -SuperAdmin
    -Observador
    -Resolver

# 2. Registro de Usuarios

    -Nombre de usuario
    -Correo
    -Contraseña
    -Nombre completo
    -Puesto
    -Empresa

# 3. Creación de Tickets

    -Asunto
    -Descripción
    -Archivos
    -Fecha de creacion
    -Tipo
    -Prioridad
    -Fecha de estimado de cierre
    -Duracion


# 4. Asignación de Tickets

    -Un usuario puede crear varios tickets
    -Un ticket Puede ser asignado a varios Resolvers
    -Un ticket Puede ser observado por varios Observadores
    -Un ticket Puede ser cerrado por cualquier Resolvers

# 5. Estado de Tickets

    -Abierto
    -En curso
    -rechazado
    -Resuelto

# 6. Visualización de tickets
    
    -Un usuarios puede ver solo sus tickets
    -El admin y SuperAdmin pueden ver todos los Tickets
    -El observador solo puede ver los tickets a los que es observador
    -El resolver solo puede ver los tickets a los que fue asignado


# 7. Informes, Estadísticas, Búsqueda y Filtros

    -Dashboard
    -Tickets abiertos del mes
    -Tickets en curso del mes
    -Tickets cerrados del mes
    -Tickets por empresas
    -Tickets por empleados
    -Tickets por roles


# 8. Notificaciones

    -Correo

# 9. Comentarios
    -Un ticket puede tener muchas comentarios

# 10. Empresas
    -una empresa puede tener varios usuarios
    -una empresa puede tener varios tickets

la tabla user tendria relacion con Role y Company
User {
    id        
    username  
    email     
    password  
    fullName  
    companyId 
    roleId
    createdAt 
    updatedAt
}

Role {
    id             
    name      
    createdAt 
    updatedAt
}

Company {
    id             
    name     
    createdAt 
    updatedAt
}

Ticket {
    id                      
    subject           
    description       
    creationDate       
    type              
    priority          
    estimatedCloseDate 
    duration           
    status            
    creatorId   //este seria la relacion a un userId       
    companyId   //este seria el companyId del creatorId (userId)       
    createdAt          
    updatedAt 
}

//un ticket puede tener muchos comentarios
Comment {
    id                
    content     
    ticketId    //la relacion de en que ticket estara el cometario 
    authorId    //la relacion del autor del cometario es decir el userId
    createdAt    
    updatedAt   
}

// un ticket puede estar asignado como resolvers a varios usuarios
TicketResolver {
    id              
    ticketId    //la relacion de en que ticket
    resolverId //este seria la relacion a un userId 
    createdAt  
    updatedAt 
}

// un ticket puede estar asignado como Observers a varios usuarios
TicketObserver {
    id              
    ticketId    //la relacion de en que ticket
    observerId  //este seria la relacion a un userId 
    createdAt  
    updatedAt
}